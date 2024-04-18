const { Users_Schema } = require("../models/Users_Model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Controller function for user signup
const signup_controller = async (req, res) => {
  try {
    const body = req.body;

    const salt = bcrypt.genSaltSync(10);
    const password_hash = bcrypt.hashSync(body.password, salt);

    const new_user = await Users_Schema.create({
      ...body,
      password: password_hash,
    });

    return res.json({ success: true, data: new_user });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error!" });
  }
};

// Controller function for user login
const login_controller = async (req, res) => {
  try {
    const body = req.body;
    const find_user = await Users_Schema.findOne({ email: body.email });

    if (find_user === null) {
      return res
        .status(402)
        .json({ success: false, message: "Invalid credentials!" });
    }

    const compare_password = bcrypt.compareSync(
      body.password,
      find_user.password
    );

    // if(!compare_password){
    if (compare_password === false) {
      return res
        .status(402)
        .json({ success: false, message: "Invalid credentials!" });
    }

    const payload = {
      user_id: find_user._id,
    };

    const jwt_token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });

    res.cookie("auth_token", jwt_token);

    return res.json({ success: true, message: "Loggedin Successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error!" });
  }
};

// Controller function for checking authentication status
const check_auth_controller = async (req, res) => {
  try {
    // --------- Previous code before middleware
    // const auth_token = req.cookies.auth_token;
    // const verify_token = jwt.verify(auth_token, process.env.JWT_SECRET_KEY);
    // if (!verify_token) {
    //   return res
    //     .status(402)
    //     .json({ success: false, message: "Unauthorized user" });
    // }
    // const user_id = verify_token.user_id;
    // const find_user = await Users_Schema.findById(user_id);

    // ------------ xxx ------------ xxx -----------

    // --------- New code after applying middleware
    // Retrieving user details from the req object, which is set by the middleware
    const user = req.user;

    // Returning the user details in the response
    return res.json({ success: true, data: user });
  } catch (error) {
    // Handling any errors that occur during the controller execution
    res.status(500).json({ success: false, message: "Internal server error!" });
  }
};


// Exporting controller functions
module.exports = {
  signup_controller,
  login_controller,
  check_auth_controller,
};
