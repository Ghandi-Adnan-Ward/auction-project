 //Other
import React, { useState, useEffect } from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection/CommonSection";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Item3 from "../components/UI/Item/Item3";
import { Alert } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import Spinner from '../components/UI/Spinner/Spinner';
import { Zoom } from "react-awesome-reveal";
 const OtherListing = () => {
   const navigate = useNavigate();
   const [Data, setData] = useState([]);
   const[loading,setloading]=useState(false)
   const[showAlert, setShowAlert] = useState(false);
   const[showAlert1, setShowAlert1] = useState(false);
   const[error,setError]=useState('error')

   useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      setShowAlert(true);
  
      try {
        const response = await axios.get('http://localhost:8000/api/v1/user/other-auctions');
        setData(response.data);
        console.log(response.data);
        setShowAlert(false);
        setloading(false);
      } catch (error) {
        setError(error)
        setShowAlert(false)
        setShowAlert1(true);
        console.error('Error fetching data:', error);
       }
    };
  
    fetchData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
   return (
        <Helmet title="Others">
          <Zoom>
          <CommonSection title="أخرى" />

          </Zoom>
       {loading ? <Spinner /> :
       <Container>
         <Row>
           {Data.map((item) => (
             <Item3
               item={item}
               key={item.id}
               />
           ))}
         </Row>
       </Container>
       }
       {showAlert && (
       <Alert severity="success" className="custom-alert"sx={{display:'flex',alignItems:'center',justifyContent:'center'}}  >
         <div className="d-flex justify-content-center align-items-center">
              <h4>يتم الآن التحميل</h4>
              <CheckIcon/>
         </div>
         </Alert>
     )}
      {showAlert1 && (
       <Alert severity="error" className="custom-alert"sx={{display:'flex',alignItems:'center',justifyContent:'center'}}  >
         <div className="d-flex justify-content-center align-items-center">
              <h4>يتم الآن {error.message} </h4>
              <CheckIcon/>
         </div>
         </Alert>
     )}
     </Helmet>
    );
 };
 
 export default OtherListing;