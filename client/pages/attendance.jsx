import React from 'react';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid2 from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';

const drawerWidth = 240;

export default class Attendance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0
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
            <h2 style={{ fontFamily: 'Poppins' }}>Attendance</h2>
          </Stack>
        </Box>
        <Box sx={{ borderBottom: 'solid', borderColor: '#4B6869' }} />
        <Box container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginTop: 2, marginLeft: 2, marginRight: 2 }}>
          <Typography variant="h5" sx={{ fontFamily: 'Poppins', color: '#006875', fontWeight: 'bolder' }}>7th Grade</Typography>
          <Typography variant="h7" sx={{ fontFamily: 'Poppins', fontWeight: 'bolder' }}>Attendance History</Typography>
          <Grid2>
            <TextField
              id="outlined-helperText"
              label="2022-2023"
              defaultValue="Days Present"
              helperText="Days Present / 190 School Days"
              sx={{ marginTop: 3, width: 355 }}
            />
          </Grid2>
        </Box>
        <Box container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginTop: 10, marginLeft: 2, marginRight: 2 }}>
          <Typography variant="h5" sx={{ fontFamily: 'Poppins', color: '#006875', fontWeight: 'bolder' }}>8th Grade</Typography>
          <Typography variant="h7" sx={{ fontFamily: 'Poppins', fontWeight: 'bolder' }}>Attendance History</Typography>
          <Grid2>
            <TextField
              id="outlined-helperText"
              label="2023-2024"
              defaultValue="Days Present"
              helperText="Days Present / 190 School Days"
              sx={{ marginTop: 3, width: 355 }}
            />
          </Grid2>
          <Grid2 sx={{ marginTop: 6 }}>
            <Button variant="contained" sx={{ fontFamily: 'Poppins', fontWeight: 'bolder', color: 'FFFFFF', border: 2, borderRadius: 15, backgroundColor: '#4B6869', '&:hover': { backgroundColor: 'white', color: '#4B6869' } }}>Edit</Button>
            <Button variant="contained" sx={{ fontFamily: 'Poppins', fontWeight: 'bolder', color: 'FFFFFF', border: 2, borderRadius: 15, backgroundColor: '#4B6869', '&:hover': { backgroundColor: 'white', color: '#4B6869' } }}>Submit</Button>
          </Grid2>
        </Box>
      </Box>
    );
  }
}
