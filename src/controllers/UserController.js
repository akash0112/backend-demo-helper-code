const UserService = require('../services/UserService')
const bcrypt = require('bcrypt');

const createUser=async(req,res)=>{
   try {
    const {name,email} = req.body
     const newUser = await UserService.registerUser(name,email)
     res.status(201).json(newUser)

   } catch (error) {
    res.status(400).json({ error: error.message });
   }
}


module.exports={
    createUser
}
