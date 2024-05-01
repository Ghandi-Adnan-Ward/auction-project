import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
//import { useParams } from "react-router-dom";
import axios from "axios";
import { Button, TextField } from "@material-ui/core";
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import CheckIcon from '@mui/icons-material/Check';
import Spinner from '../components/UI/Spinner/Spinner';
import { Alert } from "@mui/material";
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
import PaidIcon from '@mui/icons-material/Paid';
import { useNavigate } from "react-router-dom";

//import moment from 'moment'
const CarDetails = (props) => {
  const {name,minimum_bid ,end_time,details,image,id ,status,description,current_bid,type,increment_amount} =  props.carData ;
  const auctionActive=props.auctionActive;
  const auctionEnded=props.auctionEnded;
  const currentTime=props.currentTime;
  const remaing=props.remaing;
 const WinnerData=props.WinnerData
 const navigate=useNavigate()
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showAlert1, setShowAlert1] = useState(false);
  const [error, setError] = useState('');
  const [bid, setBid] = useState(0);
   const [highestBid, setHighestBid] = useState(minimum_bid);
  //const[auctionActive,setAuctionActive]=useState(false)
  //const [auctionEnded, setAuctionEnded] = useState(false);
  // const [currentTime, setCurrentTime] = useState(moment().format('YYYY-MM-DD HH:mm:ss'));
  //  const t=moment.utc(end_time).format("HH:mm:ss")
  // const endT=moment(end_time).format('YYYY-MM-DD HH:mm:ss');
  // const end=moment(moment(endT,'YYYY-MM-DD HH:mm:ss'))
  // const [remaing, setremaing] = useState(moment(end));
  const jwt_token=localStorage.getItem('jwt_token');
  
 
  const config={
    headers:{
      Authorization:`Bearer ${jwt_token}`
    }
  }

const formatTime = (totalSeconds) => {
  const months = Math.floor(totalSeconds / (3600 * 24 * 30)); 
  const remainingDays = Math.floor((totalSeconds % (3600 * 24 * 30.4)) / (3600 * 24));
  const remainingHours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const remainingMinutes = Math.floor((totalSeconds % 3600) / 60); 
  const remainingSeconds = totalSeconds % 60;
  return `${months} شهر ${remainingDays} يوم ${remainingHours} ساعة ${remainingMinutes} دقيقة ${remainingSeconds} ثانية`;
};

  
 
  const url1='http://localhost:8000/api/v1/user/regular-auctions/'+id+'/bid';
  const url2='http://localhost:8000/api/v1/user/live-auctions/'+id+'/bid'
  const url3='http://localhost:8000/api/v1/user/anonymous-auctions/'+id+'/bid'
  

  const handleBidSubmit = (event) => {
    event.preventDefault();
    setLoading(true)
    setShowAlert(true)
    const bbid=new FormData();

    if(type !='live'){
    bbid.append('bid_amount',event?.target.bid_amount.value)
    }
      try {
        if(type=='live'){

        axios.post(url2,current_bid,config)
       .then(res=>{
        console.log(jwt_token)
        console.log(config)
         setLoading(false)
         setShowAlert(false)
        console.log(res.data)
        navigate('/cars')
        }
     ) 
      }
      else if(type=='regular'){
        axios.post(url1,bbid,config )
      .then(res=>{
        setLoading(false)
        setShowAlert(false)
       console.log(res.data)
       }
    ) 
        
   }
   else if(type=='anonymous'){
    axios.post(url3,bbid,config )
  .then(res=>{
    setLoading(false)
    setShowAlert(false)
   console.log(res.data)
   }
) 
  
 
}
    }
       catch (error) {
         setError(error.message)
       setShowAlert1(true)
       setShowAlert(false)
      }
      setBid(0)
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
              <img src={`http://localhost:8000/storage/${image}`} alt="" className="w-75 h-75" />
            </Col>

            <Col sm='6' md='6' lg="6">
              <div className="car__info">
                <h2 className="section__title ">{name}</h2>
                <span className=" d-flex align-items-center gap-1 section__description">
               
                  <h3>
                    <WbIncandescentIcon fontSize="large" htmlColor="#f9a826" />
                        {"الوصف: "}{description}
                  </h3>
                 </span>
               {type != 'anonymous'
               ?
               <div>
                 <h6 className="  text-center mt-" style={{fontSize:'25px',color:'#7c8a97'}} >
              <PaidIcon />{'السعر الابتدائي:'}
              <br/>
            ${minimum_bid}  
          </h6>
          <h6 className=" text-center mt-"style={{fontSize:'25px'}}>
              <PaidIcon />{'السعر الحالي:'}
              <br/>
            ${current_bid}  
          </h6>
               </div>
              :
              <br/>
              }
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
                    {details?.model}
                  </h3>
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <h3>
                    <i
                      className="ri-settings-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{"brand: "}
                    {details?.brand}
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
                  style={{ color: "#f9a826"}}
                ></i>{"engine_type: "}
                {details?.engine_type}
                </h3>
              </span></div>
                
                <div
                  style={{ columnGap: "2.8rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description1">
                    <h3>
                    <i className="ri-map-pin-line" style={{ color: "#f9a826" }}></i>{"manufacturing_year: "}
                    {details?.manufacturing_year}
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
                    {details?.registration_year}
                  </h3>
                  </span>

                  </div>
                  <div
                  style={{ columnGap: "2.8rem" }}
                ><span className=" d-flex gap-1 section__description1">
                <h3>
                  {"end_time:"}
                { end_time}
                <InsertInvitationIcon fontSize="large" htmlColor="#f9a826"/>

                </h3>
              </span></div>
              </div>
            </Col>
            {auctionActive && !auctionEnded?
          <form onSubmit={handleBidSubmit}>
          <div className="form m-4">
            <h1 className="section__title">ادخل قيمة مزادك</h1>
            {type!='live' ? 
            <TextField 
              className="input w-30 p-2 "
              onChange={handleBidChange}
              value={bid}
              id="bid"
              name="bid_amount"
              variant="standard" 
            />
            :
            <h1>اضغط لأضافة {increment_amount} إلى {current_bid} </h1>
          }
            <br />
            <Button type="submit"  className="mt-2 p-2" variant="contained" color="primary">مزايدة</Button>
               <br />
                <p>الوقت المتبقي لانتهاء المزايدة : {formatTime(remaing)}</p>
                <p>{ }</p>
                <br />
            </div>
        </form>:
          (
            <div>
                 <p className="section__subtitle text-center">المزاد انتهى</p>
                 <p className="section__subtitle1 text-center">{}</p>
                 <p>الوقت المتبقي لانتهاء المزايدة : {formatTime(remaing)}</p>
                  <p>{currentTime}</p>
                  <p>{end_time}</p>
                 <p className="section__title text-center">رابح المزاد: {WinnerData} {}</p>
               </div>
       )
        }
         
        
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
}

export default CarDetails;