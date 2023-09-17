const express = require("express");
const route = express.Router();
const authController = require('../controllers/authController');


//Login Route
route.get("/login",authController.SigninPageController);

route.post("/login", authController.signinController);

//Register route
route.get("/signup",authController.SignupPageController);

route.post("/signup",authController.signupController );

module.exports = route;