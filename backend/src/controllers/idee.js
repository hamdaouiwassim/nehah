const Idee = require('../models/idee')


exports.CreateIdee = (req,res) => {
    
        const ideeObj = {
            titre : req.body.titre,
            description : req.body.description,
            iduser : req.body.iduser
        }

        const idee = new Idee(ideeObj);
        idee.save((error,createdidee)=>{
                    if(error) return res.status(400).json({ error })
                    if(createdidee){
                        return res.status(201).json({ createdidee })
                    }
        })

        

}