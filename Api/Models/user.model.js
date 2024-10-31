import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:"String",
        required:True,
        unique:true,
    },
    email:{
        type:"String",
        required:True,
        unique:true,
    },
    password:{
        type:"String",
        required:True,
        minlength: 6
    }
},{timestamps:true});


const User = mongoose.model('User',userSchema);
export default User;