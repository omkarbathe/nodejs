// const users = require("./MOCK_DATA.json");
const express = require("express");
const fs= require("fs");
const { stringify } = require("querystring");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/demo").then(()=>{
  console.log("Mongoose connected");

}).catch(err => console.log(err));

const userSchema = new mongoose.Schema({
  id:{
    

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


})

const User = mongoose.model("user", userSchema);
app.use(express.urlencoded({extended:false}));


// custom middleware
app.use((req,res,next)=>{
   console.log("hello");
   next();//giving task to next middleware or function
})
app.get("/",async (req,res)=>{
  const result = await User.find({});
  res.status(200).json(result);
})
app.get("/user", async(req, res) => {
  const result = await User.find({});
  res.status(200).json(result);
});

app
  .route ("/user/:id")
  .get(async (req, res) => {
    const id = req.params.id;
    const result = await User.findById(req.params.id)
    // const user = users.find((user) => user.id === id);
    return res.status(200).json(result);
  })
  .patch((req ,res)=>{

  });
  app.post("/user", async(req,res)=>{
    body = req.body;
    const result = await User.create(
      {
        id:body.id,
        firstname:body.firstname,
        lastname:body.lastname,
        email : body.email,
        gender: body.gender
      }
    )
    console.log(result)
    // users.push(user);
    // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users),(err,data)=>{
        // return res.status(201).json({status:"success", id : users.length});

    // });
    return res.status(201).json(result);
    
  });
app.listen(8000);
