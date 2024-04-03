import  React,{useState} from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
//import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
//import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import logocar from "../../../assets/all-images/Addbazar-img/car.png"
import logolaptop from "../../../assets/all-images/Addbazar-img/laptop.png"
import logoanything from "../../../assets/all-images/Addbazar-img/anything.png"
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from "@mui/material/Container";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
const AddCar = (props) => {
    
    const handleSubmit = async (event) => {
        event.preventDefault(); 
      
        const formData = new FormData(event.target);
      
        try {
           const response = await axios.post('', formData);
      
           console.log('Response:', response.data);
        } 
        catch (error) {

           console.error('Error:', error);
        }
      };
  return (
    <Accordion
        expanded={props.expanded}
        onChange={props.handle}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
          <Typography component="h1" variant="h5">
          <img src={logocar} alt="Logo"   width="40" height="40"  style={{ verticalAlign: '-0.200em'}} />
            إضف مزاداً لسيارتك
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
       
          </Typography>
        </AccordionSummary>
             {/* اضافة مزاد لسيارة*/}

            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div>
              
              <Typography component="h1" variant="h4" className="d-flex justify-content-center">
                <img src={logocar} alt="Logo"   width="40" height="40"  style={{ verticalAlign: '-0.200em'}} />
                  Sell Car
                </Typography>
                <form onSubmit={handleSubmit} >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        name="brand"
                        variant="outlined"
                        required
                        fullWidth
                        label="Brand"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="model"
                        variant="outlined"
                        required
                        fullWidth
                        label="Model"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="manufacturingYear"
                        variant="outlined"
                        required
                        fullWidth
                        label="Manufacturing Year"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="registrationYear"
                        variant="outlined"
                        required
                        fullWidth
                        label="Registration Year"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="engineType"
                        variant="outlined"
                        required
                        fullWidth
                        label="Engine Type"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="price"
                        variant="outlined"
                        required
                        fullWidth
                        label="Price"
                        type="number"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="description"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        label="Description"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <input
                        type="file"
                        name="image"
                        accept="image/*"
                        multiple
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Submit
                  </Button>
                </form>
              </div>
              <Box mt={5}>
                {/* Add any additional components here if needed */}
              </Box>
            </Container>
        </Accordion>
)}

export default AddCar
