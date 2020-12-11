const Evaluation = require('../models/evaluation')


exports.CreateEvaluation = (req,res) => {
    
        const evaluationObj = {
            note : req.body.note,
            mention : req.body.mention,
            feedback : req.body.feedback,
            projet : req.body.projet
        }

        const evaluation = new Evaluation(evaluationObj);
        evaluation.save((error,createdevaluation)=>{
                    if(error) return res.status(400).json({ error })
                    if(createdevaluation){
                        return res.status(200).json({ createdevaluation })
                    }
        })

        

}
exports.GetAllEvaluations = ( req , res ) => {
            Evaluation.find({}).populate('projet').exec(( error , evaluations ) => {
                if(error) return res.status(400).json({ error })
                if (evaluations){
                    res.status(200).json({ evaluations })
                }
            })
}



exports.DeleteEvaluation = ( req,res) => {
    evaluationId = req.params.evaluationId;
    Evaluation.findByIdAndRemove(evaluationId).exec(( error , evaluation ) => {
        if(error) return res.status(400).json({ error })
        if (evaluation){
            res.status(200).json({ message : 'Evaluation supprimer avec success' })
        }
    })
}

exports.GetEvaluationByIdProjet = (req,res) => {
    projetId = req.params.projetId;
    Evaluation.find({ projet : projetId }).exec(( error , evaluation ) => {
        if(error) return res.status(400).json({ error })
        if (evaluation){
            res.status(200).json({ evaluation })
        }
    })
}
