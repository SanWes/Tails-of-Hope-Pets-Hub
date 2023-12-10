import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useHistory, Link } from "react-router-dom";


const ShowOnePet = () => {

    const [onePet, setOnePet] = useState([])

    const {petId} = useParams()
    const history = useHistory();

    
    useEffect( () => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/pets/${petId}/`)
        .then(res=> {
            console.log("****** res is this", res);
            setOnePet(res.data.results)
        })
        .catch(err => console.log("ERRORRRR-->", err))
    }, [petId])


    
    const deleteHandler = (e) => {
        // e.preventDefault()

            axios.delete(`${process.env.REACT_APP_API_URL}/api/pets/delete/${petId}`)
            .then(res=>{
                    console.log("response after successful axios post resquest-->", res);
                    history.push("/");

                    
            })
            .catch(err=>{
                    console.log("Error Occured -->",err);
            })
    }
    

    return (
        <div className="container">
                <Link className="m-2 p-2 btn btn-primary float-right" to="/" >Home</Link>
        <br /><br />
        <br />
            <h5 >Details about: {onePet.name}</h5>

                 <div className="card">
                <div className="card-body bg-light">
                  <h4 className="card-title">
                  <b>Pet Type: </b> <br /> {onePet.type}
                  </h4>
                  <hr />
                  <p className="card-text"><b>Description:</b> <br /> {onePet.description}</p>

                  <hr />
                  <p className="card-text"> <b>Skills: </b> <br /> {onePet.skill1} <br />
                  {onePet.skill2} <br />
                  {onePet.skill3} <br />
                  
                  </p>
                  <hr />

                  <p><button className="btn btn-outline-success btn-lg" onClick={deleteHandler}>Adopt {onePet.name} The {onePet.type} </button></p>

                  <p> <Link className="btn btn-warning m-3" to={location => ({ ...location, pathname: `/pets/edit/${onePet._id}` })}> Edit</Link>      </p>
                

                  
                </div>
              </div>

        </div>

    )



}

export default ShowOnePet