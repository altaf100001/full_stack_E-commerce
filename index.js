const express = require("express")
const app = express()
const cors = require("cors")
const { json } = require("express")
require("dotenv").config()
app.use(cors())
app.use(json())


const PORT = process.env.PORT || 8080


app.get("/",(req,res)=>{

    res.json({msg:"home page of wendor app"})

})



app.listen(PORT,()=>{

console.log(`Connected to ${PORT} port`)

})