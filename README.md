# Dumpster Divers

## INFO30005 Web Information Technologies Project.

*Welcome to the dumpster divers repository!*

#### Developer? [Click here](./devREADME.md)

Heroku Site
https://dumpster-divers-test.herokuapp.com/

## Features + Example JSON requests

### Feature One: Users


***`POST /api/users/add`***:

Create a new persistent user account and generate a unique username.

Request Body
``` json
{
   "name":"John Citizen",
   "processedTotal": 10
}
```

Response Body 

``` json
{
   "name":"John Citizen",
   "username": "Orange-Verdant-Hedgehog"
}
```

 `Username` is a uniquely assigned string of words designed to be kept private. It is done this way to support the demographic of the program (kids) so they don't have to create accounts to use our software

***`DELETE /api/users/delete*: Remove a user's information`***

Deletes a user based on their unique generated username

Request Body
``` json
{
   "username":"Big-Fluffy-Elephant",
}
```

Response Body upon a Succesful Request
``` json
{
      "message": "User successfully deleted",
      "username": "Big-Fluffy-Elephant"
}
```

**PUT /api/users/update**

- Update a user's information.

Example Request Body
``` json
{
   "username":"Big-Fluffy-Elephant",
   "processedRecord": 42
}
```
Can add any options from `[name, dateJoined, processedTotal, processedRecord]`

Response Body upon a Succesful Request (Returns document of updated User)
``` json
{
    "name": "Steven",
    "dateJoined": "2020-05-03T03:34:43.650Z",
    "processedTotal": 420,
    "processedRecord": 42,
    "username": "Big-Fluffy-Elephant",
}
```

Extra values of response removed for verbosity

**GET /api/users/get-all**

- Get information of every user.

Response Body: 
``` json
[
  {
    "_id": "5e9fe3f69e4c567c7ea840bd",
    "name": "John Citizen",
    "dateJoined": "2020-04-22T06:28:06.536Z",
    "processedTotal": 68,
    "username": "Beautiful-Luxuriant-Termite",
    "__v": 0
  },
  {
    "_id": "5e9fe3f89e4c567c7ea840bf",
    "name": "Ada Lovelace",
    "dateJoined": "2020-04-22T06:28:08.450Z",
    "processedTotal": 10,
    "username": "Boiling-Feeble-Fish",
    "__v": 0
  }
]
```

### Feature Two: User Statistics

**GET /api/stats/user-highscore?username=""**
- Find the user's position on the highscore leaderboard.
Query: `https://dumpster-divers-test.herokuapp.com/api/stats/user-highscore?username=Uppity-Illegal-Elephant`

Example Response Body
``` json
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
**GET /api/stats/leaderboard**
- Get the top 10 users with the highest scores.
``` json
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


**GET /api/stats/user-record**
- Get the all-time high score of a user
Query: `https://dumpster-divers-test.herokuapp.com/api/stats/user-record?username=Uppity-Illegal-Elephant`

Example Response Body: 
``` json 
{
  "record": 5
}
```

### Feature Three: Game
**GET /api/game/data/:amount**
- Grab the requested amount of trash items to sort in a game round.
Example Response Body: 
``` json 
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

***POST /api/game/add-session-stats***
- Notify server a user's score from a round, decrementing global count and storing in user info.
Request Body Example:
``` json 
{
	“count”: 10,
	“username”: "username"
}
```
Count: Number of trash recycled.
Username: The username of the user


***GET /api/game/global-count***
- The amount of trash remaining globally.

Response Body Example:
``` json 
[
  {
    "_id": "5e9ef5bb1c9d440000f74095",
    "globalRemaining": 22
  }
]
``` 


