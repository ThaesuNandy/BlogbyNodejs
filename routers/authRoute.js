const express = require("express");
const route = express.Router();


route.get("/login", (req, res) => {
    // res.send('<Form action="/login" method="POST"><input name="username" type="text"></input><button type="submit">login</button></Form>');
    //res.sendFile('login.html', { root : "views" });
    res.render("login");
});

route.post("/login", (req, res) => {
   console.log(req.body);
//    return res.json({
//         username : "Dummy",
//         email : "dummy@gmail.com",
//    });
        return res.status(200).send("<h1>Login Post Route</h1>")
});

route.get("/register", (req, res) => {
    // res.send('<Form action="/register" method="POST"><input name="username" type="text"></input><button type="submit">register</button></Form>')
    //return  res.sendFile('register.html', { root : "views" });
    res.render("register");
});

route.post("/register", (req, res) => {
    // return res.sendStatus(201);
    // return res.status(201).json({
    //     username : "Dummy",
    //     email : "dummy@gmail.com",
    // });
    return res.redirect('/');  
   
 });

module.exports = route;