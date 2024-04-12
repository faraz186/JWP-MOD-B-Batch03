const mongoose = require("mongoose");
       
const UserSchema = mongoose.Schema(
{ 
    NotesName: String,
    NumberOfNotes:Number,  
    createdAt:Date,
});

const userModel = mongoose.model("notes",UserSchema);

module.exports = userModel;
