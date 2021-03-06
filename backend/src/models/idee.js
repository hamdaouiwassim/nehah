const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const ideeSchema = new mongoose.Schema({
    name : {
        type : String ,
        required : true,
        trim : true,
        min : 3 
    },
    description :{
        type : String ,
        required : true,
        trim : true,
        min : 3 
    },
    stat : { 
        type : String ,
        required : true
     },

    createdBy : {  type: mongoose.Schema.Types.ObjectId, ref: 'User' ,
        required : true
    }

  
} , { timestamps : true })


module.exports = mongoose.model('Idee' , ideeSchema );