// const http = require ("http");

// const server = http.createServer((req, res) => {
//     res.write("hello c");
//     res.end();
// });

// server.listen(8000, "127.0.0.1" , () => console.log("Server is running"));

const express = require ("express");
const path = require("path");
const app = express();
const authRoute = require('./routers/authRoute');
const rootRoute = require('./routers');


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended : true }));
app.use(express.static("public"));
app.use(express.static("uploads"));

app.use((req, res, next) => {
    console.log("Im middleware");
    next();
})

app.use(authRoute);
app.use(rootRoute);

// app.get("*", (req, res) => {
//    return res.status(404).send('<h1>Page not Found</h1>')
// });

app.use( (req, res) =>{
    return res.status(404).send('<h1>Page not Found</h1>');
});


 

app.listen(8000, () => console.log("Server is running"));