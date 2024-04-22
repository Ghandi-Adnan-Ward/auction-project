// Item.js
import React, { useState } from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import moment from 'moment';
import { Button, TextField } from "@material-ui/core";
import { useEffect } from "react";
import axios from "axios";
import './Item.css'
const Item1 = (props) => {
  const {name,minimum_bid ,end_time,details,image,id ,status} = props.item;
  const [currentTime, setCurrentTime] = useState(moment().format('YYYY-MM-DD HH:mm:ss'));
  const [bid, setBid] = useState(0);
  const [auctionActive, setAuctionActive] = useState(false);
  const [highestBid, setHighestBid] = useState(minimum_bid);
  const [auctionEnded, setAuctionEnded] = useState(false);
  const jwt_token=localStorage.getItem('jwt_token');
  const [WinnerData,setWinnerData]=useState([]);
  const [WinnerhighestBid, WinnersetHighestBid] = useState([]);
  const[Status,setStatus]=useState(status)
 const data=WinnerData;
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
            console.log(Status)
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
          // handleStatus()
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
 
  
 
  
  // const startAuction = () => {
  //   setAuctionActive(true);
  //   setTimeout(() => {
  //   setAuctionActive(false);
  //   setAuctionEnded(true); 
  //   setremaing(0)
  //   console.log("تم إيقاف المزاد");
  //  }, time);  };

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
            <svg xmlns="http://www.w3.org/2000/svg"  width="35" height="35" style={{ verticalAlign: '-0.125em' }} viewBox="0 0 24 24"><g transform="translate(24 0) scale(-1 1)"><path fill="currentColor" d="M19 20H5V21C5 21.5523 4.55228 22 4 22H3C2.44772 22 2 21.5523 2 21V11L4.4805 5.21216C4.79566 4.47679 5.51874 4 6.31879 4H17.6812C18.4813 4 19.2043 4.47679 19.5195 5.21216L22 11V21C22 21.5523 21.5523 22 21 22H20C19.4477 22 19 21.5523 19 21V20ZM20 13H4V18H20V13ZM4.17594 11H19.8241L17.6812 6H6.31879L4.17594 11ZM6.5 17C5.67157 17 5 16.3284 5 15.5C5 14.6716 5.67157 14 6.5 14C7.32843 14 8 14.6716 8 15.5C8 16.3284 7.32843 17 6.5 17ZM17.5 17C16.6716 17 16 16.3284 16 15.5C16 14.6716 16.6716 14 17.5 14C18.3284 14 19 14.6716 19 15.5C19 16.3284 18.3284 17 17.5 17Z"></path></g></svg>
                    {details?.brand} {details?.model} {details?.engine_type}
            </span>
          
          </div>
          {auctionActive && !auctionEnded   ? (
            <div>
                <br />
                <p>الوقت المتبقي لانتهاء المزايدة : {formatTime(remaing)}</p>
                <br />
               </div>
           ) : (
                <div>
                     <p className="section__subtitle text-center">المزاد انتهى بقيمة:</p>
                     <p className="section__subtitle1 text-center">{highestBid}</p>

                     <p className="section__title1 text-center">رابح المزاد: {WinnerData} {WinnerhighestBid}</p>
                   </div>
           )}

          <button className=" w-100 car__item-btn car__btn-details">
          <Link to={`/cars/${id}`}>مزايدة/تفاصيل</Link>
          </button>
        </div>
         <p>{currentTime}</p>
        </div>
    </Col>
  );
};

export default Item1;