/*
 * Title : CatApp
 * Description : Cat app 
 * Author : Mamun Miah
 * Date : 18 April 2022
 */

const express = require("express")
const mongoose = require("mongoose")
const catRoute = require("./router/catRoute")

mongoose
    .connect("mongodb://localhost/CatApp")
    .then(()=>{
        console.log("mongo server connect...")
    })
    .catch((err)=>{
        console.log(err);
    })

const app = express();
app.use(express.json());
app.use("/api/cats",catRoute);



app.use((req,res)=>{
    res.send("This is not valid route")
})
app.listen(4000,()=>{
    console.log("App is running");
})