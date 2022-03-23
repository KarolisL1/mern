import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const AllAuthors = (props) => {

    const [authors, setAuthors] = useState([]);

    const deleteAuthor = (personId) => {
        axios.delete('http://localhost:8000/api/authors/delete/' + personId)
            .then(res => {
                setAuthors(authors.filter(p => p._id != personId))
            })
            .catch(err => console.error(err));
    }
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
        .then(res => {
            console.log(res)
            setAuthors(res.data.results);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);
    
    return (
        <div className="container">
            <h1>Favorite Authors</h1>
            <Link to={"/new"}>Add an author</Link>
            <p>We have quotes by:</p>
            <table className="table">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map(author => (
                        <tr key={author._id}>
                            <td>{author.name}</td>
                            <td>
                                <Link to={`/author/${author._id}`} className="btn btn-primary">View</Link>
                                <Link to={`/edit/${author._id}`} className="btn btn-warning">Edit</Link>
                                <button onClick={(e)=>{deleteAuthor(author._id)}}>
                                Delete
                                </button>
                                {/* <Link to={`/authors/${author._id}/delete`} className="btn btn-danger">Delete</Link> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AllAuthors;