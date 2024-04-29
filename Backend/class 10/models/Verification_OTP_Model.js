const { Schema, model } = require("mongoose");
// const Mongoose = require("mongoose");

const Verification_OTP = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'users'
    },
    otp_code: {
        type: String,
        required: true
    }
}, { timestamps: true })


const Verification_OTP_Schema = model('otp-code', Verification_OTP)

module.exports = { Verification_OTP_Schema}