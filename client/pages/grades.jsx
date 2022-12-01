import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Grid2 from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const drawerWidth = 240;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#4B6869',
    color: theme.palette.common.white,
    fontFamily: 'Poppins',
    fontWeight: 'Bolder'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: 'Bolder'
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}));

const rows = [
  createData('Mrs. Puff', 'Boating School', 'F'),
  createData(),
  createData(),
  createData(),
  createData()
];

function createData(name, courses, grades) {
  return { name, courses, grades };
}

export default class Grades extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teacher: '',
      courses: '',
      grade: ''
    };
  }

  render() {
    return (
      <Box sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` }
      }}
      >
        <Box sx={{ marginLeft: 3, marginTop: 3 }}>
          <Stack direction="row" spacing={2} sx={{ display: 'flex', alignItems: 'center', marginBottom: 0.5 }}>
            <AccountCircleIcon sx={{ fontSize: 45, color: 'gray' }} />
            <h2 style={{ fontFamily: 'Poppins' }}>Grades</h2>
          </Stack>
        </Box>
        <Box sx={{ borderBottom: 'solid', borderColor: '#4B6869' }} />
        <Box container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginTop: 2, marginLeft: 2, marginRight: 2 }}>
          <Typography variant="h5" sx={{ fontFamily: 'Poppins', color: '#006875', fontWeight: 'bolder' }}>7th Grade 2022-2023</Typography>
          <Typography variant="h7" sx={{ fontFamily: 'Poppins', fontWeight: 'bolder' }}>Grades History</Typography>
          <Grid2>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Teachers</StyledTableCell>
                    <StyledTableCell>Courses</StyledTableCell>
                    <StyledTableCell>Grades</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell>{row.courses}</StyledTableCell>
                      <StyledTableCell>{row.grades}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid2>
        </Box>
        <Box container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginTop: 6, marginLeft: 2, marginRight: 2 }}>
          <Typography variant="h5" sx={{ fontFamily: 'Poppins', color: '#006875', fontWeight: 'bolder' }}>8th Grade 2023-2024</Typography>
          <Typography variant="h7" sx={{ fontFamily: 'Poppins', fontWeight: 'bolder' }}>Grades History</Typography>
          <Grid2>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Teachers</StyledTableCell>
                    <StyledTableCell>Courses</StyledTableCell>
                    <StyledTableCell>Grades</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell>{row.courses}</StyledTableCell>
                      <StyledTableCell>{row.grades}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid2>
          <Grid2 sx={{ marginTop: 5 }}>
            <Button variant="contained" sx={{ fontFamily: 'Poppins', fontWeight: 'bolder', color: 'FFFFFF', border: 2, borderRadius: 15, backgroundColor: '#4B6869', '&:hover': { backgroundColor: 'white', color: '#4B6869' } }}>Edit</Button>
            <Button variant="contained" sx={{ fontFamily: 'Poppins', fontWeight: 'bolder', color: 'FFFFFF', border: 2, borderRadius: 15, backgroundColor: '#4B6869', '&:hover': { backgroundColor: 'white', color: '#4B6869' } }}>Submit</Button>
          </Grid2>
        </Box>
      </Box>
    );
  }
}
