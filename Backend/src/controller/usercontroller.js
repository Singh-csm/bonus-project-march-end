const usermodel = require("../model/usermodel")
const jwt = require("jsonwebtoken")

const createuser = async (req, res) =>{
    try {
        let data = req.body;
        let {name, email, password} = data;
        let user = await usermodel.create(data);
        res.send({status:true, data: user});
    } catch (error) {
        res.send(error);
    }
}



const loginuser = async function  (req, res) {
    try {
        let data = req.body;
        let {email, password} = data;
        let findCredentials = await usermodel.findOne({email:email, password:password})
        if(!findCredentials) return res.status(400).send({status:false, message:"email or password not found"})
        
        let createToken = jwt.sign({userId:findCredentials._id.toString()}, "functionup-key")
        res.send({status:true, token:createToken})
        
    } catch (error) {
        res.send(error);
    }
}



module.exports = {createuser,loginuser }

 