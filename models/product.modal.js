const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({

    name: {type:String   ,required : true},
    img: {type:String    ,required : true},
    price: {type:String  ,required : true},
    brand: {type:String  ,required : true},
    userId: {type:String },

})


const ProductModel = mongoose.model("product",productSchema)


module.exports ={

    ProductModel

}