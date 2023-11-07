const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dbConn = require('./utils/dbConn')
const cors = require('cors')
const indexRouter = require('./routes')
const clc = require('cli-color')
const controllers = require('./controllers')
console.log(controllers.authController.loginUser)
dbConn()
app.use(cors())
app.use(bodyParser.json())

app.use('/',indexRouter)


app.get('/',(req,res)=>{
    res.send('your api is working')
})


app.listen(3000,()=>{
    console.log(clc.bgBlue.bold('Server is ON'));
})
app.on('error', (error) => {
    console.error(clc.bgRed.bold('Server error:', error.message));
  });