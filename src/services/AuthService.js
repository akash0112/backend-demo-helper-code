const AuthUsers = require("../models/authModel")
const jwt =  require('jsonwebtoken')
const bcrypt = require('bcrypt');

const loginUser= async(username,password)=>{
    const user = await AuthUsers.findOne({username})
    if(!user)
    {
        throw new Error('User not found')
    }
    const passwordMatch = await bcrypt.compare(password,user.password)
    if(!passwordMatch)
    {
        throw new Error('Incorrect Password')
    }
    user.lastLoginAt = new Date();
    await user.save();
    
    const token = jwt.sign({
        username: user,
    },  'your-secret-key')
    return token
}


async function registerUser(username, password) {
  const existingUser = await AuthUsers.findOne({ username });

  if (existingUser) {
    throw new Error('User Exist');
  }


  const newUser = new AuthUsers({ username, password });
  return await newUser.save();
}

module.exports = {
  registerUser,
};



module.exports={
    loginUser,
    registerUser
}