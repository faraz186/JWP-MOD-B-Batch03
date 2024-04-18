require("dotenv").config();
const express = require("express");
const all_routes = require("./routes");
const { connect_to_database } = require("./database");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser())
app.use(express.json());

connect_to_database()
app.use(all_routes)

app.listen(process.env.PORT, () => {
  console.log(`Server is listening at: ${process.env.PORT}`);
});
