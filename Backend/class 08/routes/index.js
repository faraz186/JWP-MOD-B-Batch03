const express = require("express");
const { signup_controller, login_controller, check_auth_controller } = require("../controllers/auth_controllers");
const router = express.Router();

router.post('/signup', signup_controller);
router.post('/login', login_controller);
router.get('/check-auth', check_auth_controller);

module.exports = router;
