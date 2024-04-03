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
const AddLap = (props) => {
    
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
    <div>
    <Accordion
    expanded={props.expanded}
    onChange={props.handle}
  >
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel3d-content"
      id="panel3d-header"
    >
      <Typography component="h1" variant="h5">
      <img src={logolaptop} alt="Logo"   width="40" height="40"  style={{ verticalAlign: '-0.200em'}} />
        
        إضف مزاداً للابتوبك
      </Typography>
      <Typography sx={{ color: "text.secondary" }}>
        
      </Typography>
    </AccordionSummary>
          {/* اضافة مزاد للابتوب*/}

        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div>
          <Typography component="h1" variant="h4" className="d-flex justify-content-center">
            <img src={logolaptop} alt="Logo"   width="40" height="40"  style={{ verticalAlign: '-0.200em'}} />
              Sell Laptop
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="brand"
                    name="brand"
                    required
                    fullWidth
                    id="brand"
                    label="Brand"
                    // Add onChange and value for brand
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="processor"
                    label="Processor Type"
                    name="processor"
                    // Add onChange and value for processor
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="ram"
                    label="RAM"
                    name="ram"
                    type="number"
                    // Add onChange and value for ram
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="hardDrive"
                    label="Hard Drive"
                    name="hardDrive"
                    type="number"
                    // Add onChange and value for hard drive
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="graphicCard"
                    label="Graphic Card"
                    name="graphicCard"
                    // Add onChange and value for graphic card
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="screenSize"
                    label="Screen Size"
                    name="screenSize"
                    type="number"
                    // Add onChange and value for screen size
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="price"
                    label="Price"
                    name="price"
                    type="number"
                    // Add onChange and value for price
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
                sx={{ mt: 3, mb: 2 }}
              >
                Sell
              </Button>
            </form>
          </div>
        </Container>
    </Accordion>
</div>
  )
}

export default AddLap
