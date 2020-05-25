import React from 'react';
import { Button } from '@material-ui/core';
import { navigate } from '@reach/router';

const EditButton = props => {
        
    return(
        <Button variant="contained" color="primary" onClick={ ()=> {navigate("/authors/"+props.authorId)}}>Edit</Button>
    );
};

export default EditButton;