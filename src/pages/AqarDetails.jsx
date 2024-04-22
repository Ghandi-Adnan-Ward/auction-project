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
import moment from 'moment'
const AqarDetails = () => {
  const { slug } = useParams();
  const [aqarData, setaqarData] = useState([]);
  const [bids, setBids] = useState([]);
  const [currentTime, setCurrentTime] = useState(moment().format('YYYY-MM-DD HH:mm:ss'));

  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showAlert1, setShowAlert1] = useState(false);
  const [error, setError] = useState('');
  const [highestBid, setHighestBid] = useState(aqarData.minimum_bid);
  const[auctionActive,setAuctionActive]=useState(false)
  const [auctionEnded, setAuctionEnded] = useState(false);
  const jwt_token=localStorage.getItem('jwt_token');
  const [WinnerData,setWinnerData]=useState([]);
  const [WinnerhighestBid, WinnersetHighestBid] = useState([]);
  const[Status,setStatus]=useState(status)
  const t=moment.utc(aqarData.end_time).format("HH:mm:ss")
  const endT=moment(aqarData.end_time).format('YYYY-MM-DD HH:mm:ss');
  const end=moment(endT,'YYYY-MM-DD HH:mm:ss')
  const [remaing, setremaing] = useState(moment(end));
  const WinnerUrl='http://localhost:8000/api/v1/user/auctions/'+aqarData.id+'/winner';
  const StatusUrl='';
  const config={
    headers:{
      Authorization:`Bearer ${jwt_token}`
    }
  }
     const getWinnerData=()=> {

      try{
        axios.get(WinnerUrl).then(res =>
          {
            setWinnerData(res.data.winner.first_name)
            WinnersetHighestBid(res.data.winner.last_name)
            console.log(res.data.winner.id)
           }
             
        )
      }
      catch(error){
        console.error(error)
      }
    }
  useEffect(() => {
    if(status=='closed')
  {
    getWinnerData()
   }

 }, [status])
  const url='http://localhost:8000/api/v1/user/auctions/'+aqarData.id+'/bid';

   
 
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
        setaqarData(response.data);
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
    const maxBid = Math.max(...bids);
      setHighestBid(maxBid);
    fetchData();
  }, [slug]);

  // Find the selected car based on the slug
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [aqarData]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = moment();
      setCurrentTime(now.format('YYYY-MM-DD HH:mm:ss'));
      
      if (now.isBetween(currentTime, end)) {
        setAuctionActive(true);
        setremaing(end.diff(now,'seconds')); 
      } else if (now.isAfter(end)) {
        setAuctionActive(false);
        setAuctionEnded(true);
        //setStatus('closed')
       }
    }, 1000);

     return () => clearInterval(intervalId);
}, [])
useEffect(() => {
  if(auctionActive){
const intervalId=setInterval(() => {
  setCurrentTime(moment().format('YYYY-MM-DD HH:mm:ss'));
    setremaing(prevTime => {
      if (prevTime === 0) {
        clearInterval(intervalId);
        setAuctionActive(false);
        setAuctionEnded(true); 
         return 0;
      }
      return prevTime - 1;
    });
}, 1000);
return () => {
  clearInterval(intervalId)
}
}

}, [auctionActive,auctionEnded,currentTime,setCurrentTime])
const formatTime = (totalSeconds) => {
  const months = Math.floor(totalSeconds / (3600 * 24 * 30)); 
  const remainingDays = Math.floor((totalSeconds % (3600 * 24 * 30.4)) / (3600 * 24));
  const remainingHours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const remainingMinutes = Math.floor((totalSeconds % 3600) / 60); 
  const remainingSeconds = totalSeconds % 60;

  return `${months} شهر ${remainingDays} يوم ${remainingHours} ساعة ${remainingMinutes} دقيقة ${remainingSeconds} ثانية`;
};
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
          {auctionActive && !auctionEnded?
          <form onSubmit={handleBidSubmit}>
          <div className="form m-4">
            <h1 className="section__title">ادخل قيمة مزادك</h1>
            <TextField 
              className="input w-30 p-2 "
              onChange={handleBidChange}
              value={bid}
              id="bid"
              name="bid_amount"
              variant="standard" 
            />
            <br />
            <Button type="submit"  className="mt-2 p-2" variant="contained" color="primary">مزايدة</Button>
               <br />
                <p>الوقت المتبقي لانتهاء المزايدة : {formatTime(remaing)}</p>
                <br />
            </div>
        </form>:
          (
            <div>
                 <p className="section__subtitle text-center">المزاد انتهى بقيمة:</p>
                 <p className="section__subtitle1 text-center">{highestBid}</p>

                 <p className="section__title1 text-center">رابح المزاد: {WinnerData} {WinnerhighestBid}</p>
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
 
};

export default AqarDetails;
