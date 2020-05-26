import React, { useState } from 'react';
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import { navigate } from '@reach/router';

const AuthorAdd = props => {
    const [errors, setErrors] = useState([]);

    const addAuthor = author => {
        axios.post("http://localhost:8000/api/authors", {name: author})
            .then(res => {
                console.log(res);
                navigate("/authors/");
            }) 
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            });
        
    };

    const renderErrors = () => {
        if (errors.length == 0) {
            return(<div></div>);
        } else {
            return(
            errors.map( (err, idx) => <p key={idx}>{err}</p> )
            );
        }
    }

    return(
        <div>
            <h2>Add A New Author</h2>
            {renderErrors()}
            <AuthorForm callback={addAuthor} error={errors}/>
        </div>
    );
}

export default AuthorAdd;