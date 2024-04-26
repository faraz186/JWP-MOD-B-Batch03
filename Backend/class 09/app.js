require('dotenv').config();
const express = require('express');
const { Mongoose } = require('./database');
const { default: mongoose } = require('mongoose');
const router = require('./routes');
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api',router)

mongoose.connection.on('open',()=>{
    console.log("database connect successfully..")
})

mongoose.connection.on('error',(err)=>{
    console.log(err)
})

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})