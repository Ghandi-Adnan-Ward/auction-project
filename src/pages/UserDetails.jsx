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
import EmailIcon from '@mui/icons-material/Email';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import CarAuctionItem from "../components/UI/Item/CarAuctionItem";
import AuctionCarUser from "../components/UI/Item/AuctionCarUser";
import AuctionAqarUser from "../components/UI/Item/AuctionAqarUser";
import AuctionOtherUser from "../components/UI/Item/AuctionOtherUser";
const UserDetails = () => {
  const { slug } = useParams();
  const [UserDetails, setUserDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showAlert1, setShowAlert1] = useState(false);
  const jwt_token=localStorage.getItem('jwt_token');
  const [carAuction,setCarAuctions]=useState([])     
  const config={
    headers:{
      Authorization:`Bearer ${jwt_token}`
    }
  }
  const UserUrl='http://localhost:8000/api/v1/user/details';
  const UserAuctions='http://localhost:8000/api/v1/user/my-auctions';
  const AqarUserAuctions=''
  const OtherUserAuctions=''
  useEffect(() => {
    const fetchData = async () => {
        setLoading(true);
        setShowAlert(true);

      try {
        const response = await axios.get(UserUrl,config);
        const auctions = await axios.get(UserAuctions,config);
             setUserDetails(response.data); 
             setCarAuctions(auctions.data)
              console.log(auctions.data[0])
             console.log(auctions.data[0].name)           
             console.log(response.data.details.id)           
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
  
    //  const getUserDetails=()=> {

    //   try{
    //     axios.get(WinnerUrl).then(res =>
    //       {
            
    //         setWinnerData(res.data.winner.first_name)
    //         WinnersetHighestBid(res.data.winner.last_name)
    //         console.log(res.data.winner)
    //         console.log(res.data.winner.first_name)
    //        }
             
    //     )
    //   }
    //   catch(error){
    //     console.error(error)
    //   }
    // }
  // Find the selected car based on the slug
  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, [UserDetails]);

  return (
    <Helmet title={UserDetails.details?.first_name}>
    {loading ? <Spinner /> :

    <section>
      <Container>
        <Row>
          {/* <Col sm='6' md='6' lg="6">
            <img src={`http://localhost:8000/storage/${aqarData.image}`} alt="" className="w-75 h-75" />
          </Col> */}

          <Col sm='3' md='4' lg="6">
            <div className="car__info">
              <h2 className="section__title ">
              <ContactEmergencyIcon fontSize="200px" htmlColor="#f9a826"/> {'اسم الأول:'} {UserDetails.details?.first_name}
               
                </h2>
                 
                </div>
                </Col>
                <Col sm='3' md='4' lg="6">
            <div className="car__info">
              <h2 className="section__title ">
              <ContactEmergencyIcon fontSize="200px" htmlColor="#f9a826"/> {'اسم الثاني:'} {UserDetails.details?.last_name}
               
                </h2>
                </div>
                </Col>
              
        </Row>
        <Row>
        <Col sm='3' md='4' lg="12">
            {/* <div className="car__info">
              <h2 className="section__title ">
              <EmailIcon fontSize="200px" htmlColor="#f9a826"/> {'الإيميل:'} {UserDetails.details?.email}
               
                </h2>
                </div> */}
                <div className="car__info">
              <h2 className="section__title ">
              <EmailIcon fontSize="200px" htmlColor="#f9a826"/> {'الإيميل:'} {UserDetails.details?.email}
               
                </h2>
                 
                </div>
                </Col>
        </Row>
        <Row>
        <Col lg="12" className="text-center mb-5">
                 <h2 className="section__title">  مزاداتي </h2>
              </Col>

        {carAuction.map((auction) => {
            if(auction.category_id ===1){
               return <AuctionCarUser key={auction.id} auction={auction} />
            }
            else if(auction.category_id ===2){
              return <AuctionAqarUser key={auction.id} auction={auction} />
            }
            else if(auction.category_id ===3){
              return <AuctionOtherUser key={auction.id} auction={auction} />
            }
        }
          

                   )}
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
             <h4>يتم الآن  </h4>
             <CheckIcon/>
        </div>
        </Alert>
    )}
   </Helmet>
  );
 
};

export default UserDetails;
