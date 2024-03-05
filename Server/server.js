const express = require('express')

const app = express()

// variables
require('dotenv').config()
const port = process.env.PORT

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.get('/', (req, res) => {
    res.json({mssg: 'Hello'})
})

app.listen(port, () => {
    console.log('Server listening on port', port)
})