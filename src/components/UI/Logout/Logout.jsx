//Logout
import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';
import { useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

function Logout() {
  const [Logout, setLogout] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  const jwt_token = localStorage.getItem('jwt_token');

  const config = {
    headers: {
      Authorization: `Bearer ${jwt_token}`
    }
  };
   
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLogout(true);
    setShowAlert(true);

    try {
      const response = await axios.post('http://localhost:8000/api/v1/user/logout', config);
        setShowAlert(false)
        navigate('/')

        localStorage.clear();
        console.log('Response:', response.data);
        console.log('Response:', jwt_token);
       
    } 
    catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
       {Logout ? <Spinner /> :

        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              marginBottom: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#191b2b' }}>
            </Avatar>
            <Typography component="h1" variant="h5">
              تسجيل خروج
            </Typography>
            <form onSubmit={handleSubmit}    >
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                تسجيل خروج
              </Button>
            </form>
          </Box>
        </Container>}
      {showAlert && (
        <Alert severity="success" >
            يتم الآن تسجيل الخروج
            <CheckIcon/>
        </Alert>
      )}
    </div>
  )
}

export default Logout;