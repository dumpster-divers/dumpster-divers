# dumpster-divers

INFO30005 Web Information Technologies Project.

# Required Programs
- Node
- MongoDB

# Installation Instructions
1. Ensure MongoDB is running (download, then navigate to the bin folder and run `mongod`)
2. Navigate to the source folder and run `npm install`
3. Create a .env file containing the password to the database (see pinned post in #resources)
`MONGO_PASSWORD=<PASSWORD_TO_MONGODB_DATABASE>`

# Running Instructions
1. Run `npm start`. For live updates, run `nodemon`


# Testing Instructions
- localhost:3000/ should display the site
- localhost:3000/api/trash/global-count should give a response


# GET api/trash/global-count
- Returns global count of trash process RESPONSE BODY
    {
      globalProcessed: integer,
    }

# POST api/trash/increment-user-count
    Increments user count
      {   
        userId: integer,
        processedCount: integer
      }

# get api/highscores/top-users
  example: site.com/api/highscores?head=10 Capped at 100
  Query Params:
  head: integer (top n highscores) (default 100)
  RESPONSE BODY
    [
      {
        userId:integer,
        processedTotal: integer,
      }
    ...
    ]


# GET api/highscores/user
-Query Params:
  userId: integer (fetch users place in high scores)
  RESPONSE BODY
{
    userId:integer,
    rank: integer,
    processedTotal: integer,
}
5 POST api/users/add
Request Body 
{
    name:string,
}
Response Body
{
    id: integer,
}
6 Database

6.1 User object
{
    id: Number,
    name: String,
    dateJoined: dateTime,
    processedTotal: integer,
}

6.2 Tally object
{
    globalProcessed: number
}

6.3 Highscores
[
    {
        id: Number,
    }
]

6.4 Trash
{
    id: integer,
    imageUrl: string,
    description: string,
    category: enum? string? (recyclable, compost, general)
}
