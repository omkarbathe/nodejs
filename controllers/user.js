// controllers are the function which is pass into routes


const { User} = require("../models/user");


async function handleGetAllUser (req,res){
        const result = await User.find({},{});
        res.status(200).json(result);
      }




async function handleGetUserById(req,res){
    const id = req.params.id;
    const result = await User.findById(req.params.id);
    return res.status(200).json(result);
}


async function handleCreateUser(req,res){
    body = req.body;
  const result = await User.create({
    id: body.id,
    firstname: body.firstname,
    lastname: body.lastname,
    email: body.email,
    gender: body.gender,
  });
  console.log(result);
  return res.status(201).json(result);


}
module.exports ={handleGetAllUser,handleGetUserById,handleCreateUser};