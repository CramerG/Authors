import React, { useState, useEffect } from 'react';
import { InputLabel, OutlinedInput } from '@material-ui/core';
import axios from 'axios';
import { navigate } from '@reach/router';

const AuthorForm = props => {
    const [name, setName] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(  () => {
        axios.get("http://localhost:8000/api/authors/" + props.id)
            .then(res => { 
                setName(res.data.name);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, []);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        props.callback(name, props.id);
    }

    return(
        <form onSubmit={onSubmitHandler}>          
                <InputLabel>Author Name:</InputLabel>
                {loaded && <OutlinedInput type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/> }                      
            <br/>
            <OutlinedInput type="button" value="Cancel" onClick={()=>{navigate('/authors/')}}/>
            <OutlinedInput type="submit"/>

        </form>
    );
}

export default AuthorForm;