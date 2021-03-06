import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const AuthorsForm = (props) => {
    let [name, setName] = useState("");
    let [formerrors, setFormErrors] = useState({});

    const history = useHistory();

    const createAuthor = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors/new', {name: name})
        .then(res => {
            console.log(res);
            if(res.data.error){
                setFormErrors(res.data.error.errors);
            }else{
                setName("");
                history.push("/");
            }
        })
        .catch(err => {
            console.log(err);
        });
    }
    return (
        <>
            <div className="container">
                <h1>Favorite authors</h1>
                <Link to={"/"} className="btn btn-primary btn-md active">Home</Link>
                <p>Add a new author:</p>
                <div className="container">
                    <form onSubmit={createAuthor}>
                        <div className="form-group row">
                            <label for="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                                <input type="name" className="form-control" id="inputEmail3" onChange={(e) => setName(e.target.value)} value={name}/>
                                <p>{formerrors.name?.message}</p>
                            </div>
                        </div>
                        <Link to={"/"} className='btn btn-secondary m-2'>Cancel</Link>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AuthorsForm;