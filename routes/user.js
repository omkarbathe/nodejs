const express = require("express");
const {handleGetAllUser,handleGetUserById,handleCreateUser}= require("../controllers/user");

const router = express.Router();


//send all user data
// this route is basically /user

// router.route("/")
//   .get(handleGetAllUser)
//   .post(handleCreateUser)


  router.get("/",handleGetAllUser);
  router.post("/",handleCreateUser);

router.get("/:id",handleGetUserById);


  

  // users.push(user);
  // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users),(err,data)=>{
  // return res.status(201).json({status:"success", id : users.length});

  // });


// for particular user
/// this route is basically /user/id



 

  
module.exports = router ;