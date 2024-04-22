import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button, TextField } from "@material-ui/core";
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import CheckIcon from '@mui/icons-material/Check';
import Spinner from '../components/UI/Spinner/Spinner';
import { Alert } from "@mui/material";
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';

const CarDetails = () => {
  const { slug } = useParams();
  const [carData, setCarData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showAlert1, setShowAlert1] = useState(false);
  const [error, setError] = useState('');
  const [bid, setBid] = useState(0);
  const [highestBid, setHighestBid] = useState(carData.minimum_bid);

  const url='http://localhost:8000/api/v1/user/auctions/'+carData.id+'/bid';

  const jwt_token=localStorage.getItem('jwt_token');
  const config={
    headers:{
      Authorization:`Bearer ${jwt_token}`
    }
  }

  const handleBidSubmit = (event) => {
    event.preventDefault();
    const bbid=new FormData();
    bbid.append('bid_amount',event.target.bid_amount.value)
    try {
     
      axios.post(url,bbid,config )
      .then(res=>{
       console.log(res.data)
        console.log(config.headers)
      }
      ) 
      }
      catch (error) {
      console.error('Error:', error);
    }
    const bid_amount = event.target.bid_amount.value;
    if ( bid_amount > highestBid  ) {
      setHighestBid(bid_amount);
      // sendBidToBackend(bid_amount)
    }
    
    setBid(0)
  }

  const handleBidChange = (e) => {
    const newBid = parseFloat(e.target.value);
    setBid(newBid);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setShowAlert(true);

      try {
        const response = await axios.get('http://localhost:8000/api/v1/user/specificAuction/'+slug);
        setCarData(response.data);
        setShowAlert(false);
        setLoading(false);
        console.log(response.data)
      } catch (error) {
        setError(error.message);
        setShowAlert(false);
        setShowAlert1(true);
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [slug]);

  // Find the selected car based on the slug
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [carData]);
  
  return (
    <Helmet title={carData.name}>
      {loading ? <Spinner /> :

      <section>
        <Container>
          <Row>
            <Col sm='6' md='6' lg="6">
              <img src={`http://localhost:8000/storage/${carData.image}`} alt="" className="w-75 h-75" />
            </Col>

            <Col sm='6' md='6' lg="6">
              <div className="car__info">
                <h2 className="section__title ">{carData.name}</h2>
                <span className=" d-flex align-items-center gap-1 section__description">
                  <h3>
                    <WbIncandescentIcon fontSize="large" htmlColor="#f9a826" />
                        {"الوصف: "}{carData.description}
                  </h3>
                </span>
                <div
                  className=" d-flex align-items-center justify-content-between"
                  style={{ columnGap: "4rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                  <h3>
                  <i
                      className="ri-roadster-line"
                      style={{ color: "#f9a826" }}
                    ></i>{"model: "}
                    {carData.details?.model}
                  </h3>
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <h3>
                    <i
                      className="ri-settings-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{"brand: "}
                    {carData.details?.brand}
                    </h3>
                  </span>

                  
                </div>
                <div
                  className=" d-flex align-items-center justify-content-center mt-9"
                  style={{ columnGap: "2.8rem" }}
                ><span className=" d-flex align-items-center gap-1 section__description">
                <h3>
                <i
                  className="ri-timer-flash-line"
                  style={{ color: "#f9a826" }}
                ></i>{"engine_type: "}
                {carData.details?.engine_type}
                </h3>
              </span></div>
                
                <div
                  style={{ columnGap: "2.8rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description1">
                    <h3>
                    <i className="ri-map-pin-line" style={{ color: "#f9a826" }}></i>{"manufacturing_year: "}
                    {carData.details?.manufacturing_year}
                    </h3>
                  </span>
                  </div>
                  <div
                  style={{ columnGap: "2.8rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description1">
                  <h3>
                  <i
                      className="ri-wheelchair-line"
                      style={{ color: "#f9a826" }}
                    ></i>{"registration_year: "}
                    {carData.details?.registration_year}
                  </h3>
                  </span>

                  </div>
                  <div
                  style={{ columnGap: "2.8rem" }}
                ><span className=" d-flex gap-1 section__description1">
                <h3>
                  {"end_time:"}
                {carData.end_time}
                <InsertInvitationIcon fontSize="large" htmlColor="#f9a826"/>

                </h3>
              </span></div>
              </div>
            </Col>
            <form onSubmit={handleBidSubmit}>
                <div className="form">
                <h1 className="section__title">ادخل قيمة مزادك</h1>

                  <TextField 
                    className="input p-2 "
                    onChange={handleBidChange}
                    value={bid}
                    id="bid"
                    name="bid_amount"
                    variant="standard" 
                  />
                  <br />
                  <Button type="submit"  className="mt-2 p-2" variant="contained" color="primary">مزايدة</Button>
                </div>
                </form>
          
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

export default CarDetails;