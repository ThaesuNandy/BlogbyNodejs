
const multer  = require('multer');
const path = require('path');
const fs = require("fs");

exports.createPostPage = (req, res) => {
    res.render("createBlog");
};

const upload = multer({
    storage : multer.diskStorage({
        destination : (req, file, cb) => {
            cb(null, "uploads/")
        },
        filename : (req, file, cb) => {
            cb( null , file.originalname);
        },
    }),
    fileFilter : (req, file, cb) => {
        const validateFileTypes = ["jpg", "jpeg", "svg"];
        const incomingFileType = file.mimetype.split("/")[1]
        validateFileTypes.includes(incomingFileType) ?
         cb(null, true) :
         cb(new Error("Invalid file type"), false);
    }
}).single('image');

const blogPath = path.resolve(__dirname, "../model/blog.json");
const data = fs.readFileSync(blogPath, "utf-8");
const blogJson = JSON.parse(data);

exports.createPostController = (req, res) => {
    upload(req, res , (err)=>{
        if(err){
          return res.status(400).json({
            message : err.message,
          });
        }
        const { post_name, description } = req.body;
        blogJson.push({
            title : post_name,
            imgUrl : req.file.filename,
            description,
        });

        const blogJsonString = JSON.stringify(blogJson);
        fs.writeFileSync(blogPath,blogJsonString);
      
        res.redirect("/");
    });
   
};