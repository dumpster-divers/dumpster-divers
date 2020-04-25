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
1. Run `npm start`
2. View Frontend changes at http://localhost:3000. View backend changes at http://localhost:5000

/Note: quick reload is enabled so there is no need to restart server unless you
are change node dependencies/


# Testing Instructions
- localhost:3000/ should display the site
- localhost:3000/api/trash/global-count should give a response
