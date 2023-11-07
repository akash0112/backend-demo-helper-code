const mongoose = require('mongoose')
const clc = require('cli-color');
const dbConn =()=>{
    mongoose.connect('mongodb://localhost:27017').then(()=>{
        console.log(clc.bgGreen.bold('Database connected'));
}).catch((err)=>{
    console.log(clc.red(err));
})
}

module.exports = dbConn