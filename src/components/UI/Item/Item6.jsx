/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
// Item.js
import React, { useState } from "react";
import { Col } from "reactstrap";
import moment from 'moment';
import { useEffect } from "react";
import PaidIcon from '@mui/icons-material/Paid';
import { Zoom } from "react-awesome-reveal";

const Item6 = (props) => {
  const {name,minimum_bid ,end_time,image,id ,description,status,type} = props.item;
  const [currentTime, setCurrentTime] = useState(moment().format('YYYY-MM-DD HH:mm:ss'));
  const [auctionActive, setAuctionActive] = useState(false);
  const [auctionEnded, setAuctionEnded] = useState(false);

  
  

 useEffect(() => {
   
 }, [])
     
   
  const t=moment.utc(end_time).format("HH:mm:ss")
  const endT=moment(end_time).format('YYYY-MM-DD HH:mm:ss');
  const end=moment(endT,'YYYY-MM-DD HH:mm:ss')
  const [remaing, setremaing] = useState(moment(end));

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
          <img src={`http://localhost:8000/storage/${image}`} alt="car" className="w-100" />
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
               {description}
            </span>
           <br />
           </div>
        

         
              
        </div>
         </div>
    </Zoom>
    </Col>
  );
};

export default Item6;