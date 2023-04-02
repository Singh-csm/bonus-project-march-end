const postmodel = require("../model/postmodel");

const createpost = async (req,res) => {
    try {
        let data = req.body;
        let {title,content}= data;
        let postcreate = await postmodel.create(data)
       return res.status(200).send({status:true, data:postcreate});
    } catch (error) {   
        res.status(500).json({message: error.message});
    }
}

const getpost = async (req,res) => {
    try {
        let data = req.body;
        let post = postmodel.get(data);
        res.status(200).send({status:true, data:post});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const updatepost = async (req,res) => {
    try {
        let data = req.body;
        let {title,content}= data;
        let post = postmodel.update(data);
        res.status(200).send({status:true, data:post});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const deletepost = async (req,res) => { 
    
    try {
        let data = req.body;
        let post = postmodel.delete(data);
        res.status(200).send({status:true, data:post});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    createpost,
    getpost,
    updatepost,
    deletepost
}