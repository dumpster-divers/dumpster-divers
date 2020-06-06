# Dumpster Divers

## INFO30005 Web Information Technologies Project.

_Welcome to the dumpster divers repository!_

#### Developer? [Click here](./devREADME.md)

Heroku Site
https://dumpster-divers.herokuapp.com/

## Features + Example JSON requests

### Feature One: Users

This functionality deals with user management so that players can save their progress. It takes in a users’ name as the input, generates a unique username for the user, and then creates a user profile that will be stored on the database. To update a user, the user’s username and what needs to be updated is passed in as input, and the user profile will be updated on the database.

#### Front End Features

#### Sign Up

Access this using the link https://dumpster-divers.herokuapp.com/signup or click on the sign up link at the top right of the homepage. Enter any nickname that you would like to use and the system will give you an unique username that could be used to identify you when you log in. Please copy your given username to test the next functionality.

#### Sign In

Access this using the link https://dumpster-divers.herokuapp.com/signin or click on the sign in link at the top right of the homepage. Enter your given username to log in. If you logged in successfully you will be redirected back to the homepage. If the system couldn’t find the username that you entered on the database, it will return a modal that tells you to try again.

#### Update

Access this using the link https://dumpster-divers.herokuapp.com/userhomepage, this page would eventually be where users see their own stats under /api/stats so it’s not yet fully implemented nor connected to the main wireframe. The only functionality available on this page currently is to update your nickname. You must be logged in or it will redirect you back to the home page.

**_POST https://dumpster-divers.herokuapp.com/api/users/add_**:

Create a new persistent user account and generate a unique username.

Request Body

```json
{
  "name": "John Citizen",
  "processedTotal": 10
}
```

Response Body

```json
{
  "name": "John Citizen",
  "username": "Orange-Verdant-Hedgehog"
}
```

`Username` is a uniquely assigned string of words designed to be kept private. It is done this way to support the demographic of the program (kids) so they don't have to create accounts or remember passwords to use our software

**_DELETE https://dumpster-divers.herokuapp.com/api/users/delete Remove a user's information_**

Deletes a user based on their unique generated username

Request Body

```json
{
  "username": "Big-Fluffy-Elephant"
}
```

Response Body upon a Succesful Request

```json
{
  "message": "User successfully deleted",
  "username": "Big-Fluffy-Elephant"
}
```

**PUT https://dumpster-divers.herokuapp.com/api/users/update**

- Update a user's information.

Example Request Body

```json
{
  "username": "Big-Fluffy-Elephant",
  "processedRecord": 42
}
```

Can add any options from `[name, dateJoined, processedTotal, processedRecord]`

Response Body upon a Succesful Request (Returns document of updated User)

```json
{
  "_id": "5e9fe3f69e4c567c7ea840be",
  "name": "Steven",
  "dateJoined": "2020-05-03T03:34:43.650Z",
  "processedTotal": 420,
  "processedRecord": 42,
  "username": "Big-Fluffy-Elephant",
  "__v": 0
}
```

**GET https://dumpster-divers.herokuapp.com/api/users/get-all**

- Get information of every user.

Response Body:

```json
[
  {
    "_id": "5e9fe3f69e4c567c7ea840bd",
    "name": "John Citizen",
    "dateJoined": "2020-04-22T06:28:06.536Z",
    "processedTotal": 68,
    "processedRecord": 8,
    "username": "Beautiful-Luxuriant-Termite",
    "__v": 0
  },
  {
    "_id": "5e9fe3f89e4c567c7ea840bf",
    "name": "Ada Lovelace",
    "dateJoined": "2020-04-22T06:28:08.450Z",
    "processedTotal": 10,
    "processedRecord": 10,
    "username": "Boiling-Feeble-Fish",
    "__v": 0
  }
]
```

### Feature Two: User Statistics

We want users to know that they are part of a collective effort to reduce the global count of waste. This functionality handles user’s record scores, their position globally and the leaderboards that recognise the most dedicated players.

**_GET https://dumpster-divers.herokuapp.com/api/stats/user-highscore?username=""_**

- Find the user's position on the highscore leaderboard.
  Query: `https://dumpster-divers-test.herokuapp.com/api/stats/user-highscore?username=Uppity-Illegal-Elephant`

Example Response Body

```json
{
  "user": {
    "_id": "5eabf0595d2dec08f4faab51",
    "name": "Matt",
    "dateJoined": "2020-05-01T09:48:09.389Z",
    "processedTotal": 5,
    "processedRecord": 5,
    "username": "Uppity-Illegal-Elephant",
    "__v": 0
  },
  "userRank": 6
}
```

**GET https://dumpster-divers.herokuapp.com/api/stats/leaderboard**

- Get the top 10 users with the highest scores.

```json
[
  {
    "_id": "5eae3bd388097f0017b37561",
    "name": "Postman Collection!",
    "dateJoined": "2020-05-03T03:34:43.650Z",
    "processedTotal": 6969,
    "processedRecord": 42,
    "username": "Spectacular-Efficacious-Ostrich",
    "__v": 0
  },
  {
    "_id": "5ead8b995599d20017610975",
    "name": "Winnie2",
    "dateJoined": "2020-05-02T15:02:49.151Z",
    "processedTotal": 606,
    "processedRecord": 1,
    "username": "Male-Fixed-Bee",
    "__v": 0
  }
  ...
]
```

**GET https://dumpster-divers.herokuapp.com/api/stats/user-record?username=""**

- Get the all-time high score of a user
  Query: `https://dumpster-divers-test.herokuapp.com/api/stats/user-record?username=Uppity-Illegal-Elephant`

Example Response Body:

```json
{
  "record": 5
}
```

### Feature Three: Game

This functionality contains the core gameplay elements. It outputs random trash for the user to sort in a session, then processes a user’s score from the session, updating the global and user counts. The progress against the global count remaining trash can be seen by other users.

#### Front End

#### Game

Access this using the link https://dumpster-divers.herokuapp.com/game or click on the Dive In! button on the homepage. When you press Let’s Dive, the timer begins to count down and you’re given a random trash to sort. You may choose to put it into either of the bins. If you put it in the correct bin, your tally counter increments by one. If you put it into the wrong bin, you will be greeted with a modal that tells you where you went wrong and the game ends immediately. The game also ends when your timer runs out.

#### User Session

The amount of trash you recycled this session will be displayed on the post game screen on your diver certification card immediately after your round. This amount is both added to your records (if you’re logged in) and decremented from the global count. Players who are not signed in are prompted to do so in order to save their progress.

#### Global Count

The global count is a real time tally displayed on the homepage. After finishing a round your score is subtracted from the global count and you will be able to see the changes on the homepage.

**GET https://dumpster-divers.herokuapp.com/api/game/data?amount=2**

- Grab the requested amount of trash items to sort in a game round.
- Not specifying the amount returns all the trash data

Example Response Body:

```json
[
  {
    "id": 7,
    "name": "plastic straw"
  },
  {
    "id": 2,
    "name": "glass bottle"
  }
]
```

**_POST https://dumpster-divers.herokuapp.com/api/game/add-session-stats_**

- Notify server a user's score from a round, decrementing global count and storing in user info.
  Request Body Example:

```json
{
  "count": 10,
  "username": "Uppity-Illegal-Elephant"
}
```

Count: Number of trash recycled.
Username: The username of the user

**_GET https://dumpster-divers.herokuapp.com/api/game/global-count_**

- The amount of trash remaining globally.

Response Body Example:

```json
[
  {
    "_id": "5e9ef5bb1c9d440000f74095",
    "globalRemaining": 22
  }
]
```
