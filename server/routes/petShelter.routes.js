const PetController = require("../controllers/petShelter.controller");


module.exports = app => {

    //ALL pets
    app.get("/api/pets", PetController.findAllPets);

    //NEW Pet
    app.post("/api/pets", PetController.createNewPet);
    
    //ONE Pet
    app.get("/api/pets/:petId", PetController.findOnePet);

    //UPDATE Pet
    app.put("/api/pets/update/:petId", PetController.updateExistingPet);

    //DELETE Pet
    app.delete("/api/pets/delete/:petId", PetController.deletePet);
   
}