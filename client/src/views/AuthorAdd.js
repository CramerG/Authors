import React from 'react';
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import { navigate } from '@reach/router';

const AuthorAdd = props => {

    const addAuthor = author => {
        axios.post("http://localhost:8000/api/authors", {name: author})
            .then(res => console.log(res)) 
            .catch(err => console.log(err));
        navigate("/authors/");
    };

    return(
        <div>
            <h2>Add A New Author</h2>
            <AuthorForm callback={addAuthor}/>
        </div>
    );
}

export default AuthorAdd;