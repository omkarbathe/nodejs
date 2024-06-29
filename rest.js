const users = require("./MOCK_DATA.json");
const express = require("express");
const fs= require("fs");
const { stringify } = require("querystring");

const app = express();

app.use(express.urlencoded({extended:false}));


// custom middleware
app.use((req,res,next)=>{
   console.log("hello");
   next();//giving task to next middleware or function
})
app.get("/",(req,res)=>{
  res.end("home page");
})
app.get("/user", (req, res) => {
  return res.status(200).json(users);
});

app
  .route("/user/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.status(200).json(user);
  })
  .patch((req ,res)=>{

  });
  app.post("/user",(req,res)=>{
    user = req.body;
    users.push(user);
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users),(err,data)=>{
        return res.status(201).json({status:"success", id : users.length});

    });
    
  });
app.listen(8000);
