const Rapport = require('../models/rapport')


exports.CreateRapport = (req,res) => {
    
        const rapportObj = {
            document : req.body.document ,
            visibilite : req.body.visibilite ,
            feedback : req.body.feedback ,
            projet : req.body.projet , 
         }

        const rapport = new Rapport(rapportObj);
        rapport.save((error,createdrapport)=>{
                    if(error) return res.status(400).json({ error })
                    if(createdrapport){
                        return res.status(200).json({ createdrapport })
                    }
        })

        

}
exports.GetAllRapports = ( req , res ) => {
            Rapport.find({}).populate('projet').exec(( error , rapports ) => {
                if(error) return res.status(400).json({ error })
                if (rapports){
                    res.status(200).json({ rapports })
                }
            })
}



exports.DeleteRapport = ( req,res) => {
    rapportId = req.params.rapportId;
    Rapport.findByIdAndRemove(rapportId).exec(( error , rapport ) => {
        if(error) return res.status(400).json({ error })
        if (rapport){
            res.status(200).json({ message : 'Rapport supprimer avec success' })
        }
    })
}

exports.GetRapportByIdProjet = (req,res) => {
    projetId = req.params.projetId;
    Rapport.find({ projet : projetId }).exec(( error , rapport ) => {
        if(error) return res.status(400).json({ error })
        if (rapport){
            res.status(200).json({ rapport })
        }
    })
}
