require("dotenv").config();
const express = require("express");      
const generateUniqueId = require("generate-unique-id");   
const app = express();  
const PORT = process.env.PORT || 8080;   

// users CRUD

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = [];  

app.get("/api/getuser", (req, res) => {   
  res.json(users);
});

app.post("/api/createuser", (req, res) => {
  users.push({ ...req.body, id: Date.now().toString(25) });   
  console.log(users);
  res.json({     
    message: "user created successfully...",
    data: req.body,
    status: true,
  });
});

app.put("/api/updateuser/:id", (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((obj) => obj.id === id);
  users.splice(index, 1, { ...req.body, id });
  res.json({
    message: "user update successfully...",
    status: true,
  });
});

app.delete("/api/deleteuser/:id", (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((obj) => obj.id === id);
  users.splice(index, 1);
  res.json({
    message: "user delete successfully...",
    status: true,
  });
});

const id1 = generateUniqueId({
  length: 55,
  includeSymbols: ["@", "#", "|", "$", "%"],
  //   useLetters: true,
});

console.log(id1);

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
