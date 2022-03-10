import React, {useState} from "react";

const PersonCard = (props) => {

    return <>
    <div>
        <h1>{props.lname}, {props.fname}</h1>
        <h3>Age: {props.age}</h3>
        <h4>Hair Color: {props.hairColor}</h4>
    </div>
    </>
}

export default PersonCard;