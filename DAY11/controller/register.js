const User = require("../models/user");

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * check if email already exists
 * password hash
 * email lowercase
 * save 
 */

const register = (req, res) => {
    const {email ,password} = req.body;
    try{
        const alreadyExists = await User.findOne({ where : {email}});
        if(alreadyExists){
            res.status(401).send("Email already exists");
        }
    } catch(err) {
        console.log(err);
    }
    

}

module.export = register;