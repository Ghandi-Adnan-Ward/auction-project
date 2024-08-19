import React, { useState } from 'react';
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
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';
import { useNavigate } from 'react-router-dom';
import { Alert, FormControl, InputLabel, OutlinedInput } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

function Login() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(); // State to handle password visibility
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [showAlert1, setShowAlert1] = useState(false);
  const [error, setError] = useState('');
const [pass , setpass]=useState('')
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowAlert(true);

    const formData = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    try {
      axios.post('http://localhost:8000/api/v1/user/login', formData)
        .then(res => {
          setShowAlert(false);
          const id = res.data.details.id;
          const jwt_token = res.data.details.jwt_token;
          localStorage.setItem('jwt_token', jwt_token);
          localStorage.setItem('id', id);

          navigate('/');
        })
        .catch(error => {
          setError(error.message);
          setShowAlert1(true);
          setShowAlert(false);
          setTimeout(() => {
            navigate('/');
          }, 7000);
        });
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(true);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
 
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
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
            <Avatar sx={{ m: 1, bgcolor: '#191b2b' }}></Avatar>
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
                type="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="كلمة السر"
                type={showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="current-password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                    <IconButton 
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                        
                      >
                                          {showPassword ? <VisibilityOff /> : <Visibility />}

                      </IconButton>
                      </InputAdornment>
                  ),
                }}
              />
          {/* <FormControl sx={{mt:'1',  width: '44ch' }} variant="outlined">
          <InputLabel >كلمة السر</InputLabel>
          <OutlinedInput
          onChange={handl}
                id="password"
                type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                   {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl> */}
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="تذكرني"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                تسجيل الدخول
              </Button>
              <Grid container justifyContent="center" alignItems="center">
                <Grid>
                  <Link href="/register" variant="body2">
                    {"ليس لديك حساب ؟ إنشاء حساب"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Container>
      )}
      {showAlert && (
        <Alert severity="success">
          يتم الآن تسجيل الدخول
          <CheckIcon />
        </Alert>
      )}
      {showAlert1 && (
        <Alert severity="error" className="custom-alert" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="d-flex justify-content-center align-items-center">
            <h4>يتم الآن {error} </h4>
            <CheckIcon />
          </div>
        </Alert>
      )}
    </div>
  );
}

export default Login;