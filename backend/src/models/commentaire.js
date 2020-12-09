const mongoose = require('mongoose')

const commentaireSchema = new mongoose.Schema({
    content : {
        type : String ,
        required : true,
        
    },
    type : {
        type : String ,
        required : true
    },
    attachment : {  type: String ,
        required : true
    },
    createdBy : {  type: mongoose.Schema.Types.ObjectId, ref: 'User' ,
        required : true
    }

  
} , { timestamps : true })


module.exports = mongoose.model('Commentaire' , commentaireSchema );