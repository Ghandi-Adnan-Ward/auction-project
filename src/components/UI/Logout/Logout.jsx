import React,{useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from 'axios'
import Spinner from '../Spinner/Spinner';
import CircularIndeterminate from '../Spinner/CircularIndeterminate';
import {useNavigate} from 'react-router-dom'
 function Logout() {
  const[Logout,setLogout]=useState(false)
  const navigate=useNavigate()
  const jwt_token=localStorage.getItem('jwt_token');

  const config={
    headers:{
      Authorization:`Bearer ${jwt_token}`
    }
  }
    
  
  const handleSubmit = async (event) => {
    event.preventDefault(); 
  
    // const formData = {
    //    first_name:event.target.first_name.value,
    //    last_name:event.target.last_name.value,

    //   email:event.target.email.value,
    //   password:event.target.password.value

    // }
   
    
    try {
      
       const response = await axios.post('http://localhost:8000/api/v1/user/logout',config);
       console.log('Response:', response.data);
      console.log('Response:', jwt_token);

      navigate('/')
      } 
    catch (error) {

       console.error('Error:', error);
    }

    setLogout(true)
  };
  return (
    <div>
         {Logout? <CircularIndeterminate/> :
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
             {/* <Grid container spacing={2}>
               <Grid item xs={12} sm={6}>
                 <TextField
                   name="first_name"
                   required
                   fullWidth
                   id="first_name"
                   label="الاسم الأول"
                   autoFocus
                 />
               </Grid>
               <Grid item xs={12} sm={6}>
                 <TextField
                   required
                   fullWidth
                   id="last_name"
                   label="الاسم الثاني"
                   name="last_name"
                  />
               </Grid> 
               <Grid item xs={12}>
                 <TextField
                   required
                   fullWidth
                   id="email"
                   label="البريد الالكتروني"
                   name="email"
                  />
               </Grid>
               <Grid item xs={12}>
                 <TextField
                   required
                   fullWidth
                   name="password"
                   label="كلمة المرور"
                   type="password"
                   id="password"
                  />
               </Grid>
                
             </Grid> */}
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
     </div>
  )
}

export default Logout
