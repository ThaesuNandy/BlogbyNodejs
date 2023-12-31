const route = require('express').Router();
const homeController = require("../controllers/homeController");
const postController = require("../controllers/postController");


route.get("/", homeController.homePage );

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
route.get("/create-post", postController.createPostPage);

route.post("/post",postController.createPostController);
route.get("/posts/:postId/edit", postController.editPageController);
route.post("/posts/:postId", postController.editController);
route.get("/posts/:postId/delete", postController.deletePostController);


module.exports = route;