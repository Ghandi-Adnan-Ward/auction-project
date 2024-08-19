import React,{useState} from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import logoanything from "../../../assets/all-images/Addbazar-img/anything.png"
import Container from "@mui/material/Container";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import { Alert } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { MenuItem } from "@material-ui/core";
const AddEvaluation = (props) => {
  const [showAlert, setShowAlert] = useState(false);
  const[Loading,setLoading]=useState(false)
  const navigate=useNavigate()
  const[showAlert1, setShowAlert1] = useState(false);

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
      setShowAlert(true)
      setLoading(true)
       const category_id=3;
       const status="pending";
      const formAddEvaluation = new FormData();
      formAddEvaluation.append('name',event.target.name.value);
      formAddEvaluation.append('status',status);
      formAddEvaluation.append('category_id',category_id);
      formAddEvaluation.append('description',event.target.description.value);
 
      formAddEvaluation.append('start_time',event.target.start_time.value);
      formAddEvaluation.append('end_time',event.target.end_time.value);
      formAddEvaluation.append('image',image);
     
      const jwt_token=localStorage.getItem('jwt_token');
      const config={
        headers:{
          Authorization:`Bearer ${jwt_token}`
        }
      }
      try {
         axios.post('http://localhost:8000/api/v1/user/other-auctions', formAddEvaluation,config)
         .then(res=>{
          setShowAlert(false)
          setLoading(false)
           navigate('/other')
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
          aria-controls="panel4d-content"
          id="panel4d-header"
        >
          <Typography component="h1" variant="h5">
          <img src={logoanything} alt="Logo"    width="40" height="40"  style={{ verticalAlign: '-0.200em'}}  />
            إضافة عرض للتقييم
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
           
          </Typography>
        </AccordionSummary>
             <Container component="main" maxWidth="xs">
               <div  >
                <Typography component="h1" variant="h4" className="d-flex justify-content-center">
                     <img src={logoanything} alt="Logo"    width="40" height="40"  style={{ verticalAlign: '-0.200em'}} className="mb-2" />
                </Typography>
                <form onSubmit={handleSubmit}>
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
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="description"
                    label="وصف العرض"
                    multiline
                    rows={4}
                  />
                  </Grid>
                  <Grid item xs={12}>
                      <TextField
                        name="start_time"
                        variant="outlined"
                        required
                        fullWidth
                        label="وقت بداية التقييم"
                        type="datetime-local"
                        InputLabelProps={{
                          shrink:true
                        }}
                      />
                        
                    </Grid>
                  <Grid item xs={12} sx={{mt:2}}>
                      <TextField
                        name="end_time"
                        variant="outlined"
                        required
                        fullWidth
                        label="وقت انتهاء التقييم"
                        type="datetime-local"
                        InputLabelProps={{
                          shrink:true
                        }}
                      />
                        
                    </Grid>
                    
                 
                  <Grid item xs={12} sx={{ mt: 2 }}>
                    <input
                     type="file" 
                     name="image"
                     required
                      accept="image/*" 
                      onChange={changeHandler}
                      multiple={false} />
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
                  يتم الآن تحميل عرضك
                  <CheckIcon/>
                </Alert>
      )}
       {showAlert1 && (
      <Alert severity="error" className="custom-alert"sx={{display:'flex',alignItems:'center',justifyContent:'center'}}  >
        <div className="d-flex justify-content-center align-items-center">
        <h4>حدث خطأ يرجى المحاولة لاحقا</h4>
             <CheckIcon/>
        </div>
        </Alert>
    )}
    </div>
  )
}
export default AddEvaluation
