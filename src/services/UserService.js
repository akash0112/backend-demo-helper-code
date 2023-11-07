const User = require("../models/UserModel")

const createUser =(name,email)=>{
    try {
        const user = new User({name,email})
       return user.save()  
    } catch (error) {
        throw error
    }
}


module.exports={
    createUser
}