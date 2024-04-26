const bcrypt = require("bcryptjs");
const userModel = require("../model/userSchema");
const jwt = require('jsonwebtoken');


const loginController = async (req,res)=>{
    try {
        const {email,password} = req.body;

        if(!email || !password){
            res.status(404).json({
                message: "fields still missing..",
              });
              return;
        }

        const emailExist = await userModel.findOne({email});

        if(emailExist === null){
            res.status(404).json({
                message: "Invalid credentials..",
                data: null,
                status: false,
              });
              return;
        }

        const comparePassword = bcrypt.compare(password,emailExist.password);

        if (!comparePassword) {
            res.status(404).json({
              message: "Invalid credentials..",
              data: null,
              status: false,
            });
            return;
          }

          const obj = {
            _id:emailExist._id,
            email: emailExist.email,
            first_name: emailExist.first_name,
            last_name: emailExist.last_name,
          }

          const token = jwt.sign(obj,process.env.JWT_SECRET_KEY);

          res.status(200).json({
            message: "login successfully..",
            data: emailExist,
            status: true,
            token,
          });
          
    } catch (error) {
        res.status(500).json({
            message:"internal server error",
            status:false
          }) 
    }

       
}

module.exports = loginController
