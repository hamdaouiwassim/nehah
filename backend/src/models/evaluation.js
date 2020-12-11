const mongoose = require('mongoose')

const evatuationSchema = new mongoose.Schema({
   
    note :{
        type : Number ,
        required : true
        
    },
    mention : { 
        type : String ,
        required : true
     },
     feedback : { 
        type : String ,
        required : true
     },

    projet : {  type: mongoose.Schema.Types.ObjectId, ref: 'Projet' ,
        required : true
    }

  
} , { timestamps : true })


module.exports = mongoose.model('Evaluation' , evatuationSchema );