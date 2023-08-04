import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';



const CovidTable = () => {
    let [state, setState] = useState([])
    let covid = ()=> {
        axios.get("https://data.covid19india.org/data.json")
        .then(res => {setState(res.data.statewise)})
    }
    useEffect(()=>{
        covid()
    } , [])

    const columns = [
      { id: 'states', label: 'States', minWidth: 100},
      {
        id: 'active',
        label: 'Active',
        minWidth: 100,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
      },
      {
        id: 'confirmed',
        label: 'Confirmed',
        minWidth: 100,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
      },
      {
        id: 'deaths',
        label: 'Deaths',
        minWidth: 100,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
      },
      {
        id: 'recovered',
        label: 'Recovered',
        minWidth: 100,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
      }
      
    ];
    
    function createData(states, active, confirmed, deaths, recovered) {
      return { states, active, confirmed, deaths, recovered};
    }
   
    const rows = 
      state.map((elem,i)=>{
        return createData(`${elem.state}`, `${elem.active}`, `${elem.confirmed}`,`${elem.deaths}`,`${elem.recovered}`)       
      })
    
     
    
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
   
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '80%', overflow: 'hidden', mt : 20 , ml : 20}}>

      {
        state?.length === 0 ? 
        <div class="loader"></div>
        : 
        
        <>
        <TableContainer sx={{ maxHeight: 450}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5,10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
        </>
      }

      
    </Paper>
  );
}
export default CovidTable