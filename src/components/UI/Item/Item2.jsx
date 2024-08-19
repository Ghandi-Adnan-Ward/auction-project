/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
// Item.js
import React, { useState } from "react";
import { Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import moment from 'moment';
import { Button, TextField } from "@material-ui/core";
import { useEffect } from "react";
import axios from "axios";
import './Item.css'
import PaidIcon from '@mui/icons-material/Paid';
import { Zoom } from "react-awesome-reveal";

const Item2 = (props) => {
  const {name,minimum_bid ,end_time,details,image,id,type ,status} = props.item;
  const [currentTime, setCurrentTime] = useState(moment.utc().format('YYYY-MM-DD HH:mm:ss'));
  const [auctionActive, setAuctionActive] = useState(false);
  const [auctionEnded, setAuctionEnded] = useState(false);
  const [WinnerData,setWinnerData]=useState([]);
  const [WinnerhighestBid, WinnersetHighestBid] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(status === 'closed' || status === 'pending');

  const navigate=useNavigate()
  
  const WinnerUrl='http://localhost:8000/api/v1/user/auctions/'+id+'/winner';
    

 const end = moment.utc(end_time);
 const [remaing, setremaing] = useState(0);
  

    useEffect(() => {
      const intervalId = setInterval(() => {
        const now = moment.utc();
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
  }, [currentTime])
   
  useEffect(() => {
    if (status === 'closed') {
      const getWinnerData = async () => {
        try {
          const res = await axios.get(WinnerUrl);
          setWinnerData(res.data.winner.first_name);
        } catch (error) {
          console.error(error);
        }
      };
      getWinnerData();
    }
  }, [status]);
  
  useEffect(() => {
    if (status !== 'closed' && status !== 'pending') {
      setIsButtonDisabled(false); // Enable the button if the auction is active and not pending
    } else {
      setIsButtonDisabled(true); // Disable the button otherwise
    }
  }, [status]);



 const formatTime = (totalSeconds) => {
  const months = Math.floor(totalSeconds / (3600 * 24 * 30)); 
  const remainingDays = Math.floor((totalSeconds % (3600 * 24 * 30.4)) / (3600 * 24));
  const remainingHours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const remainingMinutes = Math.floor((totalSeconds % 3600) / 60); 
  const remainingSeconds = totalSeconds % 60;

  return `${months} شهر ${remainingDays} يوم ${remainingHours} ساعة ${remainingMinutes} دقيقة ${remainingSeconds} ثانية`;
};
 
  
   
  

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
    <Zoom triggerOnce>
    <div className="car__item">
        <div className="car__img">
          <img src={`http://localhost:8000/storage/${image}`} alt="aqar" className="w-100" />
        </div>
         <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{name}</h4>
          {type !='anonymous' ?
          <h6 className="rent__price text-center mt-">
          <PaidIcon />{'السعر الابتدائي:'}
          <br/>
        {minimum_bid}  
        </h6>:
        <h6 className="rent__price text-center mt-">
        <PaidIcon />{'السعر الابتدائي:'}
        <br/>
      ???.???
      </h6>
         } 
          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
            <svg   width="35" height="35" viewBox="0 0 24 24"  style={{ verticalAlign: '-0.125em' }}><g transform="translate(24 0) scale(-1 1)"><path fill="currentColor" d="M21 21H3a1 1 0 0 1-1-1v-7.513a1 1 0 0 1 .343-.754L6 8.544V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1M9 19h3v-6.058L8 9.454l-4 3.488V19h3v-4h2zm5 0h6V5H8v2.127c.234 0 .469.082.657.247l5 4.359a1 1 0 0 1 .343.754zm2-8h2v2h-2zm0 4h2v2h-2zm0-8h2v2h-2zm-4 0h2v2h-2z"></path></g></svg>
               {details?.country} {details?.city} {details?.area}
            </span>
          
          </div>
          {status === 'pending' ? (
               <div>
               <br />
               <p className="section__subtitle text-center">المزاد يبدأ بعد أقل من دقيقة</p>
               <br />
             </div>
            )
             : status==='ongoing' ? (
              <div>
                <br />
                <p>الوقت المتبقي لانتهاء المزايدة : {formatTime(remaing)}</p>
                <br />
             </div>
             )
             :
            (
              <div>
              <p className="section__subtitle text-center">المزاد انتهى</p>

              <p className="section__title1 text-center">رابح المزاد: {WinnerData}</p>
            </div>
            
            )
            
          
            }

          <button 
           disabled={isButtonDisabled} 
           onClick={()=>{navigate('/aqar/'+id)}} 
           className={` w-100 car__item-btn car__btn-details ${auctionEnded ? 'disabled ' : ''} `}            
           style={{ cursor: isButtonDisabled ? 'not-allowed' : 'pointer' }}>
          مزايدة/تفاصيل
           </button>
        </div>
        <p>{currentTime}</p>
        <p>{end_time}</p>

         </div>
    </Zoom>
    </Col>
  );
};

export default Item2;