import React, { useEffect, useState,useRef } from "react";
import { Container, Row, Col } from "reactstrap";
 //import { useParams } from "react-router-dom";
import axios from "axios";
import { Accordion, AccordionSummary, Button, Grid, Input, TextField, Typography } from "@material-ui/core";
import CheckIcon from '@mui/icons-material/Check';
import Spinner from '../components/UI/Spinner/Spinner';
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MenuItem ,Select} from "@material-ui/core";
import CssBaseline from "@mui/material/CssBaseline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const EditAqarDetails = (props) => {
  const transitionRef = useRef(null);
  const {name,minimum_bid ,end_time,details,start_time,image,id ,category_id,status,description,type,increment_amount} =  props.aqarData ;
  const navigate=useNavigate()
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showAlert1, setShowAlert1] = useState(false);
  const [error, setError] = useState('');
  const [auctionType, setAuctionType] = useState(type);
  const [newname,setname]=useState(name)
  const [aqarCountry,setaqarCountry]=useState(details?.country)
  const [aqarCity,setaqarCity]=useState(details?.city)
  const [aqarArea,seraqarArea]=useState(details?.area)
  const [aqarfloor,setaqarfloor]=useState(details?.floor)
  const [aqarnum_bathrooms,setaqarnum_bathrooms]=useState(details?.num_bathrooms)
  const [aqarnum_bedrooms,setaqarnum_bedrooms]=useState(details?.num_bedrooms)
  const [aqartotal_area,setaqartotal_area]=useState(details?.total_area)
  const [aqarstreet,setaqarstreet]=useState(details?.street)
  const [aqarincrement,setaqarincrement]=useState(increment_amount)

  const [startTime,setstartTime]=useState(start_time)
  const [endTime,setendTime]=useState(end_time)
  const [minimumbid,setminimum]=useState(minimum_bid)
  const [aqardescription,setaqardescription]=useState(description)
  const [Image,setimage]=useState(image)
  const jwt_token=localStorage.getItem('jwt_token');
  const config={
    headers:{
      Authorization:`Bearer ${jwt_token}`
    }
  }
  const url=''
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true)
    setShowAlert(true)
    const Edit=new FormData();
    Edit.append('name',event.target.name.value);
    Edit.append('status',status);
    Edit.append('category_id',category_id);
    Edit.append('brand',event.target.brand.value);
    Edit.append('model',event.target.model.value);
    Edit.append('manufacturing_year',event.target.manufacturing_Year.value);
    Edit.append('registration_year',event.target.registration_Year.value);
    Edit.append('engine_type',event.target.engine_Type.value);
    Edit.append('image',image);
    Edit.append('start_time',event.target.start_time.value);
    Edit.append('end_time',event.target.end_time.value);
    Edit.append('minimum_bid',event.target.price.value);
    Edit.append('description',event.target.description.value);
    Edit.append('type', auctionType);
   
     
     try {
      axios.post(url,Edit,config)
      .then(res=>{
        setShowAlert(false)
        setLoading(false)
        console.log(res.data)
      }

      )
     } catch (error) {
      console.error('Error:', error);

     }
  
      }
    
   
    const handleAuctionTypeChange = (e) => {
        setAuctionType(e.target.value);
      }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
         <Container  className="m-4">
 
      {/* {loading ? <Spinner /> : */}
         
            <form onSubmit={handleSubmit} >
                
                <Grid container  spacing={2} justifyContent="center">
                <h2 className="section__title p-2" style={{borderBottom:'5px solid #ec9302'}}>التعديل على المزاد</h2>

                 
                   <Grid item xs={12}>
                      <TextField
                      value={newname}
                        name="name"
                        variant="outlined"
                        required
                        fullWidth
                        focused
                         label="الاسم"
                         onChange={(e)=>{setname(e.target.value)}}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="country"
                        variant="outlined"
                        required
                        fullWidth
                        label="الدولة"
                        value={aqarCountry}
                         onChange={(e)=>{setaqarCountry(e.target.value)}}
                       />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="city"
                        value={aqarCity}
                        onChange={(e)=>{setaqarCity(e.target.value)}}
                        variant="outlined"
                        required
                        fullWidth
                        label="المدينة"
                       />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="area"
                        value={aqarArea}
                        onChange={(e)=>{seraqarArea(e.target.value)}}
                        variant="outlined"
                        required
                        fullWidth
                        label="المنطقة"
                       />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="floor"
                        value={aqarfloor}
                        onChange={(e)=>{setaqarfloor(e.target.value)}}
                        variant="outlined"
                        required
                        fullWidth
                        label="الطابق"
                       />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="totalarea"
                        value={aqartotal_area}
                        onChange={(e)=>{setaqartotal_area(e.target.value)}}
                        variant="outlined"
                        required
                        fullWidth
                        label="المساحة الكلية"
                        />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="street"
                        value={aqarstreet}
                        onChange={(e)=>{setaqarstreet(e.target.value)}}
                        variant="outlined"
                        required
                        fullWidth
                        label="الشارع"
                       />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="num_bathrooms"
                        value={aqarnum_bathrooms}
                        onChange={(e)=>{setaqarnum_bathrooms(e.target.value)}}
                        variant="outlined"
                        required
                        fullWidth
                        label="عدد غرف النوم"
                       />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="num_bedrooms"
                        value={aqarnum_bedrooms}
                        onChange={(e)=>{setaqarnum_bedrooms(e.target.value)}}
                        variant="outlined"
                        required
                        fullWidth
                        label="عدد غرف النوم"
                       />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="start_time"
                        value={startTime}
                        onChange={(e)=>{setstartTime(e.target.value)}}
                        variant="outlined"
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
                        value={endTime}
                        onChange={(e)=>{setendTime(e.target.value)}}
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
                        value={minimumbid}
                        onChange={(e)=>{setminimum(e.target.value)}}
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
                        value={aqardescription}
                        onChange={(e)=>{setaqardescription(e.target.value)}}
                        variant="outlined"
                        fullWidth
                        multiline
                        label="الوصف"
                       />
                    </Grid>
                    <Grid item xs={12}>
                      <Input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={(e)=>{setimage(e.target.files[0])}}
                        multiple={false}
                       />
                    </Grid>
                  <Button
                  className="m-3"
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    التعديل
                  </Button>
                  </Grid>

                </form>
                
          
       {showAlert && (
      <Alert severity="success" className="custom-alert"sx={{display:'flex',alignItems:'center',justifyContent:'center'}}  >
        <div className="d-flex justify-content-center align-items-center">
             <h4>يتم الآن التعديل</h4>
             <CheckIcon/>
        </div>
        </Alert>
    )}
     {showAlert1 && (
      <Alert severity="error" className="custom-alert"sx={{display:'flex',alignItems:'center',justifyContent:'center'}}  >
        <div className="d-flex justify-content-center align-items-center">
             <h4>{error.message} </h4>
             <CheckIcon/>
        </div>
        </Alert>
    )}
    </Container>
  );
}

export default EditAqarDetails;