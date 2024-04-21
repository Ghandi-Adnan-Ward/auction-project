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
import DateTimePicker from 'react-datetime-picker'
const AddCar = (props) => {
  const [image, setImage] = useState('')
  const changeHandler = (e)=>{
    setImage(e.target.files[0]);
    console.log(e.target.files[0])
}
  // const handle=(e)=>{
  //    image=e.target.files[0]
  // }
     const handleSubmit = async (event) => {
        event.preventDefault(); 
        const category_id=1;
        // const image='../../../assets/all-images/cars-img/bmw-offer.png'
        const status="ongoing";
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
        formCar.append('end_time',event.target.end_time.value);
        formCar.append('minimum_bid',event.target.price.value);
        formCar.append('description',event.target.description.value);

         // const postDataCar = {
        //   name: formCar.get("name"),
        //   category_id:category_id,
        //   status:status,
        //   brand: formCar.get("brand"),
        //   model: formCar.get("model"),
        //   manufacturing_year: formCar.get("manufacturing_Year"),
        //   registration_year: formCar.get("registration_Year"),
        //   engine_type: formCar.get("engine_Type"),
        //   end_time: formCar.get("end_time"),
        //   price: formCar.get("price"),
        //  };
         const jwt_token=localStorage.getItem('jwt_token');
          const config={
            headers:{
              Authorization:`Bearer ${jwt_token}`
            }
          }
        try {
          
      
           axios.post('http://localhost:8000/api/v1/user/car-auctions', formCar,config)
           .then(res=>{
              
            console.log('Response:', res.data);
           }
           )
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
                        rows={4}
                        label="الوصف"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <input
                        type="file"
                        name="image"
                        accept="images/*"
                        // onChange={(e)=>{
                        //   const file=e.target.files[0]
                        //   console.log(file)
                        // }}
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
                    Submit
                  </Button>
                </form>
              </div>
              
            </Container>
        </Accordion>
)}

export default AddCar
