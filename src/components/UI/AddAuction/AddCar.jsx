import  React,{useState} from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import Spinner from '../Spinner/Spinner';
import { useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { MenuItem } from "@material-ui/core";

const AddCar = (props) => {
  const[Loading,setLoading]=useState(false)
  const navigate =useNavigate()
  const [showAlert, setShowAlert] = useState(false);
  const [image, setImage] = useState('')
  const [auctionType, setAuctionType] = useState('');
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
        const category_id=1;
        const status="pending";
        
        const formCar = new FormData();
        formCar.append('name',event.target.name.value);
        formCar.append('status',status);
        formCar.append('category_id',category_id);
        formCar.append('brand',event.target.brand.value);
        formCar.append('model',event.target.model.value);
        formCar.append('manufacturing_year',event.target.manufacturing_Year.value);
        formCar.append('registration_year',event.target.registration_Year.value);
        formCar.append('engine_type',event.target.engine_Type.value);
        formCar.append('image',image);
        formCar.append('start_time',event.target.start_time.value);
        formCar.append('end_time',event.target.end_time.value);
        formCar.append('minimum_bid',event.target.price.value);
        formCar.append('description',event.target.description.value);
        formCar.append('type', auctionType);
        if (auctionType == 'live') {
          formCar.append('increment_amount', event.target.incrementamount.value);
        }
        
         const jwt_token=localStorage.getItem('jwt_token');
          const config={
            headers:{
              Authorization:`Bearer ${jwt_token}`
            }
          }
          if(auctionType=='live'){
            try {
              axios.post('http://localhost:8000/api/v1/user/car-auctions', formCar,config)
              .then(res=>{
               setLoading(false)
               setShowAlert(false)
               console.log(res.data.auction.id)
               console.log('Response:', res.data);
               navigate('/cars')
              }
              )
             }
           catch (error) {
              console.error('Error:', error);
           }
          }
          else if(auctionType=='regular'){
            try {
              axios.post('http://localhost:8000/api/v1/user/car-auctions', formCar,config)
              .then(res=>{
               setLoading(false)
               setShowAlert(false)
               console.log(res.data.auction.id)
               console.log('Response:', res.data);
               navigate('/cars')
              }
              )
             }
           catch (error) {
              console.error('Error:', error);
           }
          }
          else if(auctionType=='anonymous'){
            try {
          
              axios.post('http://localhost:8000/api/v1/user/car-auctions', formCar,config)
              .then(res=>{
               setLoading(false)
               setShowAlert(false)
               console.log(res.data.auction.id)
               console.log('Response:', res.data);
               navigate('/cars')
              }
              )
             }
           catch (error) {
   
              console.error('Error:', error);
           }
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
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
          <Typography component="h1" variant="h5">
          <svg xmlns="http://www.w3.org/2000/svg"  width="35" height="35" style={{ verticalAlign: '-0.125em' }} viewBox="0 0 24 24"><g transform="translate(24 0) scale(-1 1)"><path fill="currentColor" d="M19 20H5V21C5 21.5523 4.55228 22 4 22H3C2.44772 22 2 21.5523 2 21V11L4.4805 5.21216C4.79566 4.47679 5.51874 4 6.31879 4H17.6812C18.4813 4 19.2043 4.47679 19.5195 5.21216L22 11V21C22 21.5523 21.5523 22 21 22H20C19.4477 22 19 21.5523 19 21V20ZM20 13H4V18H20V13ZM4.17594 11H19.8241L17.6812 6H6.31879L4.17594 11ZM6.5 17C5.67157 17 5 16.3284 5 15.5C5 14.6716 5.67157 14 6.5 14C7.32843 14 8 14.6716 8 15.5C8 16.3284 7.32843 17 6.5 17ZM17.5 17C16.6716 17 16 16.3284 16 15.5C16 14.6716 16.6716 14 17.5 14C18.3284 14 19 14.6716 19 15.5C19 16.3284 18.3284 17 17.5 17Z"></path></g></svg>
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
              <svg xmlns="http://www.w3.org/2000/svg"  width="50" height="50" style={{ verticalAlign: '-0.125em' }} viewBox="0 0 24 24"><g transform="translate(24 0) scale(-1 1)"><path fill="currentColor" d="M19 20H5V21C5 21.5523 4.55228 22 4 22H3C2.44772 22 2 21.5523 2 21V11L4.4805 5.21216C4.79566 4.47679 5.51874 4 6.31879 4H17.6812C18.4813 4 19.2043 4.47679 19.5195 5.21216L22 11V21C22 21.5523 21.5523 22 21 22H20C19.4477 22 19 21.5523 19 21V20ZM20 13H4V18H20V13ZM4.17594 11H19.8241L17.6812 6H6.31879L4.17594 11ZM6.5 17C5.67157 17 5 16.3284 5 15.5C5 14.6716 5.67157 14 6.5 14C7.32843 14 8 14.6716 8 15.5C8 16.3284 7.32843 17 6.5 17ZM17.5 17C16.6716 17 16 16.3284 16 15.5C16 14.6716 16.6716 14 17.5 14C18.3284 14 19 14.6716 19 15.5C19 16.3284 18.3284 17 17.5 17Z"></path></g></svg>
                     
                </Typography>
                <form onSubmit={handleSubmit} >
                
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
                      required
                    >
                      <MenuItem value="live">Live</MenuItem>
                      <MenuItem value="anonymous">Anonymous</MenuItem>
                      <MenuItem value="regular">Regular</MenuItem>
                    </TextField>
                  </Grid>

                  {auctionType=='live' &&
                      <Grid item xs={12}>
                              <TextField
                              name="incrementamount"
                              required
                              variant="outlined"
                              fullWidth
                              label="مقدار الزيادة"
                              type="number"
                              // Conditionally render based on auction type
                              style={{ display: auctionType === 'live' ? 'block' : 'none' }}
                            />
                        </Grid>
                }
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
                        name="manufacturing_Year"
                        variant="outlined"
                        required
                        fullWidth
                        label="سنة التصنيع"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="registration_Year"
                        variant="outlined"
                        required
                        fullWidth
                        label="سنة التسجيل"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="engine_Type"
                        variant="outlined"
                        required
                        fullWidth
                        label="نوع المحرك"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="start_time"
                        variant="outlined"
                        required
                        fullWidth
                        label="وقت بدء المزاد"
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
                        name="description"
                        variant="outlined"
                        fullWidth
                        multiline
                        required
                        rows={4}
                        label="الوصف"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <input
                        type="file"
                        name="image"
                        accept="image/*"
                        // onChange={(e)=>{
                        //   const file=e.target.files[0]
                        //   console.log(file)
                        // }}
                        onChange={changeHandler}
                        multiple={false}
                        required
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
              
            </Container>
        </Accordion>
                  }
        {showAlert && (
              <Alert severity="success" >
                  يتم الآن تحميل المزاد
                  <CheckIcon/>
                </Alert>
             )}
        </div>
)}

export default AddCar
