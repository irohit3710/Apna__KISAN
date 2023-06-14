const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/ApnaKisan")

.then(()=>{
    console.log("Order Page Database Connected")
})

.catch(()=>{
    console.log("Order Page Database Failed to connect")
})

const orderSchema = new mongoose.Schema({
    name:{
        type:String,z
        // required:true,
    },
    number:{
        type:Number,
        // required:true,
    },
    email:{
        type:String,
        // required:true,
    }, 
    message:{
        type:String,
    }
})

const ordercollection = new mongoose.model("feedback",orderSchema);

module.exports = ordercollection;