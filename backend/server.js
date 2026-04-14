require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Content = require('./models/Content');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log("MongoDb Connected"))
    .catch((err)=> console.log(err));

const app = express();

// dynamic cors for production
const frontendUrl = (process.env.FRONTEND_URL || "*").replace(/\/$/, "");
app.use(cors({
    origin: frontendUrl,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(express.json());

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

app.get("/content",async (req,res)=>{
    try{
        const data = await Content.findOne();
        res.json(data);
    }catch(err){
        res.json({error : err.message});
    }
});

app.post("/content",async (req,res)=>{
    try{
        const updated = await Content.findOneAndUpdate(
        {},
        req.body,
        { new: true, upsert: true }
        );
        res.json(updated);
    }catch(err){
        res.status(500).json({err: err.message});
    }
});

app.post("/login",(req,res)=>{
    
    const {email , password} = req.body;
    
    if(email == "admin@gmail.com" && password == "1234"){
        res.json({success: true});
    }else{
        res.json({success: false});
    }
});


app.get("/",(req,res)=>{
    res.send("Api is running");
});