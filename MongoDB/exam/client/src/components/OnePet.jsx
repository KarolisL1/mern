import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { useHistory, Link } from "react-router-dom";

const OnePet = () => {
    const {id} = useParams();
    const [info, setInfo] = useState({})
    let history = useHistory();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res=>{
                console.log("res->", res)
                setInfo(res.data.results);
            })
            .catch(err=>{
                console.log("err->", err)
            })
    }, [])

    const deletePet = (petId) => {
        axios.delete('http://localhost:8000/api/pets/delete/' + petId)
            .then(res => {
                // setAuthors(authors.filter(p => p._id != personId))
                console.log("res->", res)
                history.push(`/`)
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <Link to={"/"}>back to home</Link>
            <p>Details about: {info.name}</p>
            <button onClick={(e)=>{deletePet(id)}}>Adopt {info.name}</button>
            <div className="container">
                <label>Pet type: {info.type}</label><br/>
                <label>Pet description: {info.description}</label><br/>
                <label>Pet skills: {info.skill1}<br/> {info.skill2}<br/> {info.skill3}</label>
            </div>
        </div>
    );

}
export default OnePet