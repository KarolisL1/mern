import React, {useState} from 'react';
import axios from 'axios';
import { useHistory, Link } from "react-router-dom";

const NewPet = () => {
    let [name, setName] = useState('');
    let [type, setType] = useState('');
    let [description, setDescription] = useState('');
    let [skill1, setSkill1] = useState('');
    let [skill2, setSkill2] = useState('');
    let [skill3, setSkill3] = useState('');

    let [formerrors, setFormErrors] = useState({});

    let history = useHistory();

    const createPet = (e) => {
        e.preventDefault();
        let newPet = { name, type, description, skill1, skill2, skill3 };
        axios.post('http://localhost:8000/api/pets/new', newPet)
        .then(res => {
            console.log(res);
            if(res.data.error){
                setFormErrors(res.data.error.errors);
            }else{
                setName("");
                setType("");
                setDescription("");
                setSkill1("");
                setSkill2("");
                setSkill3("");
                history.push("/");
            }
        })
        .catch(err => {
            console.log(err);
        });
    }
    return (
        <>
            <Link to={"/"}>back to home</Link>
            <p>Know a pet needing a home?</p>
            <div className="container">
                <form onSubmit={createPet}>
                    <div className="form-group row">
                        <label for="inputEmail3" className="col-sm-2 col-form-label">Pet Name</label>
                        <div className="col-sm-10">
                        <input type="name" className="form-control" id="inputEmail3" onChange={(e) => setName(e.target.value)} value={name}/>
                        <p>{formerrors.name?.message}</p>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputEmail3" className="col-sm-2 col-form-label">Pet Type</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputEmail3" onChange={(e) => setType(e.target.value)} value={type}/>
                        <p>{formerrors.type?.message}</p>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputEmail3" className="col-sm-2 col-form-label">Pet Description</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputEmail3" onChange={(e) => setDescription(e.target.value)} value={description}/>
                        <p>{formerrors.description?.message}</p>
                        </div>
                    </div>
                    <label>Skills (Optional)</label>
                    <div className="form-group row">
                        <label for="inputEmail3" className="col-sm-2 col-form-label">Skill 1</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputEmail3" onChange={(e) => setSkill1(e.target.value)} value={skill1}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputEmail3" className="col-sm-2 col-form-label">Skill 2</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputEmail3" onChange={(e) => setSkill2(e.target.value)} value={skill2}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputEmail3" className="col-sm-2 col-form-label">Skill 3</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputEmail3" onChange={(e) => setSkill3(e.target.value)} value={skill3}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-10 offset-sm-2">
                        <button type="submit" className="btn btn-primary">Add Pet</button>
                        </div>
                    </div>
                </form>
            </div>
        </>

    )
}

export default NewPet;