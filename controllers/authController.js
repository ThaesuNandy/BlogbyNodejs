const path = require('path');
const fs = require("fs");


const userPath = path.resolve(__dirname, "../model/user.json");
const data = fs.readFileSync(userPath, "utf-8");
const userJson = JSON.parse(data);


exports.SignupPageController =  (req, res) => {
    res.render("register", { route : "/signup"});
}
exports.signupController =  (req, res) => {
    const { username, email, password } = req.body;
    userJson.push ({
        name : username,
        email,
        password,
    });

    const UserJsonString = JSON.stringify(userJson);
    fs.writeFileSync(userPath, UserJsonString);
    return res.redirect('/');  
 };
 
 exports.SigninPageController =  (req, res) => {
    res.render("login", { route : "/login"});
}
 exports.signinController =  (req, res) => {
    const { email, password } = req.body;
    const matchingUser = userJson.find(user => user.email === email && user.password === password);
    if(matchingUser) {
         return res.redirect('/');  
    }else {
         res.status(400).json({
             message: "Login Failed!"
         });
    }    
 };