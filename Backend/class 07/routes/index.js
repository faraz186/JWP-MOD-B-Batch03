const express = require("express");
const {
  login_controller,
  signup_controller,
  check_auth_controller,
} = require("../controllers/auth_controllers");
const {
  check_auth_middleware,
} = require("../middleware/check_auth_middleware");
const { create_post_controller } = require("../controllers/posts_controllers");

const router = express.Router();

// router.get("/check-route", (req, res) => {
//   res.send("<h1>Route is working...!</h1>");
// });

router.post("/signup", signup_controller);
router.post("/login", login_controller);


// Route to check authentication status
router.get("/check-auth", check_auth_middleware, check_auth_controller);
// In this route, the check_auth_middleware is passed before invoking the check_auth_controller.
// This middleware ensures that the user is authenticated before accessing the route.

// Route to create a new post, requires authentication
router.post("/create-post", check_auth_middleware, create_post_controller);
// In this route, check_auth_middleware is passed before invoking create_post_controller.
// This ensures that the user is authenticated and any necessary validations for creating a post are performed before accessing the route.


module.exports = router;
