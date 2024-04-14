import * as React from "react";
 import axios from 'axios';
import { useState } from 'react';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import logocar from "../../../assets/all-images/Addbazar-img/car.png";
import logolaptop from "../../../assets/all-images/Addbazar-img/laptop.png";
import logoanything from "../../../assets/all-images/Addbazar-img/anything.png";
import Container from "@mui/material/Container";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Aqar() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  
   //عقار
   const handleSubmitAqar = async (event) => {
    event.preventDefault();
    const formAqar = new FormData(event.target);
  
    const postDataAqar = {
      country: formAqar.get('الدولة'),
      city: formAqar.get('المدينة'),
      area: formAqar.get('المنطقة'),
      street: formAqar.get('الشارع'),
      floor: formAqar.get('الطابق'),
      total_area: formAqar.get('المساحة الكلية'),
      bedrooms: formAqar.get('bedrooms'),
      bathrooms: formAqar.get('bathrooms'),
      price: formAqar.get('price'),
      start_date: formAqar.get('start_date'),
      end_date: formAqar.get('end_date'),
      image: formLaptop.get("image"),
    };
    try {
      const response = await axios.post('URL_OF_YOUR_BACKEND_ENDPOINT', postDataAqar);
      // يمكنك إجراء إجراءات أخرى هنا عندما تكون الاستجابة ناجحة
      console.log('Response:', response);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  
  //سيارة

  const handleSubmitCar = async (e) => {
    e.preventDefault();
    const formCar = new FormData(e.target);
  
    const postDataCar = {
      brand: formCar.get("brand"),
      model: formCar.get("model"),
      manufacturingYear: formCar.get("manufacturingYear"),
      registrationYear: formCar.get("registrationYear"),
      engineType: formCar.get("engineType"),
      price: formCar.get("price"),
      description: formCar.get("description"),
      image: formLaptop.get("image"),
    };
    try {
      const response = await axios.post('URL_OF_YOUR_BACKEND_ENDPOINT', postDataCar);
      // يمكنك إجراء إجراءات أخرى هنا عندما تكون الاستجابة ناجحة
      console.log('Response:', response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  //لابتوب

  const handleSubmitLaptop = async (e) => {
    e.preventDefault();
    const formLaptop = new FormData(e.target);
  
    const postDataLaptop = {
      brand: formLaptop.get("brand"),
      processor: formLaptop.get("processor"),
      ram: formLaptop.get("ram"),
      hardDrive: formLaptop.get("hardDrive"),
      graphicCard: formLaptop.get("graphicCard"),
      screenSize: formLaptop.get("screenSize"),
      price: formLaptop.get("price"),
      image: formLaptop.get("image"),
    };
    try {
      const response = await axios.post('URL_OF_YOUR_BACKEND_ENDPOINT', postDataLaptop);
      // يمكنك إجراء إجراءات أخرى هنا عندما تكون الاستجابة ناجحة
      console.log('Response:', response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  //أي شيء

  const handleSubmitAnything = async (e) => {
    e.preventDefault();
    const formAnything = new FormData(e.target);
  
    const postDataAnything = {
      itemName: formAnything.get("itemName"),
      description: formCar.get("description"),
      price: formAnything.get("price"),
      image: formAnything.get("image"),
    };
    try {
      const response = await axios.post('URL_OF_YOUR_BACKEND_ENDPOINT', postDataAnything);
      // يمكنك إجراء إجراءات أخرى هنا عندما تكون الاستجابة ناجحة
      console.log('Response:', response);
    } catch (error) {
      console.error('Error:', error);
    }
  };


  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleAccordionChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography component="h1" variant="h4" >
            <svg
              width="35"
              height="35"
              viewBox="0 0 24 24"
              style={{ verticalAlign: "-0.125em", marginRight:20,}}
            >
              <g transform="translate(24 0) scale(-1 1)">
                <path
                  fill="currentColor"
                  d="M21 21H3a1 1 0 0 1-1-1v-7.513a1 1 0 0 1 .343-.754L6 8.544V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1M9 19h3v-6.058L8 9.454l-4 3.488V19h3v-4h2zm5 0h6V5H8v2.127c.234 0 .469.082.657.247l5 4.359a1 1 0 0 1 .343.754zm2-8h2v2h-2zm0 4h2v2h-2zm0-8h2v2h-2zm-4 0h2v2h-2z"
                ></path>
              </g>
            </svg>
            إضف مزاداً لعقارك
          </Typography>
          <Typography ></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {/* إضف مزاداً لعقارك */}

            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div>
                <Typography className="typograph" component="h1" variant="h4">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                  >
                    <g transform="translate(24 0) scale(-1 1)">
                      <path
                        fill="currentColor"
                        d="M21 21H3a1 1 0 0 1-1-1v-7.513a1 1 0 0 1 .343-.754L6 8.544V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1M9 19h3v-6.058L8 9.454l-4 3.488V19h3v-4h2zm5 0h6V5H8v2.127c.234 0 .469.082.657.247l5 4.359a1 1 0 0 1 .343.754zm2-8h2v2h-2zm0 4h2v2h-2zm0-8h2v2h-2zm-4 0h2v2h-2z"
                      ></path>
                    </g>
                  </svg>
                  بيع عقار
                </Typography>
                <form onSubmit={handleSubmitAqar}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="country"
                        label="الدولة"
                        name="country"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="city"
                        label="المدينة"
                        name="city"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="area"
                        label="المنطقة"
                        name="area"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="street"
                        label="الشارع"
                        name="street"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="floor"
                        label="الطابق"
                        name="floor"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="area"
                        label="المساحة الكلية"
                        name="area"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="bedrooms"
                        label="عدد غرف النوم"
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
                        label="عدد الحمامات"
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
                        label="السعر"
                        name="price"
                        type="number"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="startDate"
                        label="بدأالعرض"
                        type="datetime-local"
                        value={startDate}
                        onChange={handleStartDateChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="endDate"
                        label=" انتهاء العرض"
                        type="datetime-local"
                        value={endDate}
                        onChange={handleEndDateChange}
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
                   ابدأ المزاد
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
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
          <Typography component="h1" variant="h4">
            <img
              src={logocar}
              alt="Logo"
              width="40"
              height="40"
              style={{ verticalAlign: "-0.2em" ,marginRight:20 }}
            />
            إضف مزاداً لسيارتك
          </Typography>
          <Typography></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {/* اضافة مزاد لسيارة*/}

            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div>
                <Typography className="typograph"  component="h1" variant="h4">
                  <img
                    src={logocar}
                    alt="Logo"
                    width="40"
                    height="40"
                  />
                 بيع سيارة
                </Typography>
                <form onSubmit={handleSubmitCar}>
                <Grid item xs={12}>
                      <TextField
                        name="engineType"
                        variant="outlined"
                        required
                        fullWidth
                        label="الاسم"
                      />
                    </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        name="brand"
                        variant="outlined"
                        required
                        fullWidth
                        label="العلامة التجارية"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="model"
                        variant="outlined"
                        required
                        fullWidth
                        label="الموديل"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="manufacturingYear"
                        variant="outlined"
                        required
                        fullWidth
                        label="سنة التصنيع"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="registrationYear"
                        variant="outlined"
                        required
                        fullWidth
                        label="سنة التسجيل"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="engineType"
                        variant="outlined"
                        required
                        fullWidth
                        label="نوع المحرك"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="price"
                        variant="outlined"
                        required
                        fullWidth
                        label="السعر"
                        type="number"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="engineType"
                        variant="outlined"
                        required
                        fullWidth
                        label="الاسم"
                        type="time"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="description"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        label="الوصف"
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
                   ابدأ المزاد
                  </Button>
                </form>
              </div>
              <Box mt={5}>
                {/* Add any additional components here if needed */}
              </Box>
            </Container>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleAccordionChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3d-content"
          id="panel3d-header"
        >
          <Typography component="h1" variant="h4">
            <img
              src={logolaptop}
              alt="Logo"
              width="40"
              height="40"
              style={{ verticalAlign: "-0.2em" ,marginRight:20 }}
            />
            إضف مزاداً للابتوبك
          </Typography>
          <Typography></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {/* اضافة مزاد للابتوب*/}

            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div>
                <Typography className="typograph"  component="h1" variant="h4">
                  <img
                    src={logolaptop}
                    alt="Logo"
                    width="40"
                    height="40"
                  />
                  بيع كمبيوتر محمول
                </Typography>
                <form onSubmit={handleSubmitLaptop}>
                  
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        autoComplete="brand"
                        name="brand"
                        required
                        fullWidth
                        id="brand"
                        label="العلامة التجارية"
                        // Add onChange and value for brand
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="processor"
                        label="نوع المعالج"
                        name="processor"
                        // Add onChange and value for processor
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        id="ram"
                        label="الرام"
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
                        label="الهارد"
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
                        label="كرت الشاشة"
                        name="graphicCard"
                        // Add onChange and value for graphic card
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        id="screenSize"
                        label="حجم الشاشة"
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
                        label="السعر"
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
                    ابدأ المزاد
                  </Button>
                </form>
              </div>
            </Container>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleAccordionChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4d-content"
          id="panel4d-header"
        >
          <Typography component="h1" variant="h4">
            <img
              src={logoanything}
              alt="Logo"
              width="40"
              height="40"
              style={{ verticalAlign: "-0.2em" , marginRight:20}}
            />
            إضف مزاداً لأي شيء تريده
          </Typography>
          <Typography></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {/*   اضافة مزاد لأي شيء  */}

            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div>
                <Typography className="typograph" component="h1" variant="h4">
                  <img
                    src={logoanything}
                    alt="Logo"
                    width="40"
                    height="40"
                  />
                  بيع المنتج الذي تريده
                </Typography>
                <form onSubmit={handleSubmitAnything}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="itemName"
                    label="اسم المنتج"
                    autoFocus
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="description"
                    label="وصف المنتج"
                    multiline
                    rows={4}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="price"
                    label="السعر"
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
                    ابدأ المزاد
                  </Button>
                </form>
              </div>
            </Container>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
 