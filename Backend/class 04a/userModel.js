const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
{
    EventName: String,
    EventType:String,
    EventStatus:String,
    createdAt:Date,
});

const userModel = mongoose.model("event",UserSchema);

module.exports = userModel;