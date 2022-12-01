import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GradingIcon from '@mui/icons-material/Grading';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DescriptionIcon from '@mui/icons-material/Description';
import {
  ListItemIcon
} from '@mui/material';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
const format = require('date-fns/format');

const drawerWidth = 240;

function Navigation(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Code for Dialog/Modal
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  // Code for Search function when submitting in text field

  const [name, setName] = useState('');
  const [students, setStudents] = useState([]);

  const handleSearch = event => {
    fetch(`/api/students/?name=${name}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => {
        setStudents(data);
      });
    setOpen(true);
  };

  // Code for table within modal/dialog pop-up
  // Code for navigation drawer

  const drawer = (
    <div>
      <Toolbar/>
      <List>
        <Paper
          component="form"
          sx={{ ml: 1.5, p: '2px 4px', display: 'flex', alignItems: 'center', width: 210 }}
        >
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleSearch}>
            <SearchIcon />
          </IconButton>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle sx={{ fontFamily: 'Poppins', fontWeight: 'bolder' }}>Search Results</DialogTitle>
            <DialogContent>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650, fontFamily: 'Poppins' }} size="small" aria-label="a dense table">
                  <TableHead sx={{ fontFamily: 'Poppins', fontWeight: 'bolder' }}>
                    <TableRow sx={{ fontFamily: 'Poppins', fontWeight: 'bolder' }}>
                      <TableCell align="center" sx={{ fontFamily: 'Poppins', fontWeight: 'bolder' }}>First Name</TableCell>
                      <TableCell align="center" sx={{ fontFamily: 'Poppins', fontWeight: 'bolder' }}>Last Name</TableCell>
                      <TableCell align="center" sx={{ fontFamily: 'Poppins', fontWeight: 'bolder' }}>Student ID</TableCell>
                      <TableCell align="center" sx={{ fontFamily: 'Poppins', fontWeight: 'bolder' }}>Date of Birth</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {students.map(row => (
                      <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell align="center" sx={{ fontFamily: 'Poppins', fontWeight: 'bolder' }}>{row.firstName}</TableCell>
                        <TableCell align="center" sx={{ fontFamily: 'Poppins', fontWeight: 'bolder' }}>{row.lastName}</TableCell>
                        <TableCell align="center" sx={{ fontFamily: 'Poppins', fontWeight: 'bolder' }}>{row.studentId}</TableCell>
                        <TableCell align="center" sx={{ fontFamily: 'Poppins', fontWeight: 'bolder' }}>{format(row.dateOfBirth, 'P')}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </DialogContent>
            <DialogActions>
              <Button sx={{ fontFamily: 'Poppins', fontWeight: 'bolder' }} onClick={handleClose}>Ok</Button>
            </DialogActions>
          </Dialog>
          <InputBase
            sx={{ ml: 0, flex: 1, fontFamily: 'Poppins', fontWeight: 'bolder' }}
            placeholder="Search for student"
            inputProps={{ 'aria-label': 'search for student' }}
            onChange={e => setName(e.target.value)}
            name="name"
            value={name}
          />
        </Paper>
        <h1 style={{ fontFamily: 'Poppins', paddingLeft: 12 }}>Navigation Menu</h1>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#addstudent">
            <ListItemIcon>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary="Add a student" href="#addstudent"/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#attendance">
            <ListItemIcon>
              <CalendarMonthIcon />
            </ListItemIcon>
            <ListItemText primary="Attendance" href="#attendance" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#demographics">
            <ListItemIcon>
              <PermIdentityIcon />
            </ListItemIcon>
            <ListItemText primary="Demographics" href="#demographics" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#grades">
            <ListItemIcon>
              <GradingIcon />
            </ListItemIcon>
            <ListItemText primary="Grades" href="#grades"/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#notes">
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="Notes" href="#notes"/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#referrals">
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="Referrals" href="#referrals" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#supports">
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="Supports" href="#supports" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        style={{ backgroundColor: '#4B6869' }}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" style={{ fontFamily: 'Poppins', fontWeight: 'bolder', letterSpacing: 2, fontSize: 30 }}>
            Student Fuze
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
       />
    </Box>
  );
}
export default Navigation;
