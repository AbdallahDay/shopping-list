require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const itemRoutes = require('./routes/items')

const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/items', itemRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to db')
        
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Server listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })