import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid2 from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';

const drawerWidth = 240;

export default class Demographics extends React.Component {
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
            <h2 style={{ fontFamily: 'Poppins' }}>Demographics</h2>
          </Stack>
        </Box>
        <Box sx={{ borderBottom: 'solid', borderColor: '#4B6869' }} />
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginTop: 2, marginLeft: 1, marginRight: 2 }}>
              <Grid2 xs={6}>
                <Grid2>
                  <Typography variant="h6" component="div">
                    Student ID
                  </Typography>
                  <TextField id="standard-basic" label="" variant="standard" placeholder='16500' />  </Grid2>
                <Grid2>
                  <Typography variant="h6" component="div" sx={{ marginTop: 3 }}>
                    First Name
                  </Typography>
                  <TextField id="standard-basic" label="" variant="standard" placeholder='Spongebob' />
                </Grid2>
                <Grid2>
                  <Typography variant="h6" component="div" sx={{ marginTop: 3 }}>
                    Year Start
                  </Typography>
                  <TextField id="standard-basic" label="" variant="standard" placeholder='2022' />
                </Grid2>
              </Grid2>
              <Grid2 xs={6}>
                <Grid2>
                  <Typography variant="h6" component="div" sx={{ }}>
                    Date of Birth
                  </Typography>
                  <TextField id="standard-basic" label="" variant="standard" placeholder='07/14/2010' />
                </Grid2>
                <Grid2>
                  <Typography variant="h6" component="div" sx={{ marginTop: 3 }}>
                    Last Name
                  </Typography>
                  <TextField id="standard-basic" label="" variant="standard" placeholder='Squarepants' />
                </Grid2>
                <Grid2>
                  <Typography variant="h6" component="div" sx={{ marginTop: 3 }}>
                    Year End
                  </Typography>
                  <TextField id="standard-basic" label="" variant="standard" placeholder='2023' />
                </Grid2>
                <Grid2>
                  <Typography variant="h6" component="div" sx={{ marginTop: 3 }}>
                    Grade Level
                  </Typography>
                  <TextField id="standard-basic" label="" variant="standard" placeholder='7' />
                </Grid2>
              </Grid2>
            </Grid2>
          </CardContent>
        </Card>
        <Grid2 sx={{ marginLeft: 2, marginTop: 5 }}>
          <Button variant="contained" sx={{ fontFamily: 'Poppins', fontWeight: 'bolder', color: 'FFFFFF', border: 2, borderRadius: 15, backgroundColor: '#4B6869', '&:hover': { backgroundColor: 'white', color: '#4B6869' } }}>Edit</Button>
          <Button variant="contained" sx={{ fontFamily: 'Poppins', fontWeight: 'bolder', color: 'FFFFFF', border: 2, borderRadius: 15, backgroundColor: '#4B6869', '&:hover': { backgroundColor: 'white', color: '#4B6869' } }}>Delete</Button>
          <Button variant="contained" sx={{ fontFamily: 'Poppins', fontWeight: 'bolder', color: 'FFFFFF', border: 2, borderRadius: 15, backgroundColor: '#4B6869', '&:hover': { backgroundColor: 'white', color: '#4B6869' } }}>Submit</Button>
        </Grid2>
      </Box>
    );
  }
}
