const express = require('express')
const itemRoutes = require('./routes/items')

const app = express()

// variables
require('dotenv').config()
const port = process.env.PORT

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/items', itemRoutes)

app.listen(port, () => {
    console.log('Server listening on port', port)
})