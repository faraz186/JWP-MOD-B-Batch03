const mongoose = require('mongoose')


const Profile = new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    },
    city:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }

})

const User_Profile_Schema =  mongoose.model('profile', Profile)

module.exports = { User_Profile_Schema}