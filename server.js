//requiring everything we need
const express = require("express");
const path = require("path");
const bodyParser = require('body-parser')
const cookieParser= require('cookie-parser')
require('dotenv').config()

//setting up the port for deployment and local
const PORT = process.env.PORT || 3001;
const app = express();

//use sessions for tracking logins
app.use(session({
  secret: SECRET,
  resave: true,
  saveUninitialized: false
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

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
