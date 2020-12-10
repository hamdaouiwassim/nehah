const mongoose = require('mongoose')

const presentationSchema = new mongoose.Schema({
   
    document :{
        type : String ,
        required : true
        
    },
    visibilite : { 
        type : String ,
        required : true
     },

    projet : {  type: mongoose.Schema.Types.ObjectId, ref: 'Projet' ,
        required : true
    }

  
} , { timestamps : true })


module.exports = mongoose.model('Presentation' , presentationSchema );