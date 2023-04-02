const express = require('express');
const usercontroller =require('../controller/usercontroller')
const commentcontroller = require("../controller/commentcontroller")
const postcontroller = require("../controller/postcontroller");
const route = express.Router()

route.get('/test', (req, res) => {
    res.send('Hello World!');
});

route.post("/register", usercontroller.createuser );
route.post("/login", usercontroller.loginuser);

//comment
route.post("/comment", commentcontroller.createComment );
route.get("/getcomment", commentcontroller.getcoment);
route.get("/getcomment/:id", commentcontroller.getcommentbyid);


//post
route.post("/post", postcontroller.createpost);
route.get("/post/:id", postcontroller.getpost);
route.post("/post/:id", postcontroller.updatepost);
route.post("/delete", postcontroller.deletepost);



module.exports = route;