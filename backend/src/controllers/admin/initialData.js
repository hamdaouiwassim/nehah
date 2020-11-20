const Idee = require('../../models/idee');
const User = require('../../models/user');
exports.initialData = async (req , res ) => {
    const users = await User.find({}).exec();
    const idees = await  Idee.find({}).exec(); 
    res.status(200).json({
        idees , users
    })

}