const mongoose = require('mongoose')

const uniqueValidator = require('mongoose-unique-validator')

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minLength: [4, 'Author name must be at least 3 characters long']
    },
    born: {
        type: Number
    }
})

schema.plugin(uniqueValidator)

module.exports = mongoose.model('Author', schema)