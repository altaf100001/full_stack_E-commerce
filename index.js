const express = require("express")
const app = express()
const cors = require("cors")
const fileUpload = require("express-fileupload")


require("dotenv").config()
app.use(cors())
app.use(fileUpload({ useTempFiles:true}))
app.use(express.json())
const { connection } = require("./config/db")
const { UserController } = require("./routes/user.route")
const { ProductController } = require("./routes/product.route")

const PORT = process.env.PORT || 8080



app.get("/",(req,res)=>{

    res.json({msg:"home page of wendor app"})

}) 

app.use("/user",UserController)
app.use("/product",ProductController)

 
app.listen(PORT,async()=>{

    try{
         await connection
         console.log("Connected to DB")
    }
    catch(err){
        console.log(err,"Error")
    }

console.log(`Connected to ${PORT} Port`)

})