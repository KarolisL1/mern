import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router";

const Api = () => {

    const {type, id} = useParams();

    const [data, setData] = useState([]);

    // const [keys, setKeys] = useState([]);

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${type}/${id}`)
            .then((response) => {
                setData(response.data);
                // setKeys(Object.keys(response.data));
                console.log(response.data);
                // console.log(Object.keys(response.data));
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <h2>{data.name}</h2>            
            <p>Height: {data.height} cm</p>
            <p>Mass: {data.mass} kg</p>
            <p>Hair Color: {data.hair_color}</p>
            <p>Skin Color: {data.skin_color}</p> 
        </>
    )
}

export default Api;