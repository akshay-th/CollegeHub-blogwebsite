import express from "express";
import mongoose from "mongoose"
import router from "./routes/user-routes";
import blogRouter from "./routes/blog-routes";
import cors from 'cors';

const app=express();
app.use(cors());
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogRouter);
mongoose.connect(
    "mongodb+srv://admin:UPbKE!Yi_R4U7zB@cluster0.ap4yp.mongodb.net/Blog?retryWrites=true&w=majority"
    ).then(()=>app.listen(5000)).then(()=>console.log("connected to database and listening to localhost 5000")).catch((err)=>console.log(err));

app.use("/api",(req,res,next)=>{
    res.send("hello universe");
});

