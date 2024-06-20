// // // CarListing.js
import React, { useState, useEffect } from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection/CommonSection";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Item1 from "../components/UI/Item/Item1";
import { Alert } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import Spinner from '../components/UI/Spinner/Spinner';
import { Zoom } from "react-awesome-reveal";

const CarListing = () => {
  const navigate = useNavigate();
  const[carData, setCarData] = useState([]);
  const[loading,setloading]=useState(false)
  const[showAlert, setShowAlert] = useState(false);
  const[showAlert1, setShowAlert1] = useState(false);
  const[error,setError]=useState('error')
  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      setShowAlert(true);
  
      try {
        const response = await axios.get('http://localhost:8000/api/v1/user/car-auctions');
        setCarData(response.data);
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
       <Helmet title="Cars">
        <Zoom>
        <CommonSection title="السيارات" />

        </Zoom>
      {loading ? <Spinner /> :
      <Container>

       <Row>
          {carData.map((item) => (
            <Item1
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

export default CarListing;