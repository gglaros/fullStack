import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Table,TableBody,TableCell,TableContainer,TableHead,
TableRow,Paper} from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router';

const Home = () => {

  const [users, setUsers] = useState([]);
 
  useEffect(() => {
    loadUsers();
  },[]);

  const loadUsers=async()=>{
    const result= await axios.get("http://localhost:8080/users");
    console.log(result.data)
    setUsers(result.data);
  }

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };


  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.name}</TableCell>
                <TableCell>{row.username}</TableCell> 
              <TableCell>{row.email}</TableCell>

            <TableCell> 
                <Button variant="contained"color="primary"sx={{ mr: 1 }}> View </Button>
                <Button variant="contained"   component={Link} to={`/edituser/${row.id}`}  color="secondary" 
                sx={{ mr: 1 ,background:"teal",'&:hover': {backgroundColor: "darkslategray"}}}>Edit</Button>
                <Button variant="contained" color="error" onClick={() => {if (window.confirm('Are you sure you want to delete this user?')) 
                  {deleteUser(row.id);}}}>Delete</Button>

            </TableCell>  
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Home;
