const mongoose = require("mongoose")

require("dotenv").config()

const connextion = mongoose.connect()

module.exports = {
    connextion
}