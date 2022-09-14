import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import route from './route/route'


const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://muhaz:6VE8Lk82R6vAuBok@cluster0.syf7fzi.mongodb.net/group42Database",{useNewUrlParser:true})
.then(()=>{
    console.log("MngoDB Connected..")
}).catch(err=>{
    console.log(err.message);
})

app.use('/',route)

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))})