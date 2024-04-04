const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const userRoute = require("./userRoute")

mongoose.connect('mongodb+srv://MFaraz:faraz786@cluster0.9wqrylm.mongodb.net/?retryWrites=true&w=majority',
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Mongo DB Connect Successfully");
    }
  }
);

app.use(express.json());

app.use(cors());

app.use("/event",userRoute);

app.listen(7000)

