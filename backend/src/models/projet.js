const mongoose = require('mongoose')

const projetSchema = new mongoose.Schema({
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

    createdBy : { type: mongoose.Schema.Types.ObjectId, ref: 'User' ,
        required : true
    },

    domaine : { 
        type : String ,
        required : true },
    depot : { 
        type : Date ,
        required : true },
    note : { 
        type : Number ,
        required : true }

  
} , { timestamps : true })


module.exports = mongoose.model('Projet' , projetSchema );