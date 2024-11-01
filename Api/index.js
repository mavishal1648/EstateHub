import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import UserRouter from "./Routes/user.routes.js";
import authRouter from "./Routes/auth.routes.js";

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected To DB");
}).catch((err)=>{
    console.log(err);
})

const app = express();
app.use(express.json())

app.use("/api/user/",UserRouter);
app.use("/api/auth/",authRouter);
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const errMessage = err.message || "Internal Server Issue"
    return res.status(statusCode).json({
        error:true,
        statusCode,
        message:errMessage
    });
});


app.listen(3100,()=>{
    console.log("Server is listening on port 3100!");
})

