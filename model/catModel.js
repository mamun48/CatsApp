const mongoose = require("mongoose")

const catSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true
    },
    id:{
        type:Number,
        require:true
    },
    description:{
        type:String,
        require:true
    }


},{
    timestamps:true
})

const catModel = mongoose.model("Cat",catSchema);
module.exports = catModel;