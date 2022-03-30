import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory, Link } from "react-router-dom";

const EditAuthor = () => {
    const { id } = useParams();
    const [name, setName] = useState('');

    const history = useHistory();
    let [formerrors, setFormErrors] = useState({});
    let [wrongId, setWrongId] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
        .then(res => {
            if(res.data.results == null){
                setWrongId(!wrongId);
            }else{
                console.log(res)
                setName(res.data.results.name);
            }
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    const updateAuthor = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/edit/${id}`, {
            name
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
    return (
        <>
        {(wrongId)? 
            <div>
                <p>We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database</p>
                <Link to={"/new"}>Add an author?</Link>
            </div> 
            //else starts here
            : <div>    
                <h1>Favorite authors</h1>
                <Link to={"/"}>Home</Link>
                <p>Edit this author:</p>
                <div className="container">
                    <form onSubmit={updateAuthor}>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                            <input type="name" className="form-control" id="inputEmail3" onChange={(e) => setName(e.target.value)} value={name}/>
                            <p>{formerrors.name?.message}</p>
                            </div>
                        </div>
                        <Link to={"/"} className='btn btn-secondary'>Cancel</Link>
                        <div className="form-group">
                            <div className="col-sm-10 offset-sm-2">
                            <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        }
    </>
    )
}
export default EditAuthor;