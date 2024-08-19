import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "reactstrap";
import Helmet from "../../components/Helmet/Helmet";
import axios from "axios";
import { Button, TextField } from "@material-ui/core";
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import CheckIcon from '@mui/icons-material/Check';
import Spinner from '../../components/UI/Spinner/Spinner';
import { Alert } from "@mui/material";
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
import PaidIcon from '@mui/icons-material/Paid';
import { useNavigate } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";

const CarDetails = (props) => {
  const {name,minimum_bid ,end_time,details,image,id ,status,description,current_bid,type,increment_amount,model_link} =  props.carData ;
  const auctionActive = props.auctionActive;
  const auctionEnded = props.auctionEnded;
  const currentTime = props.currentTime;
  const remaing = props.remaing;
  const WinnerData = props.WinnerData;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showAlert1, setShowAlert1] = useState(false);
  const [error, setError] = useState('');
  const [bid, setBid] = useState(0);
  const [highestBid, setHighestBid] = useState(minimum_bid);
  
  const handleViewImage = () => {
    navigate('/cars/image/'+id);
  };
  const jwt_token = localStorage.getItem('jwt_token');
  
  const config={
    headers:{
      Authorization:`Bearer ${jwt_token}`
    }
  }

   const formatTime = (totalSeconds) => {
    const months = Math.floor(totalSeconds / (3600 * 24 * 30.4));
    const remainingDays = Math.floor((totalSeconds % (3600 * 24 * 30.4)) / (3600 * 24));
    const remainingHours = Math.floor((totalSeconds % (3600 * 24 )) / 3600);
    const remainingMinutes = Math.floor((totalSeconds % 3600) / 60);
    const remainingSeconds = totalSeconds % 60;

    return `${months} شهر ${remainingDays} يوم ${remainingHours} ساعة ${remainingMinutes} دقيقة ${remainingSeconds} ثانية`;
  };

  const url1 = 'http://localhost:8000/api/v1/user/regular-auctions/'+id+'/bid';
  const url2 = 'http://localhost:8000/api/v1/user/live-auctions/'+id+'/bid';
  const url3 = 'http://localhost:8000/api/v1/user/anonymous-auctions/'+id+'/bid';

  const handleBidSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setShowAlert(true);
    const bbid = new FormData();

    if (type !== 'live') {
      bbid.append('bid_amount', event?.target.bid_amount.value);
    }

    try {
      if (type === 'live') {
        axios.post(url2, current_bid, config)
          .then(res => {
            console.log(jwt_token);
            console.log(config);
            setLoading(false);
            setShowAlert(false);
            console.log(res.data);
            navigate('/cars/'+id);
          })
          .catch(error => {
            setError('حدث خطأ يرجى المحاولة لاحقا');
            setShowAlert1(true);
            setShowAlert(false);
            setTimeout(() => {
              navigate('/cars');
            }, 7000);
          });
      } else if (type === 'regular') {
        axios.post(url1, bbid, config)
          .then(res => {
            setLoading(false);
            setShowAlert(false);
            console.log(res.data);
            navigate('/cars/'+id);
          })
          .catch(error => {
            setError('يرجى ادخال سعر أعلى من السعر الحالي');
            setShowAlert1(true);
            setShowAlert(false);
            setTimeout(() => {
              navigate('/cars');
            }, 7000);
          });
      } else if (type === 'anonymous') {
        axios.post(url3, bbid, config)
          .then(res => {
            setLoading(false);
            setShowAlert(false);
            console.log(res.data);

            navigate('/cars/'+id);
          })
          .catch(error => {
            setError('حدث خطأ يرجى المحاولة لاحقا');
            setShowAlert1(true);
            setShowAlert(false);
            setTimeout(() => {
              navigate('/cars');
            }, 7000);
          });
      }
    } catch (error) {
      setError('حدث خطأ يرجى المحاولة لاحقا');
      setShowAlert1(true);
      setShowAlert(false);
    }
    setBid(0);
  }

  const handleBidChange = (e) => {
    const newBid = parseFloat(e.target.value);
    setBid(newBid);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <Helmet title={name}>
      {loading ? <Spinner /> :
        <section>
          <Container>
            <Row>
              <Col sm='6' md='6' lg="6">
                <Zoom >
                  <img src={`http://localhost:8000/storage/${image}`} alt="car" className="w-75 h-75" />

                  {model_link!==null &&
                    <Button 
                    className="aligm-item-center m-4"
                    variant="contained" 
                    color="secondary" 
                    onClick={handleViewImage}
                  >
                    عرض الصورة
                  </Button>
                             }
                </Zoom>
              </Col>

              <Col sm='6' md='6' lg="6">
                <Zoom >
                  <div className="car__info">
                    <h2 className="section__title ">{name}</h2>
                    <span className="d-flex align-items-center gap-1 section__description">
                      <h3>
                        <WbIncandescentIcon fontSize="large" htmlColor="#f9a826" />
                        {"الوصف: "}{description}
                      </h3>
                    </span>
                    {type !== 'anonymous' ?
                      <div>
                        <h6 className="text-center mt-3" style={{ fontSize: '25px', color: '#7c8a97' }}>
                          <PaidIcon />{'السعر الابتدائي:'}
                          <br />
                          ${minimum_bid}
                        </h6>
                        <h6 className="text-center mt-3" style={{ fontSize: '25px' }}>
                          <PaidIcon />{'السعر الحالي:'}
                          <br />
                          ${current_bid}
                        </h6>
                      </div>
                      : <br />}
                    <div className="d-flex align-items-center justify-content-between mt-3" style={{ columnGap: "4rem" }}>
                      <span className="d-flex align-items-center gap-1 section__description">
                        <h3>
                          <i className="ri-roadster-line" style={{ color: "#f9a826" }}></i>{"الموديل: "}
                          {details?.model}
                        </h3>
                      </span>

                      <span className="d-flex align-items-center gap-1 section__description">
                        <h3>
                          <i className="ri-settings-2-line" style={{ color: "#f9a826" }}></i>{"الصنف: "}
                          {details?.brand}
                        </h3>
                      </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-center mt-3" style={{ columnGap: "2.8rem" }}>
                      <span className="d-flex align-items-center gap-1 section__description">
                        <h3>
                          <i className="ri-timer-flash-line" style={{ color: "#f9a826" }}></i>{"نوع المحرك: "}
                          {details?.engine_type}
                        </h3>
                      </span>
                    </div>
                    <div className="mt-3" style={{ columnGap: "2.8rem" }}>
                      <span className="d-flex align-items-center gap-1 section__description1">
                        <h3>
                          <i className="ri-map-pin-line" style={{ color: "#f9a826" }}></i>{"سنة التصنيع: "}
                          {details?.manufacturing_year}
                        </h3>
                        </span>
                    </div>
                    <div className="mt-3" style={{ columnGap: "2.8rem" }}>
                      <span className="d-flex align-items-center gap-1 section__description1">
                        <h3>
                          <i className="ri-wheelchair-line" style={{ color: "#f9a826" }}></i>{"سنة التسجيل: "}
                          {details?.registration_year}
                        </h3>
                      </span>
                    </div>
                    <div className="mt-3" style={{ columnGap: "2.8rem" }}>
                      <span className="d-flex gap-1 section__description1">
                        <InsertInvitationIcon fontSize="large" htmlColor="#f9a826" />
                        <h3>{"وقت نهاية المزاد:"} {end_time}</h3>
                      </span>
                    </div>
                  </div>
                  
                </Zoom>
              </Col>
              <Zoom >
                {auctionActive && !auctionEnded ?
                  <Form onSubmit={handleBidSubmit}>
                    <div className="form m-4">
                      <h1 className="section__title">ادخل قيمة مزادك</h1>
                      {type !== 'live' ?
                        <TextField 
                          className="input w-25 p-2"
                          onChange={handleBidChange}
                          value={bid}
                          id="bid"
                          name="bid_amount"
                          variant="standard" 
                        />
                        : <h1>اضغط لأضافة {increment_amount} إلى {current_bid} </h1>}
                      <br />
                      <Button type="submit" className="mt-2 p-2" variant="contained" color="primary">مزايدة</Button>
                      <br />
                      <p>الوقت المتبقي لانتهاء المزايدة : {formatTime(remaing)}</p>
                      <br />
                    </div>
                  </Form> :
                  <div className="text-center">
                    <p className="section__subtitle">المزاد انتهى</p>
                    <p className="section__subtitle1">{highestBid}</p>
                    <p>{currentTime}</p>
                    <p>{end_time}</p>
                    <p className="section__title1">رابح المزاد: {WinnerData}</p>
                  </div>
                }
              </Zoom>
            </Row>
          </Container>
        </section>
      }
      {showAlert && (
        <Alert severity="success" className="custom-alert" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="d-flex justify-content-center align-items-center">
            <h4>يتم الآن التحميل</h4>
            <CheckIcon />
          </div>
        </Alert>
      )}
      {showAlert1 && (
        <Alert severity="error" className="custom-alert" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="d-flex justify-content-center align-items-center">
            <h4>{error}</h4>
            <CheckIcon />
          </div>
        </Alert>
      )}
    </Helmet>
  );
}

export default CarDetails;