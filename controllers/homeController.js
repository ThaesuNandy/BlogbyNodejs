const path = require('path');
const fs = require("fs");

const blogPath = path.resolve(__dirname, "../model/blog.json");
const data = fs.readFileSync(blogPath, "utf-8");
const blogJson = JSON.parse(data);

exports.homePage = (req, res) => {
    res.render("home" , {blogs : blogJson });
};