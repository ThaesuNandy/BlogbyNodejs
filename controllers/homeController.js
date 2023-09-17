const post = require("../util/post");

exports.homePage = (req, res) => {
    const posts = post.find();
    res.render("home" , {blogs : posts , route : "/" });
};