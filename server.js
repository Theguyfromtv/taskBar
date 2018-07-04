//requiring everything we need
const express = require("express");
const path = require("path");
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const session = require('cookie-session')
require('dotenv').config()

//setting up the port for deployment and local
const PORT = process.env.PORT || 3001;
const app = express();

//setting up body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//make the server serve up react's index file and use react router
app.get('*', function (req, res){
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
})

//connect to the db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/users");

//use sessions for tracking logins
app.use(session({
  name: 'session',
  keys: [process.env.SECRET],
  //  Options
  maxAge: 7 * 24 * 60 * 60 * 1000 // 1 week
}));


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/users");


app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
