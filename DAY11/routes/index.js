var express = require('express');
var router = express.Router();
var registerInitialChecks = require("../middlewares/registerChecks");  //First middleware(Level 1 complete)
var register = require("../controller/register");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 * @requires {email,firstName,lastName , password , confirmPassword} - req.body
 * @description
 * Security, performance and edge cases -  IMPORTANT
 * LEVEL 1 (registerChecks.js)
 * Email validate - @ and . should be there
 * Password - Uppercase + lowercase + numeric character + special character
 * Password == Confirm Password
 * LEVEL 2
 * JS / SQL injection - Homework
 * LEVEL 3
 * check if email already exists
 * password hash - If database gets leak, password hide rhena chaiye
 * Email lowercase - So that we do not need to check if it is in upper case or lower case i.e adibhu025@gmail.com / Adibhu025@gmail.com(treated same)
 * save
 */

router.post("/register",registerInitialChecks, register )

module.exports = router;
