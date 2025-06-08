import React, { use, useEffect, useState } from 'react';
import { useNavigate ,useParams} from 'react-router';
import axios from 'axios';
import {
  Container,
  Paper,
  Box,
  Typography,
  TextField,
  Button,
} from '@mui/material';


export default function EditUser() {
  const navigate = useNavigate();

 const {id}=useParams();

  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
   };


 useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/user/${id}`, user);
      navigate('/');
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  }


  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 4, borderRadius: 2 }}>
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{ mb: 2 }}
        >
          Edit User
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

