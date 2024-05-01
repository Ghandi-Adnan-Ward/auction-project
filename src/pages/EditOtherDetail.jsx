 //Aqars
 import React, { useState, useEffect } from "react";
 import { Container, Row } from "reactstrap";
 import Helmet from "../components/Helmet/Helmet";
 import CommonSection from "../components/UI/CommonSection/CommonSection";
 import axios from 'axios';
 import { useNavigate, useParams } from "react-router-dom";
 import { Alert } from '@mui/material';
 import CheckIcon from '@mui/icons-material/Check';
 import Spinner from '../components/UI/Spinner/Spinner';
 import EditOtherDetails from "./EditOtherDetails";
 const EditOtherDetail = () => {
   const { slug } = useParams();
   const navigate = useNavigate();
   const[OtherData, setOtherData] = useState([]);
   const[loading,setloading]=useState(false)
   const[showAlert, setShowAlert] = useState(false);
   const[showAlert1, setShowAlert1] = useState(false);
   const[error,setError]=useState('error')

    useEffect(() => {
    const fetchData =  async () => {
        setloading(true);
        setShowAlert(true);

      try {
        const response =  await axios.get('http://localhost:8000/api/v1/user/specificAuction/'+slug);
             setOtherData(response.data);
             setShowAlert(false);
             setloading(false);
             console.log(response.data)
      } catch (error) {
        setError(error.message);
        setShowAlert(false);
        setShowAlert1(true);
        console.error('Error fetching data:', error);
      }
    };
    fetchData()
  }, []);
 
   return (
        <Helmet title="Cars">
       {loading ? <Spinner /> :
       <Container>
         <Row>
              <EditOtherDetails
                otherData={OtherData}
                key={OtherData.id}
              />                       
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
 
 export default EditOtherDetail;