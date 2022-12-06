import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    table: {
      // minWidth: 650,
    },
});

function TableData ({data}){
    const classes = useStyles();
    console.log("ruchi",data)

    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone No</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {data && data.map((item,id) => (
              <TableRow key={item.id}>
                <TableCell component="th" scope="row">
                  {item.name.value}
                </TableCell>
                <TableCell align="right">{item.age.value}</TableCell>
                <TableCell align="right">{item.email.value}</TableCell>
                <TableCell align="right">{item.phone_no.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}
  
export default TableData;