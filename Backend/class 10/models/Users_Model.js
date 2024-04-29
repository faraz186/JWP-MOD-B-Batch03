const mongoose = require("mongoose");

// Defining the schema for the Users model
const Users = new mongoose.Schema({
  // // Username field with constraints
  // user_name:{
  //   type:String,
  //   unique:true, // Username must be unique
  //   required:[true, 'username is required!'], // Username is required
  //   lowercase:true // Convert username to lowercase
  // },
  // // First name field
  // first_name:{
  //   type:String,
  //   required:true // First name is required
  // },
  // // Last name field
  // last_name:{
  //   type:String,
  //   required:true // Last name is required
  // },
  // // Phone number field with constraints
  // phone_number:{
  //   type:String,
  //   required:true, // Phone number is required
  //   minLength:11 // Minimum length of phone number
  // },
  // // Age field with constraints
  // age:{
  //   type:Number,
  //   required:true, // Age is required
  //   min:1, // Minimum age allowed
  //   max:[100, 'Age should not be greater than 100'] // Maximum age allowed
  // },
  // // Email field with constraints
  // email:{
  //   type:String,
  //   unique:true, // Email must be unique
  //   required:true, // Email is required
  //   lowercase:true // Convert email to lowercase
  // },
  // // Password field
  // password:{
  //   type:String,
  //   required:true // Password is required
  // }

  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  is_verified:{
    type:Boolean,
    required:true,
    default:false
  },
  login_count: {
    type: Number,
    required: true,
    default: 0,
  },
});

// Creating the Users model from the schema
const Users_Schema = mongoose.model("users", Users);

// Exporting the Users model
module.exports = { Users_Schema };
