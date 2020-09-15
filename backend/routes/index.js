const express = require('express')
const router = express.Router()
const Idee = require('../models/index')


router.get('/',(req,res)=>{
    Idee.find({},(err,data)=>{
                res.json(data)
        })
})

router.get('/:id',(req,res)=>{
    Idee.findById(req.params.id,(err,data)=>{
                res.json(data)
        })
})

router.delete('/:id',async (req,res)=>{
    Idee.findOneAndDelete(req.params.id,(err,data)=>{
                res.json({'message':'Idee supprimee'})
        })
})

router.put('/:id',async (req,res)=>{
    await Idee.findByIdAndUpdate(req.params.id,req.body )
                res.json({'message':'Idee mis a jour'})
        
})

router.post('/', (req,res) => {
    //console.log(req)
    idee = new Idee({
        name : req.body.name ,
        description : req.body.description ,
        categorie : req.body.categorie 

    })
    idee.save(()=>{
           res.json(idee)
    })
})

module.exports = router

