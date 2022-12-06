const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    mobile: {type:Number ,required : true}

})


const UserModel = mongoose.model("user",userSchema)


module.exports ={

    UserModel

}