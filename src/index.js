// require("dotenv").config({path:"./.env"});
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path:"../.env"
})

connectDB()


// 🌟METHOD 1 -> MAKING DB CONNECTION DIRECTLY IN index.js,it is generally not considered a good practice

// import express from "express";
// const app=express();

// (async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log('Error:',error);
//             throw error;
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`Server is running on port${process.env.PORT}`);
//         })
        
//     } catch (error) {
//         console.log('Error:',error);
//         throw error;
        
//     }
// })()