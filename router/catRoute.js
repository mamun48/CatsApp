const express = require("express")
const catModel = require("../model/catModel")

const catRoute = express.Router();



catRoute.route('/')
    .post(async(req,res)=>{
        try{
            const newCat = new catModel(req.body);
            await newCat.save();
            res.send("One cat is inserted")
        }catch(err){
            res.send("There is server side error")
        }
    })
    .get(async(req,res)=>{
        try{
            const cats = await catModel.find({}); //{label:"New"}
            res.status(200).json({
                result:cats
            });
        }catch(err){
            res.send("There was a server side error");
        }
        
    })
    .put(async(req,res)=>{
        res.status(403).send("Put methode is not supported on /api/cats")
    })
    .delete(async(req,res)=>{
        try{
            await catModel.deleteMany({});
            res.send("Cats are deleted")
        }catch(err){
            res.send("There was server side error")
        }
    })

catRoute.route('/:id')
    .post((req,res)=>{
        res.send("Post methode is not supported on /api/cats/id")
    })
    .get(async(req,res)=>{
        try{
            const result = await catModel.find({id:req.params.id});
            res.status(200).json({
                result:result
            })
        }catch(err){
            res.send("There was a server side error")
        }
    })
    .put(async(req,res)=>{
        try{
           const result = await catModel.findOneAndUpdate
           ({id:req.params.id},{
                $set: req.body
            })
            res.json({
                msg:"update successfully",
                update:result
            })
            
        }catch(err){
            res.send("There was a server side error")
        }
       
    })
    .delete(async(req,res)=>{
        try{
          const result = await catModel.deleteOne({id:req.params.id});
            res.json({
                messege:"The cat is deleted successfully",
                result:result
            })
        }catch(err){
            res.status(403).send("There was server side error");
        }
    })

    catRoute.route("/:name")
    .get(async(req,res)=>{
        try{
            const result = await catModel.find({id:req.body.name})
            res.send(result)
        }catch(err){
            res.send("There is server side error")
        }
    })

module.exports = catRoute;