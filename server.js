//requiring everything we need
const express = require("express");
const path = require("path");
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const routes = require("./routes/api/");
const session = require('express-session')
var MemoryStore = require('memorystore')(session)
require('dotenv').config()

//setting up the port for deployment and local
const PORT = process.env.PORT || 3001;
const app = express();

//setting up body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//use sessions for tracking logins
app.use(session({
  store: new MemoryStore({
    checkPeriod: 7*24*60*60*1000 // prune expired entries every 24h
  }),
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { 
    httpOnly: false,
    secure: false, 
    maxAge: 7*24*60*60*1000 //one week
  }
}))

//setting up API routes
app.use(routes);


//make the server serve up react's index file and use react router
app.get('*', function (req, res){
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
})

//connect to the db
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1/taskBar");




// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}



app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
