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
const AddAqar = (props) => {
    
    const handleSubmit = async (event) => {
        event.preventDefault(); 
      
        const formData = new FormData(event.target)
      
        try {
           const response = await axios.post('', formData);
      
           console.log('Response:', response.data);
        } 
        catch (error) {

           console.error('Error:', error);
        }
      };
  return (
    <div>
    <Accordion
    expanded={props.expanded}
    onChange={props.handle}
  >
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1d-content"
      id="panel1d-header"
    >
      <Typography component="h1" variant="h5">
      <svg   width="35" height="35" viewBox="0 0 24 24"  style={{ verticalAlign: '-0.125em' }}><g transform="translate(24 0) scale(-1 1)"><path fill="currentColor" d="M21 21H3a1 1 0 0 1-1-1v-7.513a1 1 0 0 1 .343-.754L6 8.544V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1M9 19h3v-6.058L8 9.454l-4 3.488V19h3v-4h2zm5 0h6V5H8v2.127c.234 0 .469.082.657.247l5 4.359a1 1 0 0 1 .343.754zm2-8h2v2h-2zm0 4h2v2h-2zm0-8h2v2h-2zm-4 0h2v2h-2z"></path></g></svg>
        إضف مزاداً لعقارك
      </Typography>
      <Typography sx={{ color: "text.secondary" }}>
        
      </Typography>
    </AccordionSummary>
         <div>
         {/* إضف مزاداً لعقارك */}

        <Container component="div" maxWidth="xs">
          <CssBaseline />
          <div>
          <Typography component="h1" variant="h4" className="d-flex justify-content-center">
            <svg   width="35" height="35" viewBox="0 0 24 24"  style={{ verticalAlign: '-0.125em' }}><g transform="translate(24 0) scale(-1 1)"><path fill="currentColor" d="M21 21H3a1 1 0 0 1-1-1v-7.513a1 1 0 0 1 .343-.754L6 8.544V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1M9 19h3v-6.058L8 9.454l-4 3.488V19h3v-4h2zm5 0h6V5H8v2.127c.234 0 .469.082.657.247l5 4.359a1 1 0 0 1 .343.754zm2-8h2v2h-2zm0 4h2v2h-2zm0-8h2v2h-2zm-4 0h2v2h-2z"></path></g></svg>
              Sell Property
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="country"
                    label="Country"
                    name="country"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="city"
                    label="City"
                    name="city"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="area"
                    label="Area"
                    name="area"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="street"
                    label="Street"
                    name="street"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="floor"
                    label="Floor"
                    name="floor"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="area"
                    label="Total Area"
                    name="area"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="bedrooms"
                    label="Number of Bedrooms"
                    name="bedrooms"
                    type="number"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="bathrooms"
                    label="Number of Bathrooms"
                    name="bathrooms"
                    type="number"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="price"
                    label="Price"
                    name="price"
                    type="number"
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
          <Box mt={5}></Box>
        </Container>
       </div>
   </Accordion>
  </div>
  )
}

export default AddAqar
