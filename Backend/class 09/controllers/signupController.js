const bcrypt = require("bcryptjs");
const userModel = require("../model/userSchema");

const signupController = async (req,res)=>{
    try {
        const {first_name,last_name,email,password} = req.body;

        if(!first_name || !last_name || !email || !password){
            res.status(400).json({
                message:"required fields are missing..",
                status:false
            })
            return
        }

        let emailExist = await userModel.findOne({email});

        if(emailExist !== null){
            res.json({
                message:'email already exist..',
                data:null,
                status:false
            })
            return
        }
        else{
            const hashPassword = await bcrypt.hash(password,10);
            
            const obj = {
                first_name,last_name,email,password:hashPassword
            }
            
                const user = await userModel.create(obj);
            
                res.status(201).json({
                    message:'user created successfully..',
                    user,
                    status:true
                })
            }
    } catch (error) {
      res.status(500).json({
        message:"internal server error",
        status:false
      })  
    }
}

module.exports = signupController