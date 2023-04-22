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

module.exports = router;
