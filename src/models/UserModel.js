const Schema = require('mongoose').Schema
const model = require('mongoose').model
const userSchema = new Schema({
    name:String
})


const User = model('Users',userSchema)

module.exports = User