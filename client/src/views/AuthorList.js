import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TableContainer, Paper, Table, TableRow, TableHead, TableCell, TableBody } from '@material-ui/core';
import EditButton from '../components/EditButton';
import DeleteButton from '../components/DeleteButton';
import { navigate, Link } from '@reach/router';

const AuthorList = props => {
    const [authors, setAuthors] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect( () => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                setAuthors(res.data);
                setLoaded(true);
            })
            .catch(res => {
                console.log(res);
            });
    }, [authors]);

    const removeFromDOM = authorID => {
        setAuthors(authors.filter(author => author._id != authorID));
    };

    return(
        <div>
            <Link to="/authors/add">Add Author</Link>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Author</TableCell>
                            <TableCell>Actions Available</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {loaded && authors.map( (author, idx) => {
                            return(
                                <TableRow key={idx}>
                                    <TableCell>{author.name}</TableCell>
                                    <TableCell>
                                        <EditButton authorId={author._id}/>
                                        <DeleteButton id={author._id} callback={removeFromDOM}/>
                                        </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default AuthorList;