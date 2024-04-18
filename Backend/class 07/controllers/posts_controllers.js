const Post_Schema = require("../models/Post_Model");

const create_post_controller = async (req, res, next) => {
  try {
    // Retrieving the authenticated user from the req object, set by the middleware
    const user = req.user;

    // Extracting the post data from the request body
    const body = req.body;

    // Creating a new post with the user's ID attached
    const create_post = await Post_Schema.create({
      ...body,
      user_id: user._id,
    });

    // Returning success response with the newly created post data
    return res.json({ success: true, data: create_post });
  } catch (error) {
    // Handling any errors that occur during the controller execution
    return res.status(500).json({ success: false, message: "Internal server error!" });
  }
};


module.exports = { create_post_controller };
