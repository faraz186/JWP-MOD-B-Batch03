const jwt_token = require("jsonwebtoken")
const { Users_Schema } = require("../models/Users_Model")
const bcrypt = require('bcryptjs')

const signup_controller = async (req, res) => {


    // const create_user = await Users_Schema.create({

    // })


    // const create_user = new Users_Schema({
    //     ...body

    // })
    // await create_user.save()

    try {

        const body = req.body


        const salt = bcrypt.genSaltSync(10)
        const hash_password = bcrypt.hashSync(body.password, salt)
        

        const create_user = await Users_Schema.create({
            ...body, password: hash_password
        })
        
        return res.json({data: { ...body, password: hash_password}, message:'User registered!'})
    } catch (error) {
        return res.status(500).json({message:'Something went wrong!', error:error.message})
    }




}


const login_controller = async (req, res) => {


    try {

        const body = req.body

        


        // find user with email
        const find_user = await Users_Schema.findOne({
            email: body.email
          })
        
        // check if user exist or not
        if(find_user === null){
            return res.status(402).json({success:false, message:'Invalid credentials!'})
        }
        // if(!null){

        // }

        // Compare user password id valid or not
        const compare_password = await bcrypt.compare(body.password,find_user.password )

        if(compare_password === false){
            return res.status(402).json({success:false, message:'Invalid credentials!'})
        }

        const token_payload = {
            user_id: find_user._id
        }


        const create_token = jwt_token.sign(token_payload, process.env.JWT_SCRET_KEY, {expiresIn:'1d'} )

        res.cookie('auth_token', create_token)
        

        const reponse_data = {
            ...find_user.toObject()
        }

        delete reponse_data.password

        return res.json({
            sucess:true, 
            data:reponse_data, 
            // auth_token:create_token
        })
    } catch (error) {
        return res.status(500).json({message:'Something went wrong!', error:error.message})
    }






}




const check_auth_controller = async (req, res) => {

    try{

        const req_cookie_token = req.cookies.auth_token

        if(!req_cookie_token){
            return res.status(402).json({success:false, message:'Login required!'})

        }
        
        const verify_token = jwt_token.verify(req_cookie_token, process.env.JWT_SCRET_KEY)


        if(!verify_token){
            return res.status(402).json({success:false, message:'Login required!'})

        }

        const user_id = verify_token. user_id


        const find_user = await Users_Schema.findById(user_id).select('-password')


        return res.json({
            sucess:true, 
            data:find_user
        })

    } catch (error) {
        return res.status(500).json({message:'Something went wrong!', error:error.message})
    }



}




module.exports = {signup_controller, login_controller, check_auth_controller}