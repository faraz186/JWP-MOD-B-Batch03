// Importing necessary packages and modules
const jwt = require("jsonwebtoken"); // JSON Web Token package for handling authentication tokens
const { Users_Schema } = require("../models/Users_Model"); // Importing the User Schema model
  
// Middleware function to check authentication
const check_auth_middleware = async (req, res, next) => {
  try {
    // Extracting the authentication token from cookies sent with the request
    const auth_token = req.cookies.auth_token;
  
    // Verifying the authenticity of the token using the JWT_SECRET_KEY stored in environment variables
    const verify_token = jwt.verify(auth_token, process.env.JWT_SECRET_KEY);

    // Checking if the token verification failed
    if (!verify_token) {
      // If verification fails, sending an unauthorized status code and message
      return res
        .status(402)
        .json({ success: false, message: "Unauthorized user" });
    }

    // Extracting the user ID from the verified token payload
    const user_id = verify_token.user_id;

    // Retrieving the user details from the database based on the user ID
    const find_user = await Users_Schema.findById(user_id);

    // Storing the user details in the request object for further use in the route handlers
    req.user = find_user;

    // Calling the next middleware or route handler in the chain
    return next();

    // Uncomment the line below if you want to return the user details in the response
    // return res.json({ success: true, data: find_user });
  } catch (error) {
    // Handling any errors that occur during the authentication process
   return res.status(500).json({ success: false, message: "Internal server error!" });
  }
};

// Exporting the middleware function to be used in other parts of the application
module.exports = { check_auth_middleware };
