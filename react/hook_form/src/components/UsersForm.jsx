import React, { useState} from "react";

const UsersForm = () => {

    let [Fname, setFname] = useState("");

    let [Lname, setLname] = useState("");

    let [Email, setEmail] = useState("");

    let [Password, setPassword] = useState("");

    let [Cpassword, setCpassword] = useState("");

    return (
        <>
        <form>
            <div>
                <label>First Name</label>
                <input type="text" name="firstName" onChange={(e)=>setFname(e.target.value)} />
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" name="lastName" onChange={(e)=>setLname(e.target.value)}/>
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div>
                <label>Confirm Password</label>
                <input type="password" name="cpassword" onChange={(e)=>setCpassword(e.target.value)}/>
            </div>
        </form>
        <p>First Name: {Fname}</p>
        <p>Last Name: {Lname}</p>
        <p>Email: {Email}</p>
        <p>Password: {Password}</p>
        <p>Confirm Password: {Cpassword}</p>
        </>
    )
}

export default UsersForm;