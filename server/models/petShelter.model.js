const mongoose = require('mongoose');


const PetShelterSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, "Name is required!"],
        minlength: [3, "Name must be at least 3 characters long"],
        // unique: true  //validation error when attempting to test
    },
    type: {
        type: String,
        required:[true, "Pet Type is required!"],
        minlength: [3, "Pet Type must be at least 3 characters long"]
    },
    description: {
        type: String,
        required: [true, " Adding short descriptions help increase chances of Adoption!"],
        minlength: [3, "Description must be at least 3 characters long"]
    },
    skill1: {
        type: String
    },
    skill2: {
        type: String
    },
    skill3: {
        type: String
    },
    likes: {
        type: Number
    }
    
})

//register the above code at a table in mongodb
const PetShelter = mongoose.model("PetShelter", PetShelterSchema )

module.exports = PetShelter;