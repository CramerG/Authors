import React, { useEffect, useState} from 'react';
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import { navigate } from '@reach/router';

const AuthorEdit = props => {
    const updateAuthor = (authorName, id) => {
        axios.put("http://localhost:8000/api/authors/" + id, {name: authorName})
            .then(res => console.log(res));
        navigate("/authors/");
    }

    return(
        <div>
            <h2>Edit this author</h2>
            <AuthorForm id={props.id} callback={updateAuthor}/>
        </div>
    );
}

export default AuthorEdit;