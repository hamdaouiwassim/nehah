const User = require('../../models/user')
const jwt = require("jsonwebtoken")
exports.signup = (req,res) => {
    User.findOne({
        email : req.body.email            
    }).exec( (error,user) => {
        if (user ) return res.status(400).json({
            message : 'User already registred'
        })
        const {
            firstname ,
            lastname ,
            email ,
            password,
            contactNumber  
        } = req.body;
        const _user = new User({
            firstname ,
            lastname ,
            email ,
            password ,
            username : Math.random().toString() ,
            role : 'admin',
            contactNumber

        });
        _user.save((error,data) => {
            if(error){
                return res.status(400).json({
                    message : "Something went wrong"
                });

            }
            if(data){
                return res.status(201).json({
                    message : "Admin created successfully ...!"
                })
            }
        })


    }) // add user 
}

exports.signin = (req,res) => {
    User.findOne({
        email : req.body.email            
    }).exec((error,user)=>{
        if(error) return res.status(400).json({ error })
        if(user){
                if(user.authenticate(req.body.password ) && user.role === 'admin'){
                        const token = jwt.sign({_id:user._id , role : user.role },process.env.JWT_SECRET , { expiresIn : '1h'}) 
                        const { _id , firstname , lastname , email , role , fullname } = user;
                        res.cookie('token',token , { expiresIn : '1h'})
                        res.status(200).json({
                            token,
                            user :{
                                _id ,
                                firstname ,
                                lastname ,
                                email ,
                                role ,
                                fullname
                            }
                        })
                    }else{
                        return res.status(400).json({message : "Invalid password "}) 
                    }
        }
        else{
            return res.status(400).json({ message : 'Something went wrong' })
        }
    })
}


exports.signout = (req,res) =>{
    res.clearCookie('token');
    res.status(200).json({
        message : 'Signout successfully'
    })

}