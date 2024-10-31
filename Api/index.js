import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import UserRouter from "./Routes/user.routes.js";

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected To DB");
}).catch((err)=>{
    console.log(err);
})

const app = express();


app.use("/api/user/",UserRouter);

app.listen(3100,()=>{
    console.log("Server is listening on port 3100!");
})

