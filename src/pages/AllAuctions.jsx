//AllAuctions
import React, { useState, useEffect } from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection/CommonSection";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Item1 from "../components/UI/Item/Item1";
import Item2 from "../components/UI/Item/Item2";
import Item3 from "../components/UI/Item/Item3";
import { Alert, TextField } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import Spinner from '../components/UI/Spinner/Spinner';
const AllAuctions = () => {
  const navigate = useNavigate();
  const [Data, setData] = useState([]);
  const[loading,setloading]=useState(false)
  const[showAlert, setShowAlert] = useState(false);
  const[showAlert1, setShowAlert1] = useState(false);
  const[error,setError]=useState('error')
  const [intervalId, setIntervalId] = useState(null);

  const[text,setText]=useState('')
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
    setText("");
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    if (text == "") {
      getData();
    } else {
      const res = await axios.get('http://localhost:8000/api/v1/user/search/all?q='+text,config)
      setData(res.data)
      console.log(res.data)
     }
     setText('')

  };
  const getData = async () => {
    setloading(true);
    setShowAlert(true);

    try {
      await axios.get('http://localhost:8000/api/v1/user/auctions')
        .then(res => {
          setData(res.data);
          console.log(res.data);
          setShowAlert(false);
          setloading(false);
        });
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
        const response = await axios.get('http://localhost:8000/api/v1/user/other-auctions');
        setData(response.data);
        console.log(response.data)
        setShowAlert(false);
        setloading(false);
      } catch (error) {
        setError(error);
        setShowAlert(false);
        setShowAlert1(true);
        console.error('Error fetching data:', error);
        setTimeout(() => {
          setShowAlert1(false);
          navigate('/');
        }, 6000);
      }
    }, 5000);
  
    setIntervalId(id);
  
    return () => clearInterval(id);
  }, []);
  useEffect(() => {
   
    getData();
  }, []);

  return (
    <Helmet title="All">
      <CommonSection title="الكل" />
      {loading ? <Spinner /> :
      <Container className="mt-5">
        <Row >
        <div  className="mb-5  ">
            <form onSubmit={handleSubmit} className="d-flex align-items-center justify-content-center">
                <TextField onChange={handleChange} value={text} id="all" label="البحث السريع" variant="outlined" className="w-50"    required />
                 
            </form>
        </div>
        </Row>
        <Row>
          {Data.map((item) => {
            if (item.category_id === 1) {
              return <Item1 key={item.id} item={item} />;
            } 
            else if (item.category_id === 2) {
              return <Item2 key={item.id} item={item} />;
            }
            else {
              return <Item3 key={item.id} item={item} />;
            }
          })}
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

export default AllAuctions;