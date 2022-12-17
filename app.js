 
  const express = require("express");
  const app = express();
  const bodyparser = require("body-parser");



  app.use(express.static("public"));
  app.use(bodyparser.urlencoded({extended:true}));

 app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/signup.html");
 })
 app.post("/",(req,res)=>{
    var fname = req.body.Fname;
    var lname = req.body.Lname;
    var vemail = req.body.email;

    console.log(fname+lname+" "+ vemail);
 })


  app.listen(process.env.PORT || 3000,()=>{
    console.log("the server started and running");
  })