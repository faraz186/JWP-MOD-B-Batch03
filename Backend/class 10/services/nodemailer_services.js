const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "eitm.gmail.com",
    port: 465,
    service:"gmail",
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "jpwork011@gmail.com",
      pass: "bkoy xbby tmsz iefr",
    },
  });


//   https://www.website.com/verification?token=dfsfsdfsdfsd
// async..await is not allowed in global scope, must use a wrapper
async function send_verification_email(email, otp_code) {
    // send mail with defined transport object  
    const info = await transporter.sendMail({
      from: 'jpwork011@gmail.com | Jawan Tech', // sender address
      to: email, // list of receivers
      subject: "OTP Verification", // Subject line
    //   text: "Hello world?", // plain text body
      html: `<!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>OTP Confirmation</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
          }
          .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
          }
          .header {
              background-color: #f4f4f4;
              padding: 10px;
              text-align: center;
          }
          .header h1 {
              color: #333;
              margin: 0;
          }
          .content {
              padding: 20px;
              background-color: #fff;
              border: 1px solid #ddd;
              border-radius: 5px;
          }
          .footer {
              padding: 10px;
              text-align: center;
              color: #666;
              font-size: 0.8em;
          }
      </style>
      </head>
      <body>
          <div class="container">
              <div class="header">
                  <h1>Your One-Time Password (OTP) Confirmation</h1>
              </div>
              <div class="content">
                  <p>Dear [Recipient's Name],</p>
                  <p>Thank you for choosing [Your Company Name]!</p>
                  <p>To ensure the security of your account, please confirm your identity by entering the One-Time Password (OTP) provided below:</p>
                  <p><strong>OTP Code:</strong> ${otp_code}</p>
                  <p>Please enter this OTP on the verification page to complete the process.</p>
                  <p>If you did not request this OTP, please contact our support team immediately at <a href="mailto:support@example.com">support@example.com</a> or call us at <a href="tel:+1234567890">+1 (234) 567-890</a>.</p>
                  <p>Thank you for your cooperation.</p>
                  <p>Best regards,</p>
                  <p>[Your Name]<br>
                  [Your Position]<br>
                  [Your Company Name]</p>
              </div>
              <div class="footer">
                  <p>&copy; 2024 [Your Company Name]. All rights reserved.</p>
              </div>
          </div>
      </body>
      </html>
      `, // html body
    });
  
  }



module.exports = {send_verification_email}
