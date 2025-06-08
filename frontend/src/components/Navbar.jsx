import React from 'react'
import {Link} from 'react-router';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Full Stack
          </Typography>
          
          <Button
            variant="contained"
            component={Link}
            to="/adduser"
            sx={{
              backgroundColor: '#1212d4',
              '&:hover': {
                backgroundColor: '#115293',
              } 
            }}
          >
            Add User
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


