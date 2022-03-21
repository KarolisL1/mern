import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
    Link
} from "react-router-dom";

const AllPerson = () => {

    const [personList, setpersonList] = useState([]);


    useEffect(()=>{
        axios.get("http://localhost:8000/api/people")
            .then(res=>{
                console.log("response is this-->",res.data.results)
                setpersonList(res.data.results);
            })
            .catch(err=>{
                console.log("errr", err)
            })
    },[])


    return (
        <div>
            <h2>All the ninjas below</h2>
            {
                personList.map((ninjaObj)=>{
                    return(
                        <div key={ninjaObj._id}>
                            <h3><Link to={`/api/people/${ninjaObj._id}`}>{ninjaObj.title}</Link></h3>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default AllPerson;