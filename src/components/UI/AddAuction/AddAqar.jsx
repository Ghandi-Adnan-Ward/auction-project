import  React,{useState} from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
 import Typography from "@mui/material/Typography";
 import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import { Alert } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { MenuItem } from "@material-ui/core";

const AddAqar = (props) => {

  const[showAlert, setShowAlert] = useState(false);
  const[Loading,setLoading]=useState(false)
  const navigate=useNavigate()
  const [auctionType, setAuctionType] = useState('');

  const [image, setImage] = useState('')
  const changeHandler = (e)=>{
    setImage(e.target.files[0]);
    console.log(e.target.files[0])
}
const handleAuctionTypeChange = (e) => {
  setAuctionType(e.target.value);
}
  const handleSubmit = async (event) => {
    event.preventDefault(); 

    setLoading(true)
    setShowAlert(true)

    const category_id=2;
    const status="pending";
    const formAqar = new FormData();
    formAqar.append('name',event.target.name.value);
    formAqar.append('status',status);
    formAqar.append('category_id',category_id);
    formAqar.append('country',event.target.country.value);
    formAqar.append('city',event.target.city.value);
    formAqar.append('area',event.target.area.value);
    formAqar.append('street',event.target.street.value);
    formAqar.append('floor',event.target.floor.value);
    formAqar.append('image',image);
    formAqar.append('total_area',event.target.total_area.value);
    formAqar.append('num_bedrooms',event.target.bedrooms.value);
    formAqar.append('num_bathrooms',event.target.bathrooms.value);
    formAqar.append('minimum_bid',event.target.price.value);
    formAqar.append('start_time',event.target.start_time.value);
    formAqar.append('end_time',event.target.end_time.value);
    formCar.append('type', auctionType);
    if (auctionType === 'live') {
      formCar.append('incrementamount', event.target.incrementamount.value);
    }
    
     const jwt_token=localStorage.getItem('jwt_token');
      const config={
        headers:{
          Authorization:`Bearer ${jwt_token}`
        }
      }

    try {
       axios.post('http://localhost:8000/api/v1/user/real-estate-auctions', formAqar,config)
       .then(res=>{
        setLoading(true)
        setShowAlert(true)
        console.log('Response:', res.data);
        navigate('/aqar')
       }
       )
      }

    catch (error) {

       console.error('Error:', error);
    }
  };

  return (
    <div>
      {Loading ? 
              <Spinner/>
                  :
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
              <svg   width="50" height="50" viewBox="0 0 24 24"  style={{ verticalAlign: '-0.125em' }}><g transform="translate(24 0) scale(-1 1)"><path fill="currentColor" d="M21 21H3a1 1 0 0 1-1-1v-7.513a1 1 0 0 1 .343-.754L6 8.544V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1M9 19h3v-6.058L8 9.454l-4 3.488V19h3v-4h2zm5 0h6V5H8v2.127c.234 0 .469.082.657.247l5 4.359a1 1 0 0 1 .343.754zm2-8h2v2h-2zm0 4h2v2h-2zm0-8h2v2h-2zm-4 0h2v2h-2z"></path></g></svg>
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                      select
                      name="auction_type"
                      variant="outlined"
                      fullWidth
                      label="Auction Type"
                      value={auctionType}
                      onChange={handleAuctionTypeChange}
                    >
                      <MenuItem value="live">Live</MenuItem>
                      <MenuItem value="anonymous">Anonymous</MenuItem>
                      <MenuItem value="regular">Regular</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>

                  <TextField
                      name="incrementamount"
                      variant="outlined"
                      fullWidth
                      label="مقدار الزيادة"
                      type="number"
                      // Conditionally render based on auction type
                      style={{ display: auctionType === 'live' ? 'block' : 'none' }}
                    />
                  </Grid>
                <Grid item xs={12}>
                        <TextField
                          name="name"
                          variant="outlined"
                          required
                          fullWidth
                          focused
                          label="الاسم"
                        />
                      </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="country"
                      label="البلد"
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
                      id="total_area"
                      type="number"
                      label="المساحة الكلية"
                      name="total_area"
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
                          name="start_time"
                          variant="outlined"
                          
                          fullWidth
                          label="وقت بداية المزاد"
                          type="datetime-local"
                          InputLabelProps={{
                            shrink:true
                          }}
                        />
                          
                      </Grid>
                  <Grid item xs={12}>
                        <TextField
                          name="end_time"
                          variant="outlined"
                          required
                          fullWidth
                          label="وقت انتهاء المزاد"
                          type="datetime-local"
                          InputLabelProps={{
                            shrink:true
                          }}
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
                    <input
                      type="file"
                      name="image"
                      accept="image/*"
                      onChange={changeHandler}
                      multiple={false}
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
                  إرسال الطلب
                </Button>
              </form>
            </div>
            <Box mt={5}></Box>
          </Container>
        </div>
    </Accordion>
      }
      {showAlert && (
            <Alert severity="success" >
                يتم الآن تحميل المزاد
                <CheckIcon/>
              </Alert>
    )}
  </div>
  )
}

export default AddAqar
