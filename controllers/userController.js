const Users = require('../models/Users')
const gfy = require('gfycat-style-urls')

const getAllUsers = (req, res) => {
  Users.find({}, (err, users) => {
    if (err) return res.status(500).send(err)
    res.send(users)
  })
}

const addUser = async (req, res) => {
  let newUser = Users()
  let username = await generateUniqueId()

  newUser.name = req.body.name


  if (newUser.name.length < 3) {
    res.send({
      code: -1,
      message: 'The username length must not be less than 2 digits',
    })

    return
  }

  newUser.dateJoined = Date.now()
  newUser.processedTotal =
    req.body.processedTotal !== undefined ? req.body.processedTotal : 0
  newUser.processedRecord =
    req.body.processedRecord !== undefined ? req.body.processedRecord : 0
  newUser.username = username

  newUser.save((err, user) => {
    if (err) {
      console.log('Failed to save user')
      res.status(500)
      res.render('error', { error: err })
    } else {
      res.send({
        name: req.body.name,
        username: username,
      })
    }
  })
}

const deleteUser = (req, res) => {
  // If body doesn't exist or username not specified
  if (req.body.username === undefined) {
    res.send("Error: Missing 'username' in body")
    return
  }

  Users.findOneAndRemove(
    { username: req.body.username },
    (err, deletedUser) => {
      if (err) return res.status(500).send(err)
      if (!deletedUser) return res.send('User not found')

      const response = {
        message: 'User successfully deleted',
        username: deletedUser.username,
      }
      return res.send(response)
    }
  )
}

const updateUser = (req, res) => {
  // If body doesn't exist or username not specified
  if (req.body.username === undefined) {
    res.send("Error: Missing 'username' in body")
    return
  }

  let username = req.body.username
  let newUser = req.body
  Users.findOneAndUpdate(
    { username: username },
    newUser,
    { new: true },
    (err, updatedUser) => {
      if (err) return res.status(500).send(err)
      if (!updatedUser) return res.send('User not found')
      res.send(updatedUser)
    }
  )
}

const loginUser = async (req, res) => {
  const allUsers = await Users.find()
  // search for user in the database via their ID
  const user = allUsers.find((user) => user.username === req.query.username)
  if (user) {
    res.send({
      username: user.username,
      name: user.name,
    })
  } else {
    // if an user is not found, return user does not exist.
    res.send({ error: 'User Does Not Exist' })
  }
}

//Generate a unique id, ensuring it doesn't already exist in database
const generateUniqueId = async () => {
  let generatedUsername = gfy.generateCombination(2, '-', true)

  //Check whether username exists already
  let usernameUsed = await Users.exists({ username: generatedUsername })

  if (!usernameUsed) {
    return new Promise((resolve) => {
      resolve(generatedUsername)
    })
  } else {
    return generateUniqueId()
  }
}

module.exports = {
  addUser,
  getAllUsers,
  deleteUser,
  updateUser,
  loginUser,
}
