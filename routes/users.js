/*const { string, number } = require("prop-types");

var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){22
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
var uemail = document.getElementById("email").value;
var contact_no = document.getElementById("number").value;

if ( username == "Soniya" && password == "soniya@123"){
alert ("Login successfully");
window.location = "success.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}*/

const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const Users = require("../models/Users.js");
router.get("/", async (req, res) => {
    try {
      const users = await Users.find({}).sort({
        date: -1, //sorting starting from the recent date
      });
      res.json(users);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  });

  router.post("/", async (req, res) => {
    //   const errors = validationResult(req);
    //   if (!errors.isEmpty()) {
    //     return res.status(400).json({ errors: errors.array() });
    //   }
  
    const { name, uid, uemail, ucontactNo, uAddress } = req.body;
  
    console.log("inside routes:", req.body);
    try {
      const newusers = new Users({
        name,
        uid,
        uemail,
        ucontactNo,
        uAddress
      });
  
      const users = await newusers.save();
  
      res.json(users);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  });
/*router.post("/", async (req, res) => {
    const { name } = req.body;

    console.log("inside routes:", req.body);
    try {
      const newusers = new Users({
        name
      });
  
      const users = await newusers.save();
  
      res.json(users);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  });*/

  module.exports = router;
