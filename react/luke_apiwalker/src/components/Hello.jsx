import React, {useState} from "react";
import { useHistory } from "react-router-dom";

const Hello = () => {

    // let [search, setSearch] = useState({
    //     type: "",
    //     id: ""
    // });

    let [name, setName] = useState("people");
    let [id, setId] = useState("");

    const history = useHistory();

    const submitHandler = (e)=>{
        // e.preventDefault(); //prevents from the form submission from reloading the whole window
        // type = e.target.value
        // if(selectedColor.length>0){
        //if the form has info for color also filled out, then redirect to  /people/id/selectedColor -> eg: /people/23/red
        history.push(`/${name}/${id}`)
        // }
        // else{
        //     //otherwise redirect to /people/${id}
        //     history.push(`/people/${id}` )

        // }

    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <label>Search for:</label>
                <select name="type" onChange={(e)=>setName(e.target.value)}>
                    <option >people</option>
                    <option >planets</option>
                </select>
                {/* <input type="text" name="type" onChange={(e)=>setName(e.target.value)}/> */}
                <label>ID:</label>
                <input type="number" name="id" onChange={(e)=>setId(e.target.value)}/>
                <button type="submit">Search</button>
            </form>
        </>
    );
}

export default Hello;