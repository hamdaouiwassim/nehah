const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const ideeSchema = new mongoose.Schema({
    titre : {
        type : String ,
        required : true,
        trim : true,
        min : 3 ,
        max : 20
    },
    description :{
        type : String ,
        required : true,
        trim : true,
        min : 3 ,
        max : 20
    },
    iduser : { type : String ,
        required : true
    }

  
} , { timestamps : true })


module.exports = mongoose.model('Idee' , ideeSchema );