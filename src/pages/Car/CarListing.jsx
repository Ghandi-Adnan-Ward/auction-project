import React, { useState, useEffect } from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/CommonSection/CommonSection";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Item1 from "../../components/UI/Item/Item1";
import { Alert, TextField,Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import Spinner from '../../components/UI/Spinner/Spinner';
import { Zoom } from "react-awesome-reveal";

const CarListing = () => {
  const navigate = useNavigate();
  const[carData, setCarData] = useState([]);
  const[loading,setloading]=useState(false)
  const[showAlert, setShowAlert] = useState(false);
  const[showAlert1, setShowAlert1] = useState(false);
  const[error,setError]=useState('error')
  const[text,setText]=useState('')
  const [intervalId, setIntervalId] = useState(null);

  const jwt_token=localStorage.getItem('jwt_token');
  const config={
    headers:{
      Authorization:`Bearer ${jwt_token}`
    }
  }
  

  let handleChange = (event) => {
    setText(event.target.value);
};

let handleSubmit = async (event) => {
  event.preventDefault();
  console.log(text);
  if (intervalId) {
    clearInterval(intervalId);
    setIntervalId(null); // Reset the interval ID
  }
  if (text === "") {
    fetchData();
  } else
   {
    try {
      const res = await axios.get('http://localhost:8000/api/v1/user/search/cars?q=' + text, config);
      setCarData(res.data);
      console.log(res.data);
    } catch (error) {
      console.error('Error searching data:', error);
    }
   }
   setText(""); // Clear the TextField after submission

};
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
    setTimeout(() => {
      setShowAlert1(false)
      navigate('/')
    }, 6000);
   }
};
  useEffect(() => {  
    const id = setInterval(async () => {
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
        setTimeout(() => {
          setShowAlert1(false)
          navigate('/')
        }, 6000);
       }
     }, 5000); // Update data every 10 seconds
     setIntervalId(id);

    return () => clearInterval(id);
    // fetchData();
  }, []);
  useEffect(() => {
    fetchData()
    window.scrollTo(0, 0);
  }, []);
  return (
       <Helmet title="Cars">
        <Zoom triggerOnce>
        <CommonSection title="السيارات" />

        </Zoom>
      {loading ? <Spinner /> :
      <Container className="mt-5">
        <Row >
        <div className="mb-5  ">
            <form onSubmit={handleSubmit} className="d-flex align-items-center justify-content-center">
                <TextField onChange={handleChange} value={text} id="cars" label="Cars Search" variant="outlined" className="w-50"     />
                 
            </form>
        </div>
        </Row>
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
               <h4>حدث خطأ يرجى المحاولة لاحقا</h4>
               <CheckIcon/>
          </div>
          </Alert>
      )}
    </Helmet>
   );
};

export default CarListing;