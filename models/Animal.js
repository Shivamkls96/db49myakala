const mongoose = require("mongoose")
const AnimalSchema = mongoose.Schema({
    Name: String,
    Breed: String,
    Age: Number
})

module.exports = mongoose.model("Animal",AnimalSchema);