import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useHistory, Link } from "react-router-dom";


const EditPet = () => {


    const [onePet, setOnePet] = useState([])

    const {petId} = useParams()

    const history = useHistory();

    let [validationErrors, setValidationErrors] = useState({})


    useEffect( () => {
        axios.get(`https://server-pet-store.up.railway.app/api/pets/${petId}/`)
        .then(res=> {
            console.log("****** Results are these", res);
            setOnePet(res.data.results)
        })
        .catch(err => console.log("ERRORRRR-->", err))
    }, [petId] )



    const changeHandler = (e) => {
        console.log("Changing something");
        console.log(e.target.name, e.target.value);

            setOnePet({
                ...onePet,
                [ e.target.name]: e.target.value
            })
        

    }

    //update our Pet with put call
    const submitHandler = (e) => {
        e.preventDefault()
        console.log("submitted with this info -->", onePet);

        axios.put(`https://server-pet-store.up.railway.app/api/pets/update/${petId}`, onePet)
            .then(res=>{
                    console.log("response after successful axios put resquest-->", res);
                    
                    // if response gets an error when submitting we do not want to redirect, we want to display err msgs
                    if(res.data.err){
                        //store errors object from backend into a front end state variable to display on page 
                            setValidationErrors(res.data.err.errors)
                            console.log(res.data.err.errors);
                            
                    } else { // form is successful NO ERRORS Redirect to home route
                        console.log("Data has been successfully sent to database");
                        history.push("/")
                            
                    }
            })
            .catch(err=>{
                    console.log("Error Occured -->",err);
            })
    }



    return (
        <div className="container-xl">
        <Link className="m-2 p-2 btn btn-primary float-right" to="/" >Home</Link>
        <br />
        <br />
<hr />
                <h4 className="text-center">Update <u><b>{onePet.name} The {onePet.type}! </b></u></h4>

                <form onSubmit={submitHandler} action="">
                    <div className="form-group">
                        <label htmlFor="">Pet Name:</label>
                        <input onChange={changeHandler} type="text" name="name" id="" className="form-control" value={onePet.name} />

                        <p className="text-danger"> { validationErrors.name? validationErrors.name.message : "" }  </p>

                    </div>
                    <div className="form-group">
                        <label htmlFor="">Pet Type:</label>
                        <input onChange={changeHandler} type="text" name="type" id="" className="form-control" value={onePet.type}/>

                        <p className="text-danger"> {validationErrors.type?.message}  </p>

                    </div>
                    <div className="form-group">
                        <label htmlFor=""> Pet Description:</label>
                        <input onChange={changeHandler} type="text" name="description" id="" className="form-control" value={onePet.description}/>

                        <p className="text-danger"> {validationErrors.description?.message}  </p>

                    </div>
                            <h6>Pet Skills (Optional)</h6>
                    <div className="form-group">
                        <label htmlFor="">Skill 1:</label>
                        <input onChange={changeHandler} type="text" name="skill1" id="" className="form-control" value={onePet.skill1}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Skill 2:</label>
                        <input onChange={changeHandler} type="text" name="skill2" id="" className="form-control" value={onePet.skill2}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Skill 3:</label>
                        <input onChange={changeHandler} type="text" name="skill3" id="" className="form-control" value={onePet.skill3}/>
                    </div>
                  

                    <input className="btn btn-success" type="submit" value="Update Pet" />


                </form>
<hr />
        </div>
    )
}

export default EditPet;
