import React, {useState, useEffect} from 'react';
import axios from 'axios';

import { Link } from "react-router-dom";



const AllPets = () => {

    const [allPets, setAllPets] = useState([])



    useEffect( () => {
        axios.get("http://localhost:8000/api/pets")
        .then(res=> {
            console.log("****** res is this", res);
            setAllPets(res.data.results)
        })
        .catch(err => console.log("ERRORRRR-->", err))
    }, [])



    
    return (
        <div className="container-xl">
<br /><br />
            <h3 className="m-1 p-3">These pets are looking for a good home</h3>
<br />

    <table className="table table-bordered">
        <thead className="thead-dark">
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Type</th>
                <th>Actions</th>
                </tr>
        </thead>
            <tbody>
            
            {allPets.map( (pet, i) => {
                return ( 
                    <>
            <tr key = {i}>
                <th  scope="row">{i + 1}</th>
                    <td>{pet.name} </td>
                    <td>{pet.type} </td>
                    <td> 
                    <Link className="btn btn-outline-info" to={location => ({ ...location, pathname: `/pets/show/${pet._id}` })}> details </Link> | <Link className="btn btn-outline-warning" to={location => ({ ...location, pathname: `/pets/edit/${pet._id}` })}> edit </Link> 
                    </td>
            </tr>
                </>
              )
            })}
        
            </tbody>
        </table>

        </div>

    )


}

export default AllPets;