const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const model = mongoose.model

const AuthUserSchema = Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    createtedAt:{
        type:Date,
        default:Date.now
    },
    lastLoginAt:{
        type:Date
    }
})

AuthUserSchema.pre("save",async function (next){
const user = this
if(!user.isModified("password"))
{
    return next()
}
try {
   
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(user.password,salt)
    user.password = hashedPassword
    next()
} catch (error) {
    return next(error);
}
})


const AuthUsers = model('AuthUsers',AuthUserSchema)

module.exports = AuthUsers