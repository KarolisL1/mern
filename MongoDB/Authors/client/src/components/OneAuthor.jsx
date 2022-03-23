import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';

const OneAuthor = () => {
    const {id} = useParams();
    const [info, setInfo] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/author/${id}`)
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
            <h1>View Page</h1>
            <p>{info.name}</p>
        </div>
    );
}
export default OneAuthor;