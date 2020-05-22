import React from 'react';
import axios from 'axios';
import { TableContainer, Paper, Table, TableRow, TableHead, TableCell } from '@material-ui/core';

const AuthorList = props => {

    return(
        <div>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Author</TableCell>
                            <TableCell>Actions Available</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
        </div>
    );
}

export default AuthorList;