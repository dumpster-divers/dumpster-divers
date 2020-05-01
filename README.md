# dumpster-divers

INFO30005 Web Information Technologies Project.

# Required Programs
- Node
- MongoDB

# Installation Instructions
1. Ensure MongoDB is running (download, then navigate to the bin folder and run `mongod`)
2. Navigate to the source folder and run `npm install`
3. Create a .env file containing the password to the database (see pinned post
   in #resources) and db location (either production or local db)
`MONGO_PASSWORD=<PASSWORD_TO_MONGODB_DATABASE>`
`DB_LOCATION=[prod/local]`

# Running Instructions
1. (If using local db) Ensure MongoDB is running.
2. Run `npm start`
3. View Frontend changes at http://localhost:3000. View backend changes at http://localhost:5000

/Note: quick reload is enabled so there is no need to restart server unless you
are change node dependencies/


# Testing Instructions
- localhost:3000/ should display the site
- localhost:3000/api/trash/global-count should give a response

# User route
# POST /users/add
- Create a new persistent user account and generate a unique username.

# DELETE /users/delete
- Remove a user's information.

# PUT /users/update
- Update a user's information.

# GET /users/getAll
- Get information of every user.

# Highscore route
# GET stats/user-position
- Find the user's position on the highscore leaderboard.

# GET stats/highscores
- ?head?postcode
- Get the highscores of the top (head) users in (postcode region).

# GET stats/user-record
- Get the all-time high score of a user

# Game route
# GET game/data
- Grab the next trash items to sort in a game round.

# POST game/add-session-stats
- Notify server a user's score from a round, decrementing global count and storing in user info.

# GET game/global-count
- The amount of trash remaining globally.