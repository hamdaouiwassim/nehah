const Commentaire = require('../models/commentaire')


exports.CreateCommentaire = (req,res) => {
    
        const commentaireObj = {
            content : req.body.content,
            attachment : req.body.attachment,
            type : req.body.type ,
            createdBy : req.body.createdBy
        }

        const commentaire = new Commentaire(commentaireObj);
        commentaire.save((error,createdcommentaire)=>{
                    if(error) return res.status(400).json({ error })
                    if(createdcommentaire){
                        return res.status(201).json({ createdcommentaire })
                    }
        })

        

}
exports.GetAllCommentaires = ( req , res ) => {
            Commentaire.find({}).populate('createdBy').exec(( error , commentaires ) => {
                if(error) return res.status(400).json({ error })
                if (commentaires){
                    res.status(200).json({ commentaires })
                }
            })
}

exports.GetAllCommentairesByIdee = ( req , res ) => {
    ideeId = req.params.ideeId;
    //console.log(ideeId)
    Commentaire.find({ attachment : ideeId , type : 'idee' }).populate('createdBy').exec(( error , commentaires ) => {
        if(error) return res.status(400).json({ error })
        if (commentaires){
            res.status(200).json({ commentaires })
        }
    })
}


exports.DeleteCommentaire = ( req,res) => {
    //res.status(200).json({ message : 'Commentaire supprimer avec success' })
    commentaireId = req.params.commentId;
    Commentaire.findByIdAndRemove(commentaireId).exec(( error , commentaire ) => {
        if(error) return res.status(400).json({ error })
        if (commentaire){
            res.status(200).json({ message : 'Commentaire supprimer avec success' })
        }
    })
}
