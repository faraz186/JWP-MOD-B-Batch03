import express from "express";
import { PostModel } from "../models/PostSchema.js";
import {
  createPost,
  deletePost,
  getPost,
  updatePost,
} from "../controllers/postController.js";
import {
  LoginController,
  OTPVerification,
  signupController,
} from "../controllers/authController.js";
const route = express.Router();

// AUTH API
route.post("/api/signup", signupController);
route.post("/api/login", LoginController);
route.post("/api/otpverification", OTPVerification);

// POST API
route.post("/createpost", createPost);
route.get("/getpost", getPost);
route.put("/updatepost/:id", updatePost);
route.delete("/deletepost/:id", deletePost);

route.get("/", (request, response) => {
  response.send("HELLO SERVER MVC");
});

export default route;
