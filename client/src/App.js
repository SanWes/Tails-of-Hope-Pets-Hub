import './App.css';
import AllPets from './components/AllPets';
import EditPet from './components/EditPet';
import ShowOnePet from './components/ShowOnePet';
import NewPetForm from './components/NewPetForm';


import {
  BrowserRouter,
  Switch,
  Route, Link
} from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
    <div className="App container-xl">

    <nav className="navbar navbar-container">

     <Link style={{color: '#fff'}} to="/"> <h1 className="m-2 p-2 float-left">Pet Shelter</h1> </Link>

 <Link className="m-2 p-2 btn btn-info" to="/pets/new" > add pet to the shelter </Link>

    </nav>

      <Switch>

<Route exact path="/">
  <AllPets   />
</Route>

<Route exact path="/pets/new">
  <NewPetForm   />
</Route>

<Route exact path="/pets/edit/:petId">
  <EditPet/>
</Route>


<Route exact path="/pets/show/:petId">
  <ShowOnePet />
</Route>


    </Switch>
      
    </div> 
  </BrowserRouter>
  );
}

export default App;
