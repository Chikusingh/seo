const Sequelize = require("sequelize");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//create a simple api
app.get('/first',(req,res)=>{
      res.json("nilima singh")
})

app.listen(3000,()=>{
      console.log("hello nilima")
})
