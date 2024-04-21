// Item.js
import React, { useState } from "react";
import { Col, Fade } from "reactstrap";
import { Link } from "react-router-dom";
import moment from 'moment';
import { Button, TextField } from "@material-ui/core";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Item1 = (props) => {
  const {name,minimum_bid ,end_time,details,image } = props.item;
  const [currentTime, setCurrentTime] = useState(moment().format('YYYY-MM-DD HH:mm:ss'));
  const [bid, setBid] = useState(0);
  const [auctionActive, setAuctionActive] = useState(false);
  const [highestBid, setHighestBid] = useState(minimum_bid);
  const [auctionEnded, setAuctionEnded] = useState(false);

  const url='http://localhost:8000/api/v1/user/auctions/${id}/bid'

  const t=moment.utc(end_time).format("HH:mm:ss")
  const endT=moment(end_time).format('YYYY-MM-DD HH:mm:ss');
  const end=moment(endT,'YYYY-MM-DD HH:mm:ss')
  const [remaing, setremaing] = useState(moment(end));

  const navigate=useNavigate()

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
   
  const jwt_token=localStorage.getItem('jwt_token');
  const config={
    headers:{
      Authorization:`Bearer ${jwt_token}`
    }
  }
  const sendBidToBackend =  (event) => {
    
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
  const months = Math.floor(totalSeconds / (3600 * 24 * 30)); // حوالي 30 يومًا في الشهر
  const remainingDays = Math.floor((totalSeconds % (3600 * 24 * 30)) / (3600 * 24));
  const remainingSeconds = totalSeconds % 3600;

  const hours = Math.floor((remainingSeconds / 3600));
  const minutes = Math.floor((remainingSeconds % 3600) / 60);
  const seconds = remainingSeconds % 60;

  return ` ${months} شهر ${remainingDays} يوم ${hours} ساعة ${minutes} دقيقة ${seconds} ثانية`
};
 
  
  const handleBidSubmit = (event) => {
    event.preventDefault();
    const jwt_token=localStorage.getItem('jwt_token');
    const bbid=new FormData();
    bbid.append('bid_amount',event.target.bid_amount.value)
    try {
      const id=localStorage.getItem('id')
      console.log(id)
      if(jwt_token!==null){
      
      axios.post(url,bbid,config )
      .then(res=>{
       console.log(res.data)
        console.log(config.headers)
      }
      )}
      else{
        navigate('/')
      }
      }
      catch (error) {
      console.error('Error:', error);
    }
    const bid_amount = event.target.bid_amount.value;
    if ( bid_amount > highestBid  ) {
      setHighestBid(bid_amount);
      // sendBidToBackend(bid_amount)
    }
    else{
      navigate('/login')
    }
    setBid(0)
  }
     
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
          <img src={`http://localhost:8000/storage/${image}`} alt="car" className="w-100" />
        </div>
         <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{name}</h4>
          {!auctionActive ?(<>
            <h6 className="rent__price text-center mt-">
            ${highestBid}.00 <span></span>
          </h6></>):(<><h6 className="rent__price text-center mt-"></h6></>)}

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-car-line"></i> {details?.brand} {details?.model} {details?.engine_type}
            </span>
          
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
        </div>
    </Col>
  );
};

export default Item1;