import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';

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
      <CssBaseline>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <div>
            <Box flex={4} p={{ xs: 0, md: 4 }} sx={{ borderBottom: 3, borderColor: '#4B6869' }}>
              <Stack direction="row" spacing={2} marginLeft={5}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <h1 style={{ fontFamily: 'Poppins' }}>Add a new student</h1>
              </Stack>
            </Box>
            <form onSubmit={this.handleSubmit}>
              <Box>
                <TextField id="outlined-search" label="First Name" type="text" onChange={this.handleFirstNameChange} required/>
                <TextField id="outlined-search" label="Last Name" type="text" onChange={this.handleLastNameChange} required/>
                <TextField id="outlined-search" label="Date of Birth" type="date" onChange={this.handleDobChange} required/>
                <TextField id="outlined-search" label="Grade" type="text" onChange={this.handleGradeChange} required/>
                <TextField id="outlined-search" label="Year Start" type="text" onChange={this.handleYearStart} required/>
                <TextField id="outlined-search" label="Year End" type="text" onChange={this.handleYearEnd} required/>
              </Box>
              <Box sx={{ position: 'bottom' }}>
                <Stack direction="row" spacing={1}>
                  <Button sx={{ fontFamily: 'Poppins', fontWeight: 'bolder', color: '#006875', border: 2, borderRadius: 15 }} onClick={this.handleSubmit}>Submit</Button>
                </Stack>
              </Box>
            </form>
          </div>
        </Box>
      </CssBaseline>
    );
  }
}
