const request = require('../api/request')

const {
  addUser,
  getAllUsers,
  deleteUser,
  updateUser,
  loginUser,
} = require('../controllers/userController')


const allRecordCount = 36
test(`The Users table has ${allRecordCount} records`, async () => {
  const userLists = await request('/api/users/get-all')

  expect(userLists.length).toEqual(allRecordCount)
})


describe('Tests for user registration and login', () => {
  const name = 'John Citizen'
  const lessName = 'de'
  const username = 'Disturbed-Mean-Chimpanzee'


  test(`The ${lessName} for name is less then 2`, async () => {
    const userInfo = await request({
      method: 'POST',
      url: '/api/users/add',
      data: {
        name: lessName,
      },
    })

    expect(userInfo.code).toBe(-1)
  })

  // 通过 给定的 username 可以查出对应的 name 信息
  test(`The ${username}'s name is ${name}`, async () => {
    const userInfo = await request({
      method: 'GET',
      url: '/api/users/login',
      params: { username },
    })

    expect(userInfo.name).toBe(name)
  })
})
