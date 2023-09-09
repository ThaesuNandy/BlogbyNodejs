const route = require('express').Router();
const multer  = require('multer');
const upload = multer({ dest : './public/image'})
const path = require('path');

let blogs;

route.get("/", (req, res) => {
//    res.sendFile('home.html', {root : "views"});
    //   res.render("home", {blogs : blogs});
    res.render("home" , {blogs :blogs});
   
});

route.get("/download", (req, res) => {
    const filePath = path.resolve(__dirname, "../public/image/flower.jpg");
    res.download( filePath , "flower_img.jpg", (err) => {
        if(err){
            console.log(err);
            return;
        }
    });
});

route.get("/blogs/:blogId", (req, res) => {
    const blogId = req.params.blogId;
    const lang = req.query.lang;
    res.send(
        `<h1>${blogId} with ${lang} </h1></br><p>There is a little girl who does not want to live alone.</p>`
    );
});

//create-post route
route.get("/create-post", (req, res) => {
   // res.sendFile('post.html', { root : "views" });
   res.render("createBlog");
});

route.post("/post", (req, res) => {
    const { post_name, description } = req.body;
    blogs = {
        title : post_name,
        description,
    };
    res.redirect("/");
})

// route.post("/post", upload.single('image'), (req, res) => {
//     return res.status(201).json({
//         post_name : req.body.post_name,
//         image : req.file.filename,
//         description : req.body.description,
//     })
// })

module.exports = route;