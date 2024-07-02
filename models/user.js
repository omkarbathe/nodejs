
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    id:{
    //   unique:true,
     },
    firstname:
     {
      type: "string",
      required : true,
  
     },
     lastname:
     {
      type:"string",
      required : false,
  
     },
  
     email:{
      type:"string",
      required : true,
      unique : true,
  
  
     },
     gender:{
      type: "string",
  
     }
  });

const User = mongoose.model("user", userSchema);

  module.exports ={
    User
  }
