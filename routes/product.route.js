const {Router} = require("express")

const ProductController = Router()
const cloudinary = require('cloudinary').v2

cloudinary.config({ 
    cloud_name: 'decenldil', 
    api_key: '527416312367139', 
    api_secret: 'jJm7GPORLqYxzjJermixEHVHIxI' 
  });

// name: {type:String ,required : true},
// img: {type:String ,required : true},
// price: {type:String ,required : true},
// brand: {type:String ,required : true},
// userId: {type:String ,required : true},
const {ProductModel} = require("../models/product.modal")

ProductController.post("/create",(req,res)=>{
    const {img,name,price,brand} = req.body
console.log("BODY",req.body);
const file = req.files.photo
cloudinary.uploader.upload(file.tempFilePath,(err,result) => {
    console.log("RERESULTS",result);
    const product = new ProductModel({
            name,
            img:result.url,
            price,
            brand 
         })
         console.log("URLLLLLLLL", result.url);
         product.save()
         .then((res) => {
            console.log("ENDINGGGGG",res)
        }) 
    })
    res.send("uploaded success")


})

module.exports ={
    ProductController
}