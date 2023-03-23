require('dotenv').config()
const { logger } = require('mongodb');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const env = require('dotenv')
mongoose.set('strictQuery', false);
mongoose.connect(process.env.URI, { useNewUrlParser: true });
// "mongodb://localhost:27017/blog"
// console.log()    
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