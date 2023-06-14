const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/ApnaKisan")

.then(()=>{
    console.log("Database Connected")
})

.catch(()=>{
    console.log("Failed to connect")
})

const feedbackSchema = new mongoose.Schema({
    name:{
        type:String,
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


const orderSchema = new mongoose.Schema({
    name:{
        type:String,
        // required:true,
    },
    email:{
        type:String,
        // required:true,
    },
    city:{
        type:String,
        // required:true,
    },
    address:{
        type:String,
        // required:true,
    },
    zipcode:{
        type:Number,
        // required:true,
    },
    country:{
        type:String,
        // required:true,
    },
})


const ordercollection = new mongoose.model("order",orderSchema);
const collection = new mongoose.model("feedback",feedbackSchema);

// module.exports = collection;
module.exports = {collection,ordercollection};