import React,{useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import Spinner from '../Spinner/Spinner';
 function Login() {
  const[Loading,setLoading]=useState(false)
  const navigate=useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault(); 
    const formData = {
      first_name:event.target.first_name.value,
      last_name:event.target.last_name.value,
      email:event.target.email.value,
      password:event.target.password.value

    }    
    setLoading(true)

  
    try {
       const response = await axios.post('http://localhost:8000/api/v1/user/register', formData);
  
       console.log('Response:', response);
      navigate('/login')
      } 
    catch (error) {

       console.error('Error:', error);
    }
  };
  return (
    <div>
        {Loading ? <Spinner/>:
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
             إنشاء حساب
           </Typography>
           <form onSubmit={handleSubmit
           }    >
             <Grid container spacing={2}>
               <Grid item xs={12} sm={6}>
                 <TextField
                   autoComplete="given-name"
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
                   autoComplete="family-name"
                 />
               </Grid>
               <Grid item xs={12}>
                 <TextField
                   required
                   fullWidth
                   id="email"
                   label="البريد الالكتروني"
                   name="email"
                   autoComplete="email"
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
               <Grid item xs={12}>
                 <FormControlLabel
                   control={<Checkbox value="allowExtraEmails" color="primary" />}
                   label="إرسال التحديثات عبر البريد الالكتروني"
                 />
               </Grid>
             </Grid>
             <Button
               type="submit"
               fullWidth
               variant="contained"
               sx={{ mt: 3, mb: 2 }}
             >
               إنشاء حساب
             </Button>
             <Grid container justifyContent="flex-end">
               <Grid item>
                 <Link href="/login" variant="body2">
                   هل لديك حساب ؟ تسجيل الدخول
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
