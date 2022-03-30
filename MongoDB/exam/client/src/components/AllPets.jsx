import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const AllPets = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
        .then(res => {
            setPets(res.data.results.sort((a, b) => {
                if (a.type.toUpperCase() < b.type.toUpperCase()) {
                    return -1;
                }
                if (a.type.toUpperCase() > b.type.toUpperCase()) {
                    return 1;
                }
                return 0;
            }));
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <div className="container">
            <Link to={"/pets/new"}>add a pet to the shelter</Link>
            <p>These pets are looking for a good home</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {pets.map(pet => (
                        <tr key={pet._id}>
                            <td>{pet.name}</td>
                            <td>{pet.type}</td>
                            <td>
                                <Link to={`/pets/${pet._id}`} className="btn btn-primary">details</Link>
                                |
                                <Link to={`/pets/${pet._id}/edit`} className="btn btn-warning">edit</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


export default AllPets;