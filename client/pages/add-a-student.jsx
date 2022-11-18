import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2';
// import Container from '@mui/material/Container';

const drawerWidth = 240;

export default class AddStudents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      gradeLevel: '',
      yearStart: '',
      yearEnd: ''
    };
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleDobChange = this.handleDobChange.bind(this);
    this.handleGradeChange = this.handleGradeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleYearStart = this.handleYearStart.bind(this);
    this.handleYearEnd = this.handleYearEnd.bind(this);
  }

  handleFirstNameChange(event) {
    this.setState({ firstName: event.target.value });
  }

  handleLastNameChange(event) {
    this.setState({ lastName: event.target.value });
  }

  handleDobChange(event) {
    this.setState({ dateOfBirth: event.target.value });
  }

  handleGradeChange(event) {
    this.setState({ gradeLevel: event.target.value });
  }

  handleYearStart(event) {
    this.setState({ yearStart: event.target.value });
  }

  handleYearEnd(event) {
    this.setState({ yearEnd: event.target.value });
  }

  handleSubmit(event) {
    fetch('/api/students', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          firstName: data.firstName,
          lastName: data.lastName,
          dateOfBirth: data.dateOfBirth,
          gradeLevel: data.gradeLevel,
          yearStart: data.yearStart,
          yearEnd: data.yearEnd
        });
      });
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
            <h2 style={{ fontFamily: 'Poppins' }}>Add a new student</h2>
          </Stack>
        </Box>
        <Box sx={{ borderBottom: 'solid', borderColor: '#4B6869' }}/>
        <form onSubmit={this.handleSubmit}>
          <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginTop: 2, marginLeft: 2, marginRight: 2 }}>
            <Grid2 xs={6}>
              <TextField id="outlined-search" label="First Name" type="text" onChange={this.handleFirstNameChange} required sx={{ maxWidth: '300px', width: '100%' }} />
            </Grid2>
            <Grid2 xs={6}>
              <TextField id="outlined-search" label="Last Name" type="text" onChange={this.handleLastNameChange} required sx={{ maxWidth: '300px', width: '100%' }}/>
            </Grid2>
            <Grid2 xs={6}>
              <TextField id="outlined-named" InputLabelProps={{ shrink: true }} label="Date of Birth" type="date" onChange={this.handleDobChange} required sx={{ maxWidth: '300px', width: '100%' }}/>
            </Grid2>
            <Grid2 xs={6}>
              <TextField id="outlined-search" label="Grade" type="text" onChange={this.handleGradeChange} required sx={{ maxWidth: '300px', width: '100%' }}/>
            </Grid2>
            <Grid2 xs={6}>
              <TextField id="outlined-search" label="Year Start" type="text" onChange={this.handleYearStart} sx={{ maxWidth: '300px', width: '100%' }}/>
            </Grid2>
            <Grid2 xs={6}>
              <TextField id="outlined-search" label="Year End" type="text" onChange={this.handleYearEnd} required sx={{ maxWidth: '300px', width: '100%' }}/>
            </Grid2>
            <Grid2 sx={{ marginTop: 10 }}>
              <Button variant="contained" sx={{ fontFamily: 'Poppins', fontWeight: 'bolder', color: 'FFFFFF', border: 2, borderRadius: 15, backgroundColor: '#4B6869', '&:hover': { backgroundColor: 'white', color: '#4B6869' } }} onClick={this.handleSubmit}>Submit</Button>
            </Grid2>
          </Grid2>
        </form>
      </Box>
    );
  }
}
