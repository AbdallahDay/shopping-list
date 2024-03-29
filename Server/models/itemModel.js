const mongoose = require('mongoose')

const Schema = mongoose.Schema

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    checked: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

module.exports = mongoose.model('Item', itemSchema)