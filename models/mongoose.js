require('dotenv').config()
const { logger } = require('mongodb');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const env = require('dotenv')
mongoose.set('strictQuery', false);
mongoose.connect(process.env.URI, { useNewUrlParser: true });

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