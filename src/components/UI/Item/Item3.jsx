// Item.js
import React, { useState } from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import moment from 'moment';
import { Button, TextField } from "@material-ui/core";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Item3 = (props) => {
   const {   model, name,minimum_bid ,brand,end_time,image } = props.item;
  const [currentTime, setCurrentTime] = useState(moment().format('YYYY-MM-DD HH:mm:ss'));
  const [bid, setBid] = useState(0);
  const [auctionActive, setAuctionActive] = useState(false);
  const [highestBid, setHighestBid] = useState(minimum_bid);
  const [auctionEnded, setAuctionEnded] = useState(false);
   // const [firstMinutePassed, setFirstMinutePassed] = useState(false);
  // const [remaing, setremaing] = useState(moment.utc(time).format("HH:mm:ss"));
const url='http://localhost:8000/api/v1/user/auctions/12/bid'
  const t=moment.utc(end_time).format("HH:mm:ss")
  const endT=moment(end_time).format('YYYY-MM-DD HH:mm:ss');
      const end=moment(endT,'YYYY-MM-DD HH:mm:ss')
  // const [carImage, setCarImage] = useState('');
const navigate=useNavigate()
  const [remaing, setremaing] = useState(moment(end,'YYYY-MM-DD HH:mm:ss'));
  // useEffect(() => {
  //   fetchCarImage();
  // }, []);
  // const fetchCarImage = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:8000/api/v1/user/car-auctions/15/image');
  //     setCarImage(response.data.url);
  //   } catch (error) {
  //     console.error('Error fetching car image:', error);
  //   }
  // };
  // const calculateTimeRemaining = () => {
  //   const endTime = moment().add(time, 'seconds');
  //   const remainingTime = moment(endTime).diff(moment());
  //   setremaing(moment.utc(remainingTime).format('HH:mm:ss'));
  // };
  // const auctionStartTime = moment().set('hour', 22).set('minute', 0).set('second', 0); // بداية المزاد 11:00 صباحًا
  // const auctionEndTime = moment().set('hour', 23).set('minute', 12).set('second', 0); // نهاية المزاد 12:00 ظهرًا
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

      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [])
  // componentDidMount=()=>{
  //   const response= axios.get('')
  // }
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:8000/api/v1/user/auctions/4/bid ');
  //        console.log(response.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  
  //   fetchData(); 
  // }, []); 

  const sendBidToBackend =  (newBid) => {
    try {
      const id=localStorage.getItem('id')
      console.log(id)

      const jwt_token=localStorage.getItem('jwt_token');
      const config={
        headers:{
          Authorization:`Bearer ${jwt_token}`
        }
      }
      axios.post(url,newBid,config )
      .then(res=>{
       console.log(res.data)
        console.log(config.headers)
      }
      )
      }
      catch (error) {
      console.error('Error:', error);
    }
  };

  const handleBidChange = (e) => {
    const newBid = parseFloat(e.target.value);
    setBid(newBid);
  };
  useEffect(() => {
    const intervalid=setInterval(()=>{
      setCurrentTime(moment().format('YYYY-MM-DD HH:mm:ss'));

    })
  
    return () => {
      clearInterval(intervalid)
    }
  }, [currentTime])
  
useEffect(() => {

  if(auctionActive){
    const intervalId=setInterval(() => {
      setCurrentTime(moment().format('YYYY-MM-DD HH:mm:ss'));

      // setremaing(remaing-1)
      // setCurrentTime(moment().format('HH:mm:ss'))
        // setremaing(prevTime => prevTime - 1)
        // setremaing(t=>moment(t).diff(1))
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
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

  
  const handleBidSubmit = (event) => {
    event.preventDefault();
    const jwt_token=localStorage.getItem('jwt_token');

    const bid_amount = parseFloat(event.target.elements.bid.value);
    if ( bid_amount > highestBid && jwt_token!=null) {
      setHighestBid(bid_amount);
      sendBidToBackend(bid_amount)
    }
    else{
      navigate('/login')
    }
    setBid(0)
  }
  // useEffect(() => {
  //   if (!auctionActive) return;

  //   const auctionTimeout = setTimeout(() => {
  //     setFirstMinutePassed(true);
  //   }, 5000); // 60 ثانية = 1 دقيقة

  //   return () => clearTimeout(auctionTimeout);
  // }, [auctionActive]);

  // const handleBidSubmit1 = (event) => {
  //   event.preventDefault();
  //   const newBid = parseFloat(event.target.elements.bid.value);
  //   if(bidType===2 && !firstMinutePassed && newBid > highestBid){
  //     setHighestBid(newBid);
  //   }
  //   setBid(0)    
  // }
 const startAuction = () => {
    setAuctionActive(true);
 setTimeout(() => {
    setAuctionActive(false);
    setAuctionEnded(true); 
    setremaing(0)
    console.log("تم إيقاف المزاد");
   }, time);  };

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <img src={image} alt="img" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{name}</h4>
          {!auctionActive ?(<>
            <h6 className="rent__price text-center mt-">
            ${highestBid}.00 <span></span>
          </h6></>):(<><h6 className="rent__price text-center mt-"></h6></>)}

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-car-line"></i> {model}
            </span>
            {/* <span className=" d-flex align-items-center gap-1">
              <i className="ri-settings-2-line"></i> {automatic}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-timer-flash-line"></i> {speed}
            </span> */}
          </div>
          {auctionActive && !auctionEnded ? (
            <form onSubmit={handleBidSubmit }>
              <div className="form">
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
                <br />
                <p>الوقت المتبقي لانتهاء المزايدة : {formatTime(remaing)}</p>
                <br />
                {/* <h6 className="rent__price text-center mt-">Time Remaining: {remaing}</h6> */}
                {/* <FormLabel className="error">Bid Amount Should be greater</FormLabel> */}
              </div>
            </form>
          ) : (
            
            <p className="text-center">المزاد انتهى</p>
          )}

          <button className=" w-100 car__item-btn car__btn-details">
          <Link to={`/cars/${name}`}>Details</Link>
          </button>
        </div>
         <p>{currentTime}</p>
         {/* <p>مدة المزايدة : {t}</p> */}
       </div>
    </Col>
  );
};

export default Item3;