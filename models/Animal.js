const mongoose = require("mongoose")
const AnimalSchema = mongoose.Schema({
    Name: {type:String,required:true},
    Breed: {type:String,required:true},
    Age: {type:Number, min:1,max:21},
})

module.exports = mongoose.model("Animal",AnimalSchema);