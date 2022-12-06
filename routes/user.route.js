const {Router} = require("express")
const { UserModel } = require("../models/user.model")

const UserController = Router()

UserController.post("/login",async(req,res)=>{

const {mobile} = req.body
const user = await UserModel.findOne({mobile})
let token = jwt.sign({userId : user._id},process.env.JWT_SECRET)
const saved = new UserModel({
    mobile
})
await saved.save()

res.json({token:token})
})

module.exports ={
    UserController
} 