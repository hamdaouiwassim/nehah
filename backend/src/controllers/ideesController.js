const Idee = require('../models/idee')


exports.CreateIdee = (req,res) => {
    
        const ideeObj = {
            name : req.body.name,
            description : req.body.description,
            stat : "En cours",
            createdBy : req.body.createdBy
        }

        const idee = new Idee(ideeObj);
        idee.save((error,createdidee)=>{
                    if(error) return res.status(400).json({ error })
                    if(createdidee){
                        return res.status(201).json({ createdidee })
                    }
        })

        

}
exports.GetAllIdees = ( req , res ) => {
            Idee.find({}).populate('createdBy').exec(( error , idees ) => {
                if(error) return res.status(400).json({ error })
                if (idees){
                    res.status(200).json({ idees })
                }
            })
}

exports.validateIdeeByAdmin = (req,res) => {
    ideeId = req.params.ideeId;
    Idee.findByIdAndUpdate(ideeId , { stat: 'valide' } , { new : true }).exec(( error , idee ) => {
        if(error) return res.status(400).json({ error })
        if (idee){
            res.status(200).json({ message : 'Idee valider avec success' })
        }
    })
}

exports.DeleteIdee = ( req,res) => {
    ideeId = req.params.ideeId;
    Idee.findByIdAndRemove(ideeId).exec(( error , idee ) => {
        if(error) return res.status(400).json({ error })
        if (idee){
            res.status(200).json({ message : 'Idee supprimer avec success' })
        }
    })
}
