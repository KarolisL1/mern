import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';


const OnePerson = () => {

    const {_id} = useParams();
    const [info, setInfo] = useState({})


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/people/${_id}`)
            .then(res=>{
                console.log("res->", res)
                setInfo(res.data.results);
            })
            .catch(err=>{
                console.log("err->", err)
            })
    }, [])

    return (
        <div>
            <h3>Details about {info.title}</h3>
            <p>{info.price}</p>
            <p>{info.description}</p>
        </div>
    );
};

export default OnePerson;