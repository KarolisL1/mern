import React, {useState} from 'react';
import axios from 'axios';

const PersonForm = (props) => {

    let [title, setTitle] = useState("");
    let [price, setPrice] = useState(undefined);
    let [description, setDescription] = useState("");

    let [formErrors, setFormErrors] = useState({});

    const createProduct = (e) => {
        e.preventDefault();
        let newProduct = { title, price, description };
        
        axios.post('http://localhost:8000/api/people', newProduct)
            .then(res => {
                console.log(res);
                if(res.data.error){
                    setFormErrors(res.data.error.errors);
                }
                else{
                    props.setFormSubmitted(!props.formSubmitted);
                    setTitle("");
                    setPrice(0);
                    setDescription("");
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={createProduct}>
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <p>{formErrors.title?.message}</p>
                <label>Price</label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                <p>{formErrors.price?.message}</p>
                <label>Description</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                <p>{formErrors.description?.message}</p>
                <input type="submit" value="Create Product" />
            </form>
        </div>
    )
}

export default PersonForm;