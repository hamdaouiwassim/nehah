const mongoose = require('mongoose')
const Schema = mongoose.Schema
newSchema = new Schema({
    name : String,
    description : String,
    categorie : String, 
})

module.exports = mongoose.model('Idee',newSchema,'idees')