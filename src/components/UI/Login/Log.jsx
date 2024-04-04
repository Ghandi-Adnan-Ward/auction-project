import React, { useState } from 'react'
 import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';
import { useNavigate } from 'react-router-dom';
 function Login() {
  const[Loading,setLoading]=useState(false)
  const navigate =useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault(); 
 
    const formData = {
      email:event.target.email.value,
      password:event.target.password.value
    }
  setLoading(true)
    try {
        axios.post('http://localhost:8000/api/v1/user/login', formData)
        .then(res=>{
            // localStorage.setItem('token',res.data.token)
            // const id=localStorage.getItem('userId')
            const id=res.data.details.id;
            const jwt_token=res.data.details.jwt_token;
            localStorage.setItem('jwt_token',jwt_token)
            localStorage.setItem('id',id)
            console.log(id)
            navigate('/')
            setTimeout(() => {
              const response =   axios.post('http://localhost:8000/api/v1/user/logout', formData,config);
              localStorage.clear();
               console.log('Response:', response.data);    }, 10000);
        }
          // headers:{
          //   "Authorization":`Bearer ${localStorage.getItem("access_token")}`
          
        )
         }
    catch (error) {

       console.error('Error:', error);
    }
    
  };
  return (
    <div>
       {Loading?<Spinner/>:
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
           تسجيل الدخول
         </Typography>
         <form onSubmit={handleSubmit}>
           <TextField
             margin="normal"
             required
             fullWidth
             id="email"
             label="البريد الالكتروني"
             name="email"
             type='email'
             autoComplete="email"
             autoFocus
           />
           <TextField
             margin="normal"
             required
             fullWidth
             name="password"
             label="كلمة السر"
             type="password"
             id="password"
             autoComplete="current-password"
           />
           <FormControlLabel
             control={<Checkbox value="remember" color="primary" />}
             label="تذكرني"
           />
           <Button
             type="submit"
             fullWidth
             variant="contained"
             sx={{ mt: 3, mb: 2 }}
           >
             تسجيل الدخول
           </Button>
           <Grid container>
             <Grid item xs>
               <Link href="#" variant="body2">
                 هل نسيت كلمة المرور ؟
               </Link>
             </Grid>
             <Grid item>
               <Link href="/register" variant="body2">
                 {"ليس لديك حساب ؟ إنشاء حساب"}
               </Link>
             </Grid>
           </Grid>
         </form>
       </Box>
      </Container>}
     </div>
  )
}

export default Login
