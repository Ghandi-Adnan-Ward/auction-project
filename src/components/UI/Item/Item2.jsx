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
  const [currentTime, setCurrentTime] = useState(moment().format('YYYY-MM-DD HH:mm:ss'));
  const [bid, setBid] = useState(0);
  const [auctionActive, setAuctionActive] = useState(false);
  const [highestBid, setHighestBid] = useState(minimum_bid);
  const [auctionEnded, setAuctionEnded] = useState(false);
  const jwt_token=localStorage.getItem('jwt_token');
  const [WinnerData,setWinnerData]=useState([]);
  const [WinnerhighestBid, WinnersetHighestBid] = useState([]);
  const[Status,setStatus]=useState(status)
  const navigate=useNavigate()
   const config={
    headers:{
      Authorization:`Bearer ${jwt_token}`
    }
  }
  const url='http://localhost:8000/api/v1/user/auctions/'+id+'/bid';
  const WinnerUrl='http://localhost:8000/api/v1/user/auctions/'+id+'/winner';
  const StatusUrl='';

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
    // const handleStatus=()=> {

    //   try{
    //     axios.post(StatusUrl).then(res =>
    //       {
    //         console.log(res.data)
    //         setStatus('closed')
    //       }
             
    //     )
    //   }
    //   catch(error){
    //     console.error(error)
    //   }
    // }
 useEffect(() => {
    if(status=='closed')
  {
    getWinnerData()
   }

 }, [status])
     
   
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
          //setStatus('closed')
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
    <Zoom>
    <div className="car__item">
        <div className="car__img">
          <img src={`http://localhost:8000/storage/${image}`} alt="car" className="w-100" />
        </div>
         <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{name}</h4>
          {type !='anonymous' && 
          <h6 className="rent__price text-center mt-">
          <PaidIcon />{'السعر الابتدائي:'}
          <br/>
        ${minimum_bid}.00  
        </h6> } 
          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
            <svg   width="35" height="35" viewBox="0 0 24 24"  style={{ verticalAlign: '-0.125em' }}><g transform="translate(24 0) scale(-1 1)"><path fill="currentColor" d="M21 21H3a1 1 0 0 1-1-1v-7.513a1 1 0 0 1 .343-.754L6 8.544V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1M9 19h3v-6.058L8 9.454l-4 3.488V19h3v-4h2zm5 0h6V5H8v2.127c.234 0 .469.082.657.247l5 4.359a1 1 0 0 1 .343.754zm2-8h2v2h-2zm0 4h2v2h-2zm0-8h2v2h-2zm-4 0h2v2h-2z"></path></g></svg>
               {details?.country} {details?.city} {details?.area}
            </span>
          
          </div>
          {auctionActive && !auctionEnded   ? (
             
                <p>الوقت المتبقي لانتهاء المزايدة : {formatTime(remaing)}</p>
                
          ) : (
                <div>
                     <p className="section__subtitle text-center">المزاد انتهى بقيمة:</p>
                     <p className="section__subtitle1 text-center">{highestBid}</p>

                     <p className="section__title1 text-center">رابح المزاد: {WinnerData} {WinnerhighestBid}</p>
                   </div>
           )}

          <button 
           disabled={auctionEnded} 
           onClick={()=>{navigate('/aqar/'+id)}} 
           className={` w-100 car__item-btn car__btn-details ${auctionEnded ? 'disabled ' : ''} `}            
           style={{ cursor: auctionEnded ? 'not-allowed' : 'pointer' }}>
          مزايدة/تفاصيل
           </button>
        </div>
         <p>{currentTime}</p>
        </div>
    </Zoom>
    </Col>
  );
};

export default Item2;