
const commentmodel = require("../model/commentmodal");

let createComment = async function(req,res){
    try{
        let comment = await commentmodel.create(req.body);
        res.status(200).json(comment);
    }catch(err){
        res.status(500).json(err);
    }
}



let getcoment = async (req, res) => {
    try{
        let comments = await commentmodel.find();
       return  res.status(200).json(comments);
    }catch(err){
        res.status(500).json(err);
    }
}

let getcommentbyid = async (req, res) => {
    try{
        let comment = await commentmodel.findById(req.params.id);
      return  res.status(200).json(comment);
    }catch(err){
        res.status(500).json(err);
    }
}

module.exports = { createComment ,getcoment, getcommentbyid}