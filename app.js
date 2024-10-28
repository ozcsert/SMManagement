const config = require("./utils/config")
const express = require('express')
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
mongoose.set("strictQuery", false)
//const { info, add } = require('./mongo');
const http = require('http')
const journRouter = require("./controllers/journs")


//app.get('/', (request, response) => {
//  response.send('<h1>Hello World!</h1>')
//})
//
//app.get('/journs', (request, response) => {
//  response.send('journs')
//})



mongoose.connect(config.MONGODB_URI)
  .then(() => {
    console.log("connected to MongoDB")
  })
  .catch((error) => {
    console.log("error connection to mongo" , error.message)
  })

  app.use(cors())
  app.use(express.json())
  app.use("/api/journs", journRouter)



module.exports = app