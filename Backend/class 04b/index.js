const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const userRoute = require("./userRoute")

mongoose.connect('mongodb+srv://MuhammadFaraz:faraz5678@cluster0.q9t0fkw.mongodb.net/?retryWrites=true&w=majority',
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

app.use("/notes",userRoute);

app.listen(3000);

