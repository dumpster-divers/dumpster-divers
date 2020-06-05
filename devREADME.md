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
- localhost:5000/api/trash/global-count should give a response

adsasdf
