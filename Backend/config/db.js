const mongoose = require("mongoose")
require("dotenv").config()
const Connection = "mongodb+srv://root:B5xcEJa77ADKDDVl@cluster0.mgnigbt.mongodb.net/?retryWrites=true&w=majority"
const connection=mongoose.connect(Connection);

module.exports={connection}

