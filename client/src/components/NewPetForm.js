import axios from 'axios';
import React, {useState} from 'react';
import { useHistory, Link } from "react-router-dom";


const NewPetForm = () => {
    
    let [formInfo, setFormInfo] = useState({
        name: null,
        type: null,
        description: null,
        skill1: null,
        skill2: null,
        skill3: null,
    })
    
    const history = useHistory();

    let [validationErrors, setValidationErrors] = useState({})



    const changeHandler = (e) => {
        console.log("Changing something");
        console.log(e.target.name, e.target.value);

            setFormInfo({
                ...formInfo,
                [ e.target.name]: e.target.value
            })
        
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("submitted with this info -->", formInfo);

        axios.post("http://server-pet-store.up.railway.app/api/pets", formInfo)

            .then(res=>{
                    console.log("response after successful axios post resquest-->", res);
                    

                    // if response gets an error when submitting we do not want to redirect, we want to display err msgs
                    if(res.data.err){
                    //store errors object from backend into a front end state variable to display on page 
                    console.log(res.data.err.errors);
                        setValidationErrors(res.data.err.errors)
                        
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
            <div className="container">
                <Link className="m-2 p-2 btn btn-primary float-right" to="/" >Home</Link>
        <br /><br />
                <h4 className="m-2">Know a pet needing a home! <br />
                Tell us more about our new friend!</h4>
<hr />
                <form onSubmit={submitHandler} action="">
                    <div className="form-group">
                        <label htmlFor="">Pet Name:</label>
                        <input onChange={changeHandler} type="text" name="name" id="" className="form-control" />

                        {/* Validation Message  */}
                        <p className="text-danger"> { validationErrors.name?.message }  </p>

                    </div>
                    <div className="form-group">
                        <label htmlFor="">Pet Type:</label>
                        <input onChange={changeHandler} type="text" name="type" id="" className="form-control" />

                        <p className="text-danger"> {validationErrors.type?.message}  </p>

                    </div>
                    <div className="form-group">
                        <label htmlFor=""> Pet Description:</label>
                        <input onChange={changeHandler} type="text" name="description" id="" className="form-control" />

                        <p className="text-danger"> {validationErrors.description?.message}  </p>
                    </div>
                            <h6>Pet Skills (Optional)</h6>
                    <div className="form-group">
                        <label htmlFor="">Skill 1:</label>
                        <input onChange={changeHandler} type="text" name="skill1" id="" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Skill 2:</label>
                        <input onChange={changeHandler} type="text" name="skill2" id="" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Skill 3:</label>
                        <input onChange={changeHandler} type="text" name="skill3" id="" className="form-control" />
                    </div>
                  

                    <input className="btn btn-primary" type="submit" value="Shelter Pet" />


                </form>
                <hr />
            </div>
        )




}



export default NewPetForm;