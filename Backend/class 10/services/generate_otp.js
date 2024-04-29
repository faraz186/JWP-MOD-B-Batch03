const generate_otp = () => {
    const otp_code = Math.round(1000 +  Math.random() * 9000)

    return otp_code
}


module.exports = {generate_otp}