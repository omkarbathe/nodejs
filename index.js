// const users = require("./MOCK_DATA.json");
const express = require("express");
const fs= require("fs");
const connectMongoDb = require("./connection");
const userRouter = require("./routes/user")

const app = express();

// connection
connectMongoDb("mongodb://127.0.0.1:27017/demo").then(()=>{
  console.log("Mongo db connected")
});


// mongoose.connect("mongodb://127.0.0.1:27017/demo").then(()=>{
//   console.log("Mongoose connected");

// }).catch(err => console.log(err));



app.use(express.urlencoded({extended:false}));


// custom middleware
// app.use((req,res,next)=>{
//    console.log("hello");
//    next();//giving task to next middleware or function
// })

// routes
// this router use userrouter for sending responce
app.use("/user" , userRouter);

app.listen(8000,()=>{
  console.log(`server started on port 8000`);
});
