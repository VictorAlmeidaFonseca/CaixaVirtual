// Importing the mongoose
const mongoose = require("mongoose");

// Variable to store the MongoDB Atlas connection
const uri = "mongodb+srv://cash-register:cash-register@cash-register-rbyoe.mongodb.net/test?retryWrites=true&w=majority";


// Connect mongoose methods options. 
// API: https://mongoosejs.com/docs/connections.html#options
const options = {
  
  autoIndex: false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect

};


// To connect to MongoDB Atlas. 
// The connect() function also accepts a callback parameter and returns a promise.
// https://mongoosejs.com/docs/connections.html#callback

mongoose.connect(uri, options).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);


// Importing models
require("./movimentacao.model");