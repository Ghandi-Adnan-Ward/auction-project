import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from "@mui/material/Container";

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleAccordionChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Collapsible Group Item #1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            // اضافة مزاد لعقار
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div>
                <Avatar></Avatar>
                <Typography component="h1" variant="h5">
                  Sell Property
                </Typography>
                <form>
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
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleAccordionChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Collapsible Group Item #2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>اضافة مزاد لسيارة</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleAccordionChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Collapsible Group Item #3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            // اضافة مزاد لابتوب
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div>
                <Avatar>{/* Your avatar goes here */}</Avatar>
                <Typography component="h1" variant="h5">
                  Sell Laptop
                </Typography>
                <Box component="form">
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
                      <TextField
                        fullWidth
                        id="image"
                        name="image"
                        label="Image URL"
                        // Add onChange and value for image URL
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
                </Box>
              </div>
            </Container>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
