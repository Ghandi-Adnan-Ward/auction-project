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


const Add = (props) => {
  
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
          aria-controls="panel4d-content"
          id="panel4d-header"
        >
          <Typography component="h1" variant="h5">
          <img src={logoanything} alt="Logo"    width="40" height="40"  style={{ verticalAlign: '-0.200em'}}  />
            إضف مزاداً لأي شيء تريده
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
           
          </Typography>
        </AccordionSummary>
             {/*   اضافة مزاد لأي شيء  */}

            <Container component="main" maxWidth="xs">
               <div  >
                <Typography component="h1" variant="h4" className="d-flex justify-content-center">
                <img src={logoanything} alt="Logo"    width="40" height="40"  style={{ verticalAlign: '-0.200em'}}  />
                  Sell Your Item
                </Typography>
                <form onSubmit={handleSubmit}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="itemName"
                    label="Item Name"
                    autoFocus
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="description"
                    label="Description"
                    multiline
                    rows={4}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="price"
                    label="Price"
                    type="number"
                  />
                  <Grid item xs={12} sx={{ mt: 2 }}>
                    <input type="file" name="image" accept="image/*" multiple />
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Post Item for Sale
                  </Button>
                </form>
              </div>
            </Container>
        </Accordion>
    </div>
  )
}

export default Add
