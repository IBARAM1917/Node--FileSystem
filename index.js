import express from "express";
import fs from 'node:fs';
import { format } from "date-fns";
import path from "path";
import { fileURLToPath } from "url";
//importing space


//declaration /intailization
const app=express();
const PORT=4000;
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
const directorypath=path.join(__dirname,'Timestamp');
console.log(directorypath);

//midleware
app.use(express.json())

//routes
let filelocation;
app.get(`/create`,(req,res)=>{
    let today=format(new Date(),`dd-MM-yyyy HH-mm-ss`);
    console.log(today);
    filelocation=`Timestamp/${today}.txt`;
    fs.writeFileSync(filelocation,`${today}`,'utf-8');
    res.status(200).send(`${today}.txt Create Timestamp Folder`);
})

app.get(`/read`,(req,res)=>{
    let txtfile=[];
    fs.readdir(directorypath,(err,files)=>{
        files.forEach((item)=>{
            txtfile.push(item);
        });
        res.status(200).send(txtfile.join('<br/>'));
    });
})
//running port
app.listen(PORT,()=>{
    console.log(`App is listening on the port  ${PORT}`);
})