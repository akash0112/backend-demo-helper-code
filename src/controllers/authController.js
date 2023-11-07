
const AuthService = require('../services/AuthService')
const jwt =  require('jsonwebtoken')

const loginUser=async(req,res)=>{
      const {username,password} = req.body
      try {
        const token = await AuthService.loginUser(username,password)
        const decodedToken = jwt.decode(token)
        res.status(200).json({token, user:decodedToken});
      } catch (error) {
        res.status(401).json({message:error.message})
      }
}

async function registerUser(req, res) {
  try {
    const { username, password } = req.body;
    await AuthService.registerUser(username, password);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
}



module.exports ={
  loginUser,
  registerUser
}