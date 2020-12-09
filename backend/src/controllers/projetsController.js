const Projet = require('../models/projet')

exports.CreateProjet = (req,res) => {
    const projetObj = {
            name : req.body.name,
            description : req.body.description,
            stat : "En cours",
            createdBy : req.body.createdBy ,
            domaine : req.body.domaine ,
            depot : req.body.depot,
            note : req.body.note

    }

    const projet = new Projet(projetObj);
    projet.save((error,createdprojet)=>{
                if(error) return res.status(400).json({ error })
                if(createdprojet){
                    return res.status(201).json({ createdprojet })
                }
    })

    

}

exports.GetAllProjets = (req,res) => {
        Projet.find({}).populate('createdBy').exec(( error , projets ) => {
                if(error) return res.status(400).json({ error })
                if (projets){
                    res.status(200).json({ projets })
                }
            })
}