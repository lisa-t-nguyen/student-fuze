import React from 'react';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Grid2 from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const drawerWidth = 240;

export default class Supports extends React.Component {
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
            <h2 style={{ fontFamily: 'Poppins' }}>Supports</h2>
          </Stack>
        </Box>
        <Box sx={{ borderBottom: 'solid', borderColor: '#4B6869' }} />
        <Box container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginTop: 2, marginLeft: 2, marginRight: 2 }}>
          <Typography variant="h5" sx={{ fontFamily: 'Poppins', color: '#006875', fontWeight: 'bolder' }}>7th Grade 2022-2023</Typography>
          <Typography variant="h7" sx={{ fontFamily: 'Poppins', fontWeight: 'bolder' }}>Supports History</Typography>
          <Grid2>
            <TextField
              id="outlined-helperText"
              label="Date"
              defaultValue="Notes"
              helperText="Submitted by:"
              sx={{ marginTop: 3, width: 355 }}
            />
          </Grid2>
          <Grid2>
            <TextField
              id="outlined-helperText"
              label="Date"
              defaultValue="Notes"
              helperText="Submitted by:"
              sx={{ marginTop: 3, width: 355 }}
            />
          </Grid2>
        </Box>
        <Box container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginTop: 6, marginLeft: 2, marginRight: 2 }}>
          <Typography variant="h5" sx={{ fontFamily: 'Poppins', color: '#006875', fontWeight: 'bolder' }}>8th Grade 2023-2024</Typography>
          <Typography variant="h7" sx={{ fontFamily: 'Poppins', fontWeight: 'bolder' }}>Supports History</Typography>
          <Grid2>
            <TextField
              id="outlined-helperText"
              label="Date"
              defaultValue="Notes"
              helperText="Submitted by:"
              sx={{ marginTop: 3, width: 355 }}
            />
          </Grid2>
          <Grid2>
            <TextField
              id="outlined-helperText"
              label="Date"
              defaultValue="Notes"
              helperText="Submitted by:"
              sx={{ marginTop: 3, width: 355 }}
            />
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
