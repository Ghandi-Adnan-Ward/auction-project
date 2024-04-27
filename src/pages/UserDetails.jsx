import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button, TextField } from "@material-ui/core";
import CheckIcon from '@mui/icons-material/Check';
import Spinner from '../components/UI/Spinner/Spinner';
import { Alert } from "@mui/material";
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
import PublicIcon from '@mui/icons-material/Public';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import CropDinIcon from '@mui/icons-material/CropDin'
import BedroomParentIcon from '@mui/icons-material/BedroomParent'
import moment from 'moment';

const AqarDetails = () => {
  const { slug } = useParams();
  const [UserDetails, setUserDetails] = useState('');
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showAlert1, setShowAlert1] = useState(false);
  const jwt_token=localStorage.getItem('jwt_token');
      
 
  const UserUrl='';
  const UserAuctions='';

  useEffect(() => {
    const fetchData = async () => {
        setLoading(true);
        setShowAlert(true);

      try {
        const response = await axios.get(UserUrl,config);
             setUserDetails(response.data);            
             setShowAlert(false);
             setLoading(false);   
        }
             
       catch (error) {
        setError(error.message);
        setShowAlert(false);
        setShowAlert1(true);
        console.error('Error fetching data:', error);
      }
    };
    fetchData()

    
  }, []);
  const StatusUrl='';
  const config={
    headers:{
      Authorization:`Bearer ${jwt_token}`
    }
  }
     const getUserDetails=()=> {

      try{
        axios.get(WinnerUrl).then(res =>
          {
            
            setWinnerData(res.data.winner.first_name)
            WinnersetHighestBid(res.data.winner.last_name)
            console.log(res.data.winner)
            console.log(res.data.winner.first_name)
           }
             
        )
      }
      catch(error){
        console.error(error)
      }
    }
   
 
   
  
    
 

  

  // Find the selected car based on the slug
  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, [aqarData]);
   
 
 

  return (
    <Helmet title={aqarData.name}>
    {loading ? <Spinner /> :

    <section>
      <Container>
        <Row>
          <Col sm='6' md='6' lg="6">
            <img src={`http://localhost:8000/storage/${aqarData.image}`} alt="" className="w-75 h-75" />
          </Col>

          <Col sm='6' md='6' lg="6">
            <div className="car__info">
              <h2 className="section__title ">{aqarData.name}</h2>

             
              <span className=" d-flex align-items-center gap-1 section__description">
                 <h3>
                    <WbIncandescentIcon htmlColor="#f9a826" fontSize="large"/>
                  {"الوصف: "}
                  {aqarData.description}
                 </h3>
                 {/* <br />
                 <h3>
                    <WbIncandescentIcon htmlColor="#f9a826" fontSize="large"/>
                  {"السعر الحالي للمزاد: "}
                  {aqarData.currentBid}
                 </h3> */}
                </span>

              <div
                className=" d-flex align-items-center justify-content-between"
                style={{ columnGap: "4rem" }}
              >
                <span className=" d-flex align-items-center gap-1 section__description">
                 <h3><PublicIcon htmlColor="#f9a826" fontSize="large"/>
                  {"البلد: "}
                  {aqarData.details?.country}
                 </h3>
                </span>

                <span className=" d-flex align-items-center gap-1 section__description">
                  <h3>
                    <LocationCityIcon htmlColor="#f9a826" fontSize="large"/>
                  {"المدينة: "}
                  {aqarData.details?.city}
                  </h3>
                </span>

                
              </div>
              <div
                className=" d-flex align-items-center justify-content-center mt-9"
                style={{ columnGap: "2.8rem" }}
              ><span className=" d-flex align-items-center gap-1 section__description">
              <h3>
              <LocationCityIcon htmlColor="#f9a826" fontSize="large"/>
               {"المنطقة: "}
              {aqarData.details?.area}
              </h3>
            </span></div>
              
              <div
                 style={{ columnGap: "2.8rem" }}
              >
                <span className=" d-flex align-items-center gap-1 section__description1">
                  <h3>
                    <AddRoadIcon htmlColor="#f9a826" fontSize="large"/>
                  {"الشارع: "}
                  {aqarData.details?.street}
                  </h3>
                </span>
                </div>
                <div
                 style={{ columnGap: "2.8rem" }}
              >
                 <span className=" d-block align-items-center gap-1 section__description1">
                 <h3>
                 <LocationCityIcon htmlColor="#f9a826" fontSize="large"/>
                {"الطابق: "}
                  {aqarData.details?.floor}
                 </h3>
                 <h3>
                    <CropDinIcon htmlColor="#f9a826" fontSize="large"/>
                  {"المساحة الكلية: "}
                  {aqarData.details?.total_area}
                 </h3>
                 <h3>
                    <BedroomParentIcon htmlColor="#f9a826" fontSize="large"/>
                  {"عدد غرف النوم: "}
                  {aqarData.details?.num_bedrooms}
                 </h3>
                </span>

                </div>
                <div
               ><span className=" d-flex  gap-1 section__description2">
              <h3>
              <i
                className="ri-timer-flash-line"
                style={{ color: "#f9a826" }}
              ></i>{"وقت انتهاء المزاد:"}
              {aqarData.end_time}
              </h3>
            </span></div>
            </div>
          </Col>
          
        
         
        </Row>
      </Container>
    </section>
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

export default AqarDetails;
