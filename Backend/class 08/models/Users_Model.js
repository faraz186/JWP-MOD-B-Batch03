const mongoose = require("mongoose")


const Users = new mongoose.Schema({
  user_name:{
    type:String,
    unique:true,
    required:[true, 'username is required!'],
    lowercase:true
  },
  fist_name:{
    type:String,
    required:true
  },
  last_name:{
    type:String,
    required:true
  },
  phone_number:{
    type:String,
    required:true,
    minLength:11
  },
  age:{
    type:Number,
    required:true,
    min:1,
    max:[100, 'Age should not be greater than 100']
  },
  email:{
    type:String,
    unique:true,
    required:true,
    lowercase:true
  },
  password:{
    type:String,
    required:true
  }
  
});

const Users_Schema = mongoose.model("users", Users);

module.exports = { Users_Schema };
