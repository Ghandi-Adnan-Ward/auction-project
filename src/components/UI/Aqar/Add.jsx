import  React,{useState} from "react";
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
 
const Add = (props) => {

  const [image, setImage] = useState('')
  const changeHandler = (e)=>{
    setImage(e.target.files[0]);
    console.log(e.target.files[0])
}
   
  
    const handleSubmit = async (event) => {
      event.preventDefault(); 
      const category_id=3;
       const status="ongoing";
      const formAdd = new FormData();
      formAdd.append('name',event.target.name.value);
      formAdd.append('status',status);
      formAdd.append('category_id',category_id);
      formAdd.append('description',event.target.description.value);
      formAdd.append('minimum_bid',event.target.price.value);
      formAdd.append('end_time',event.target.end_time.value);
      formAdd.append('image',image);
       
    
       const jwt_token=localStorage.getItem('jwt_token');
        const config={
          headers:{
            Authorization:`Bearer ${jwt_token}`
          }
        }
      try {
         axios.post('http://localhost:8000/api/v1/user/other-auctions', formAdd,config)
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
             <Container component="main" maxWidth="xs">
               <div  >
                <Typography component="h1" variant="h4" className="d-flex justify-content-center">
                     <img src={logoanything} alt="Logo"    width="40" height="40"  style={{ verticalAlign: '-0.200em'}} className="mb-2" />
                </Typography>
                <form onSubmit={handleSubmit}>
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
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="description"
                    label="وصف الغرض"
                    multiline
                    rows={4}
                  />
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
                    <input
                     type="file" 
                     name="image"
                      accept="image/*" 
                      onChange={changeHandler}
                      multiple={false} />
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
    </div>
  )
}
export default Add
