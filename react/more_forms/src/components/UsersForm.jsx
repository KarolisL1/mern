import React, { useState} from "react";

const UsersForm = () => {
    const [users, setUsers] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const changeHandler = (e)=>{
        setUsers({
            ...users,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
        <form>
            <div>
                <label>First Name</label>
                <input type="text" name="firstName" onChange={changeHandler} />
                {
                users.firstName.length<2 && users.firstName.length>0 ? <p>First Name must be at least 2 characters</p> : null
                }
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" name="lastName" onChange={changeHandler} />
                {
                users.lastName.length<2 && users.lastName.length>0 ? <p>Last Name must be at least 2 characters</p> : null
                }
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="email" onChange={changeHandler} />
                {
                users.email.length<5 && users.email.length>0 ? <p>Email must be at least 5 characters</p> : null
                }
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" onChange={changeHandler} />
                {
                users.password.length<8 && users.password.length>0 ? <p>Password must be at least 8 characters</p> : null
                }
            </div>
            <div>
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" onChange={changeHandler} />
                {
                users.password !== users.confirmPassword ? <p>Password and Confirm Password must match</p> : null
                }
            </div>
        </form>
        <p>First Name: {users.firstName}</p>
        <p>Last Name: {users.lastName}</p>
        <p>Email: {users.email}</p>
        <p>Password: {users.password}</p>
        <p>Confirm Password: {users.confirmPassword}</p>
        </>
    )
}

export default UsersForm;