import React, { useState} from 'react';
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import { navigate } from '@reach/router';

const AuthorEdit = props => {
    const [errors, setErrors] = useState([]);

    const updateAuthor = (authorName, id) => {
        axios.put("http://localhost:8000/api/authors/" + id, {name: authorName})
            .then(res => {
                console.log(res)
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
        if (errors.length === 0) {
            return(<div></div>);
        } else {
            return(
            errors.map( (err, idx) => <p key={idx}>{err}</p> )
            );
        }
    }

    return(
        <div>
            <h2>Edit this author</h2>
            {renderErrors()}
            <AuthorForm id={props.id} callback={updateAuthor}/>
        </div>
    );
}

export default AuthorEdit;