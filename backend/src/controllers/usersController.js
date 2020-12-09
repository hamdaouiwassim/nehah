const User = require('../models/user')


exports.GetAllUsers = ( req , res ) => {
            User.find({}).exec(( error , users ) => {
                if(error) return res.status(400).json({ error })
                if (users){
                    res.status(200).json({ users })
                }
            })
}


exports.deleteUser = ( req ,res ) => {
    userId = req.params.userId ;
    User.findByIdAndRemove(userId).exec((error,user) => {
        if(error) return res.status(400).json({ error })
        if (user){   
            res.status(200).json({ message : 'User deleted Successfully' })
        }
    })
}
