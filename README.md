# Dumpster Divers

## INFO30005 Web Information Technologies Project.

_Welcome to the dumpster divers repository!_

This was our semester long project for 2020 Semester 1!

#### Developer? [Click here](./devREADME.md)

#### API Docs? [Click here](./apiREADME.md)

Check it out:
https://dumpster-divers.herokuapp.com/

#### Running Instructions
1. `git clone https://github.com/dumpster-divers/dumpster-divers.git`
2. `cd dumpster-divers`
3. `npm install`
4. `npm start`

#### Unit Testing instructions

Ensure that the previous instructions were run and run the following from the `dumpster-divers/` folder
1. `npm run jest`


### Feature Overview
#### Feature One: Users

This functionality deals with user management so that players can save their progress. It takes in a users’ name as the input, generates a unique username for the user, and then creates a user profile that will be stored on the database. To update a user, the user’s username and what needs to be updated is passed in as input, and the user profile will be updated on the database.

#### Feature Two: User Statistics

We want users to know that they are part of a collective effort to reduce the global count of waste. This functionality handles user’s record scores, their position globally and the leaderboards that recognise the most dedicated players.

#### Feature Three: Game

This functionality contains the core gameplay elements. It outputs random trash for the user to sort in a session, then processes a user’s score from the session, updating the global and user counts. The progress against the global count remaining trash can be seen by other users.
