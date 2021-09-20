const Pet = require("../models/petShelter.model");



module.exports.findAllPets = (req,res)=>{
    Pet.find()
        .then(allPets=>{
            res.json({results: allPets})
        })
        .catch(err=>{
            res.json({err:err})
        })
}



module.exports.createNewPet = (req,res)=>{
    Pet.create(req.body)
        .then(newPetObj=>{
            res.json({results: newPetObj })
        })
        .catch(err=>{
            res.json({err:err})
        })
}

module.exports.findOnePet = (req,res)=>{
    
    Pet.findOne({_id:req.params.petId})
        .then(foundPet=>{
            res.json({results: foundPet })
        })
        .catch(err=>{
            res.json({err:err})
        })
}


module.exports.updateExistingPet = (req, res) => {
    Pet.findOneAndUpdate(
        { _id: req.params.petId }, 
        req.body, 
        { new: true, runValidators: true } 
    )
        .then(updatedPet => {
            res.json({ results: updatedPet })
        })
        .catch(err=>{
            res.json({err:err})
        })
        
}

module.exports.deletePet = (req,res)=>{
    Pet.deleteOne({_id: req.params.petId})
        .then(deletedPet =>{
            res.json({results: deletedPet})
        })
        .catch(err=>{
            res.json({err:err})
        })
}
