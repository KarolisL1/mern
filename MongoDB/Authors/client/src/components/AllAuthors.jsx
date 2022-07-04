import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const AllAuthors = () => {

    const [authors, setAuthors] = useState([]);

    const deleteAuthor = (personId) => {
        axios.delete('http://localhost:8000/api/authors/delete/' + personId)
            .then(res => {
                setAuthors(authors.filter(p => p._id !== personId))
            })
            .catch(err => console.error(err));
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
        .then(res => {
            console.log(res)
            setAuthors(res.data.results.sort((a, b) => {
                if (a.name.toUpperCase() < b.name.toUpperCase()) {
                    return -1;
                }
                if (a.name.toUpperCase() > b.name.toUpperCase()) {
                    return 1;
                }
                return 0;
            }
            ));
        })
        .catch(err => {
            console.log(err);
        });
    }, []);
    
    return (
        <div className="container">
            <h1>Favorite Authors</h1>
            <Link to={"/new"} className="btn btn-primary btn-md active">Add an author</Link>
            {/* <a href="#!" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Add an author</a> */}
            <p>We have quotes by:</p>
            <table className="table w-100">
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
                                <Link to={`/author/${author._id}`} className="btn btn-primary mx-auto m-2">View</Link>
                                <Link to={`/edit/${author._id}`} className="btn btn-warning m-2">Edit</Link>
                                <button className='btn btn-danger' onClick={(e)=>{deleteAuthor(author._id)}}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AllAuthors;