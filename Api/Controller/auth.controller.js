import User from "../Models/User.Model.js";
import bcrypt from 'bcrypt'

export const signUp = async(req,res,next)=>{
    const{email,username,password} = req.body;
    const hashPassword = bcrypt.hashSync(password,10);
    const newUser = new User({username,email,password:hashPassword});
    try{
        await newUser.save();
        res.status(201).send("User Created Successfully")
    }catch(err){
        next(err);
    }
}