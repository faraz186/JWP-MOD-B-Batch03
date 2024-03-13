const mongoose = require("mongoose");
const express = require("express");
const userModel = require("./model/schema.js");
const bcrypt = require("bcryptjs");
const cors = require("cors");
   
const uri = "mongodb+srv://faraz:faraz@cluster0.z9fsdmf.mongodb.net/";
const app = express();
const PORT = 5000 || process.env.port;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect(uri);
mongoose.connection.on("connected", () => console.log("database connected..."));
mongoose.connection.on("error", (err) => console.log(err));

app.get("/", (req, res) => {
  res.json({
    message: "SERVER RUNNING...",
  });
});

app.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
      res.json({
        message: "Required fields are missing...",
      });
      return;
    }

    const emailExist = await userModel.findOne({ email });
    if (emailExist !== null) {
      res.json({
        message: "Email already exists..",
      });
      return;
    }
    var hash = bcrypt.hashSync(password, 12);

    const obj = {
      ...req.body,
      password: hash,
    };

    const response = await userModel.create(obj);
    res.json({
      message: "user signup successfully..",
      data: response,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.json({
        message: "Required fields are missing...",
      });
      return;
    }

    const emailExist = await userModel.findOne({ email });

    if (!emailExist) {
      res.json({
        message: "invalid email & password...",
      });

      return;
    }

    const comparePass = await bcrypt.compare(password, emailExist.password);
    if (!comparePass) {
      res.json({
        message: "invalid email & password...",
      });
      return;
    }

    res.json({
      message: "user login successfully...",
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
