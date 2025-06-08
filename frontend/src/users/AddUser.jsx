import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import {
  Container,
  Paper,
  Box,
  Typography,
  TextField,
  Button,
} from '@mui/material';

export default function AddUser() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
   
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/user', user);
      navigate('/');
    } catch (error) {
      console.error('Error adding user:', error);
      
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 4, borderRadius: 2 }}>
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{ mb: 2 }}
        >
          Add User
        </Typography>

        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={onSubmit}
        >
          <TextField
           
            id="name"
            name="name"
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={onInputChange}
          />

          <TextField
           
            id="username"
            name="username"
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={onInputChange}
          />

          <TextField
           
            id="email"
            name="email"
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={onInputChange}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
          >
            Submit
          </Button>
          <Button onClick={() => navigate('/')}
            variant="contained"
            color="error"
            fullWidth
            sx={{ mt: 3 }}
           >
            Cancel
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

