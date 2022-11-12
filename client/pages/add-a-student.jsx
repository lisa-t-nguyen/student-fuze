import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

export default function AddStudents() {
  return (
    <CssBaseline>
      <Container maxWidth="sm">
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' }, height: '100vh'
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <Stack direction="row" spacing={2} marginLeft={5}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <h1 style={{ fontFamily: 'Poppins' }}>Add a new student</h1>
            </Stack>
            <TextField id="outlined-search" label="First Name" type="text" />
            <TextField id="outlined-search" label="Last Name" type="text" />
            <TextField id="outlined-search" label="Date of Birth" type="date" />
            <TextField id="outlined-search" label="Grade" type="number" />
            <TextField id="outlined-search" label="Student ID" type="number" />
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
              <Button>Edit</Button>
              <Button>Delete</Button>
              <Button>Submit</Button>
            </ButtonGroup>
          </div>
        </Box>
      </Container>
    </CssBaseline>
  );
}
