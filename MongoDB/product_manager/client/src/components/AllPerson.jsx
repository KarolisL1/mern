import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const AllPerson = (props) => {

    const [personList, setpersonList] = useState([]);

    const deletePerson = (personId) => {
        // console.log("testing")
        axios.delete('http://localhost:8000/api/people/' + personId)
            .then(res => {
                setpersonList(personList.filter(p => p._id != personId))
            })
            .catch(err => console.error(err));
    }

    useEffect(()=>{
        axios.get("http://localhost:8000/api/people")
            .then(res=>{
                console.log("response is this-->",res.data.results)
                setpersonList(res.data.results);
            })
            .catch(err=>{
                console.log("errr", err)
            })
    },[props.formSubmitted])

    return (
        <div>
            <h2>All the ninjas below</h2>
            {
                personList.map((ninjaObj)=>{
                    return(
                        <div key={ninjaObj._id}>
                            <h3><Link to={`/people/${ninjaObj._id}`}>{ninjaObj.title}</Link></h3>
                            <button onClick={(e)=>{deletePerson(ninjaObj._id)}}>
                                Delete
                            </button>
                            <br />
                            <Link to={`/people/${ninjaObj._id}/edit`}>Edit</Link>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    );
};

export default AllPerson;