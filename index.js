import express from "express";
//importing space


//declaration /intailization
const app=express();
const PORT=4000;

//midleware
app.use(express.json())

//routes
app.get('/',(req,res)=>{
//res.status(200).json({message:'hii all wellcome'})
res.status(200).send(`<div style="background-color:Aqua;color:black"><h1>welcome to my first App</h1></div>`)
})
app.get("/data",(req,res)=>{
    res.status(200).send(`<div style="background-color:Aqua;color:black"><h1>welcome to my Home</h1></div>`)  
})

//running port
app.listen(PORT,()=>{
    console.log(`App is listening on the port  ${PORT}`);
})