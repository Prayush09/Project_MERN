const express = require("express");
const Route = express.Router();
const {Project:Project_Schema} = require("../Schema/User");

Route.post("/create/:email", (req, res) => {
  // This is used to create a new user
  Project_Schema.find({ email: req.params.email }, (err, data) => {
    if (err) {
      console.log("Error in getting Data");
      return err;
    } else {
      if (data.length !== 0) {
        // This is used to check if the email is already registered
        res.status(244).json({ message: "Email is already registered" });
      } else {
        Project_Schema.create(req.body, (err, data) => {
          // This is used to create a new user
          if (err) {
            console.log("Error in getting Data");
            return err;
          } else {
            res.status(200).json(data);
          }
        });
      }
    }
  });
});
Route.get("/get", (req, res) => {
  // This is used to get all the users
  Project_Schema.find((err, data) => {
    if (err) {
      console.log("Error in getting Data");
      return err;
    } else {
      res.json(data);
    }
  });
});
Route.get("/isValidate/:email", (req, res) => {
  // This is used to check if the email is already registered
  // If the user tries to register with an email that is already registered, then the user will be notified
  Project_Schema.find({ email: req.params.email }, (err, data) => {
    if (err) {
      console.log("Error in getting Data");
      return err;
    } else {
      res.json(data);
    }
  });
});

module.exports = Route;
