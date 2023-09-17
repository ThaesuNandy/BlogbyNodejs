const { save,find } = require('../util/post');
const { upload } = require('../util/upload');

exports.createPostPage = (req, res) => {
    res.render("createBlog", {route : "/create-post"});
};

exports.createPostController = (req, res) => {
    upload(req, res , (err)=>{
        if(err){
          return res.status(400).json({
            message : err.message,
          });
        }
        const { post_name, description } = req.body;
        const blogJson = find();
        blogJson.push({
            title : post_name,
            imgUrl : req.file.filename,
            description,
        });
        save(blogJson);
        res.redirect("/");
    });
   
};

exports.editPageController = (req, res) => {  
    const { postId } = req.params;
    const posts = find();
    const index = posts.findIndex( (post) => post._id === postId); 
    res.render("editPost", {route : "/edit-post", post: posts[index] });
};

exports.editController = (req, res) => {
    const {postId} = req.params;
    const { title, description } = req.body;
    const posts = find();
    const index = posts.findIndex( (post) => post._id === postId);
    posts[index].title = title;
    posts[index].description = description;
    save(posts);
    res.redirect("/"); 
};

exports.deletePostController = (req, res) => {
    const {postId} = req.params;
    const posts = find();
    const index = posts.findIndex( (post) => post._id === postId);
    posts.splice(index,1);
    save(posts);
    res.redirect("/");
}