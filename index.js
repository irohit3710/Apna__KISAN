const express = require("express");
const app = express()
app.use('/public',express.static('public'))
app.use('/Images',express.static('Images'))
app.use('/js',express.static('js'))
const path = require("path")
const bodyparser = require("body-parser")

const hbs = require("hbs")
const {collection,ordercollection} = require("./mongodb");
const templatePath = path.join(__dirname,'./template')

app.use(express.json()) 
app.set("view engine","hbs")
app.set("views",templatePath)
app.use(express.urlencoded({extended:false}))

// app.post("/feedback",async (req,res)=>{
//     const data={
//         name:req.body.name,
//         number:req.body.number,
//         email:req.body.email,
//         message:req.body.message
//     }
// await collection.insertMany([data]);
// res.render("index")
// })

// app.post("/checkout",async(req,res) => {
//     const orderdata={
//         name:req.body.name,
//         email:req.body.email,
//         city:req.body.city,
//         address:req.body.address,
//         zipcode:req.body.zipcode,
//         country:req.body.country,
//     }
//     await ordercollection.insertMany([orderdata]);
//     res.render("index");
// })


app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/cart",(req,res)=>{
    res.render("cart")
})

app.get("/order",(req,res)=>{
    res.render("order")
})

app.get("/checkout",(req,res)=>{
    res.render("checkout")
})

app.post("/feedback",async (req,res)=>{
    const data={
        name:req.body.name,
        number:req.body.number,
        email:req.body.email,
        message:req.body.message
    }
await collection.insertMany([data]);
res.render("index")
})

app.post("/checkout",async(req,res) => {
    const orderdata={
        name:req.body.name,
        email:req.body.email,
        city:req.body.city,
        address:req.body.address,
        zipcode:req.body.zipcode,
        country:req.body.country,
    }
    await ordercollection.insertMany([orderdata]);
    res.render("order");
})

app.listen(3000,()=>{
    console.log("Port connected");
})

