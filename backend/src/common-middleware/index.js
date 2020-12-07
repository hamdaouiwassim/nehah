const jwt = require('jsonwebtoken');
exports.requireSignIn = (req, res , next ) => {
    //console.log(req.headers)
    if (req.headers.authorization){
        const token = req.headers.authorization.split(" ")[1];
        const user = jwt.verify(token , process.env.JWT_SECRET)
        req.user = user;
        
    }else{
        return res.status(400).json({ message : 'Authorisation required'});
    }
    
    next();
    //jwt.decode();
}

exports.professionelMiddleware = ( req , res , next ) => {
    if (req.user.role !== "professionel"){
        return res.status(400).json({ message : 'Access denied '})
    }
    next()
}

exports.etudiantMiddleware = ( req , res , next ) => {
    if (req.user.role !== "etudiant"){
        return res.status(400).json({ message : 'Access denied '})
    }
    next()
}

exports.adminMiddleware = ( req , res , next ) => {
    console.log(req.user);
    if (req.user.role !== "admin"){
            return res.status(400).json({ message : 'Access denied '})
    }
    next()
    
}