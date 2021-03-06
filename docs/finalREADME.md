# Final Assessment Readme

## This was the readme for the final deliverable. If you're not an assessor you probably don't need to be looking at this

#### Relevant URLs!

Check it out:
https://dumpster-divers.herokuapp.com/

Sample Login Username: `Holistic-Astonishing-Swallow`

#### Running Instructions (Local DB)

1. `git clone https://github.com/dumpster-divers/dumpster-divers.git`
2. `cd dumpster-divers`
3. `unzip sample-database.zip`
4. `mongorestore -h localhost:27017` (This loads our db to your local mongo instance)
   _Ensure you are in the same directory as `dump`_

5. Set `DB_LOCATION=local` in .env file (not provided in this repo)
6. `npm install`
7. `npm start`

#### Running Instructions (Atlas DB)

1. `git clone https://github.com/dumpster-divers/dumpster-divers.git`
2. Set `DB_LOCATION=prod` in .env file (not provided in this repo)
3. `npm install`
4. `npm start`

#### Unit Testing instructions

Ensure that the previous instructions were run and run the following from the `dumpster-divers/` folder

1. `npm run jest`

### Feature Overview

#### Feature One: Users

This functionality deals with user management so that players can save their progress. It takes in a users’ name as the input, generates a unique username for the user, and then creates a user profile that will be stored on the database. To update a user, the user’s username and what needs to be updated is passed in as input, and the user profile will be updated on the database.

_Associated Files_

- `dumpster-divers/frontend/src/signin/*`
- `dumpster-divers/frontend/src/signup/*`
- `dumpster-divers/frontend/src/user/*`
- `dumpster-divers/frontend/src/frontpage/LoginModule.css`
- `dumpster-divers/frontend/src/frontpage/UserButton.css`
- `dumpster-divers/frontend/src/utilities/userManager.js`
- `dumpster-divers/models/Users.js`
- `dumpster-divers/controllers/userController.js`
- `dumpster-divers/routes/userRouter.js`

#### Feature Two: User Statistics

We want users to know that they are part of a collective effort to reduce the global count of waste. This functionality handles user’s record scores, their position globally and the leaderboards that recognise the most dedicated players.

_Associated Files_

- `dumpster-divers/frontend/src/`
- `dumpster-divers/frontend/src/signup/*`
- `dumpster-divers/frontend/src/user/*`
- `dumpster-divers/models/Stats.js`
- `dumpster-divers/controllers/statsController.js`
- `dumpster-divers/routes/statsRouter.js`

#### Feature Three: Game

This functionality contains the core gameplay elements. It outputs random trash for the user to sort in a session, then processes a user’s score from the session, updating the global and user counts. The progress against the global count remaining trash can be seen by other users.

_Associated Files_

- `dumpster-divers/frontend/src/game/*`
- `dumpster-divers/models/Trash.js`
- `dumpster-divers/controllers/gameController.js`
- `dumpster-divers/routes/gameRouter.js`
