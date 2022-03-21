import React, {useState} from 'react';
import axios from 'axios';

const PersonForm = () => {

    let [title, setTitle] = useState("");
    let [price, setPrice] = useState(null);
    let [description, setDescription] = useState("");

    const createProduct = (e) => {
        e.preventDefault();
        let newProduct = { title, price, description };
        
        axios.post('http://localhost:8000/api/people', newProduct)
            .then(res => {
                console.log(res);
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
                <label>Price</label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                <label>Description</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                <input type="submit" value="Create Product" />
            </form>
        </div>
    )
}

export default PersonForm;