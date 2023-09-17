const path = require('path');
const fs = require("fs");

const blogPath = path.resolve(__dirname, "../model/blog.json");

exports.save = (data)=>{
    const dataString = JSON.stringify(data);
    fs.writeFileSync(blogPath, dataString);
};

exports.find = ()=>{
   return JSON.parse(fs.readFileSync(blogPath));
}