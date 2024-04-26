const express = require('express');
const signupController = require('../controllers/signupController');
const loginController = require('../controllers/loginController');
const create_post_Controller = require('../controllers/create_post_Controller');
const auth_middleware = require('../middleware');
const router = express.Router();

router.post('/signup',signupController);
router.post('/login',auth_middleware,loginController);
router.post('/createpost',auth_middleware,create_post_Controller);


module.exports = router