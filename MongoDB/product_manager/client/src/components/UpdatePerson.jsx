import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";

const UpdatePerson = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(null);
    const [description, setDescription] = useState('');

    const history = useHistory();
    let [formErrors, setFormErrors] = useState({});
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/people/' + id)
            .then(res => {
                console.log(res)
                setTitle(res.data.results.title);
                setPrice(res.data.results.price);
                setDescription(res.data.results.description);
            })
    }, []);
    
    const updatePerson = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/people/' + id, {
            title,
            price,
            description
        } )
            .then(res => { 
                //console.log("bla bla", res)
                if(res.data.error){
                    setFormErrors(res.data.error.errors);
                }else{
                    console.log(res)
                    history.push(`/`)
                }
            })
            .catch(err => console.error(err));
    }

    const deletePerson = (personId) => {
        axios.delete('http://localhost:8000/api/people/' + personId)
            .then(res => {
                console.log(res)
                history.push(`/`)
                // setpersonList(personList.filter(p => p._id != personId))
            })
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            <h1>Update a Person</h1>
            <form onSubmit={updatePerson}>
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    name="firstName" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>{formErrors.title?.message}</p>
                <p>
                    <label>Price</label><br />
                    <input type="text" 
                    name="lastName"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>{formErrors.age?.message}</p>
                <p>
                    <label>Description</label><br />
                    <input type="text" 
                    name="lastName"
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <p>{formErrors.description?.message}</p>
                <input type="submit" />
                <button onClick={(e)=>{deletePerson(id)}}>Delete</button>
            </form>
        </div>
    )
}
    
export default UpdatePerson;

