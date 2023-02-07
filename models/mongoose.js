const { logger } = require('mongodb');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
mongoose.set('strictQuery', false);

mongoose.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true });

const bSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true]
    },
    content: {
        type: String,
        required: [true]
    }
})

module.exports = new mongoose.model('blog', bSchema);