const mongoose = require('mongoose')

const uniqueValidator = require('mongoose-unique-validator')

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        minLength: [5, 'Book title must at least 5 characters long']
    },
    published: {
        type: Number
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    },
    genres: [
        { type: String }
    ]
})

schema.plugin(uniqueValidator)

module.exports = mongoose.model('Book', schema)