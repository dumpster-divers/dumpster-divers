# Dumpster Divers

## INFO30005 Web Information Technologies Project.

*Welcome to the dumpster divers repository!*

#### Developer? [Click here](./devREADME.md)

Heroku Site
https://dumpster-divers-test.herokuapp.com/

## Features

### Feature One: Users


**`POST /users/add`**:

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

* `Username` is a uniquely assigned string of words designed to be kept private. It is done this way to support the demographic of the program (kids) so they don't have to create accounts to use our software*

**`DELETE /users/delete*: Remove a user's information`**

``` json

```

**PUT /users/update**
- Update a user's information.

**GET /users/get-all**

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

**GET stats/user-highscore/:username**


- Find the user's position on the highscore leaderboard.

**GET stats/leaderboard**


- Get the top 10 users with the highest scores.

**GET stats/user-record**
- Get the all-time high score of a user

### Feature Three: Game
#### GET game/data/:amount
- Grab the requested amount of trash items to sort in a game round.

# POST game/add-session-stats
- Notify server a user's score from a round, decrementing global count and storing in user info.

# GET game/global-count
- The amount of trash remaining globally.



