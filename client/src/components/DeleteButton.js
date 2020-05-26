import React from 'react';
import { Button } from '@material-ui/core';
import axios from 'axios';

const DeleteButton = props => {
    const onClickHandler = () => {
        axios.delete("http://localhost:8000/api/authors/" + props.id)
            .then(res => console.log(res));
        props.callback(props.id);
    };
    
    return(
        <Button variant="contained" color="secondary" onClick={onClickHandler}>Delete</Button>
    )
}

export default DeleteButton;