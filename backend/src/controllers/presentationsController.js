const Presentation = require('../models/presentation')


exports.CreatePresentation = (req,res) => {
    
        const presentationObj = {
            document : req.body.document,
            visibilite : req.body.visibilite,
            projet : req.body.projet
        }

        const presentation = new Presentation(presentationObj);
        presentation.save((error,createdpresentation)=>{
                    if(error) return res.status(400).json({ error })
                    if(createdpresentation){
                        return res.status(200).json({ createdpresentation })
                    }
        })

        

}
exports.GetAllPresentations = ( req , res ) => {
            Presentation.find({}).populate('projet').exec(( error , presentations ) => {
                if(error) return res.status(400).json({ error })
                if (presentations){
                    res.status(200).json({ presentations })
                }
            })
}



exports.DeletePresentation = ( req,res) => {
    presentationId = req.params.presentationId;
    Presentation.findByIdAndRemove(presentationId).exec(( error , presentation ) => {
        if(error) return res.status(400).json({ error })
        if (presentation){
            res.status(200).json({ message : 'Presentation supprimer avec success' })
        }
    })
}

exports.GetPresentationByIdProjet = (req,res) => {
    projetId = req.params.projetId;
    Presentation.find({ projet : projetId }).exec(( error , presentation ) => {
        if(error) return res.status(400).json({ error })
        if (presentation){
            res.status(200).json({ presentation })
        }
    })
}
