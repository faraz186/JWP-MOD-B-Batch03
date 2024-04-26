const jwt = require("jsonwebtoken");

const auth_middleware = async(req,res,next)=>{
    if(req.headers?.authorization){

        const token = req.headers.authorization.split(" ")[1];
        console.log("token",token);
        
        const verify_token = jwt.verify(token,process.env.JWT_SECRET_KEY);
        
        if(verify_token){
            next()
        }
    }
    else{
        res.status(403).json({
            message:"token unauthorized..",
            status:false
        })
    }
}

module.exports = auth_middleware