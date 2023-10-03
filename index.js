require('dotenv').config()

const express = require("express")
const mongoose = require("mongoose")
const mongoString = process.env.databaseUrl
console.log(mongoString)

mongoose.connect(mongoString)
const connection = mongoose.connection

connection.on('error', (error) => {
    console.log(error)
})

connection.once('connected', () => {
    console.log('Database Connected')
})
const app = express()

app.use(express.json())

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})




