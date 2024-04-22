// import React, { useState } from "react";
// import { Col } from "reactstrap";
// import { Link } from "react-router-dom";
// import moment from 'moment';
// import { Button, TextField } from "@material-ui/core";
// import axios from "axios";
// const Item3 = (props) => {
//   const { imgUrl, model, carName, automatic, speed, price, time, bidType } = props.item;
//   const [currentTime, setCurrentTime] = useState(moment().format('HH:mm:ss'));
//   const [bid, setBid] = useState(0);
//   const [auctionActive, setAuctionActive] = useState(false);
//   const [highestBid, setHighestBid] = useState(price);
//   const [auctionEnded, setAuctionEnded] = useState(false);
//   const [firstMinutePassed, setFirstMinutePassed] = useState(false);
//   const [remaing, setRemaining] = useState(time / 1000);

//   // 2. إنشاء وظيفة لإرسال البيانات إلى الخادم الخلفي
//   const sendBidToBackend = async (newBid) => {
//     try {
//       const response = await axios.post('URL_OF_YOUR_BACKEND_ENDPOINT', { bid: newBid });
//       // يمكنك تنفيذ أي شيء بعد استلام الاستجابة من الخادم هنا
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const handleBidChange = (e) => {
//     const newBid = parseFloat(e.target.value);
//     setBid(newBid);
//   };

//   useEffect(() => {
//     if (auctionActive) {
//       const intervalId = setInterval(() => {
//         setRemaining(prevTime => {
//           if (prevTime === 0) {
//             clearInterval(intervalId);
//             setAuctionActive(false);
//             setAuctionEnded(true);
//             return 0;
//           }
//           return prevTime - 1;
//         });
//       }, 1000);
//       return () => clearInterval(intervalId);
//     }
//   }, [auctionActive, auctionEnded]);

//   const handleBidSubmit = (event) => {
//     event.preventDefault();
//     const newBid = parseFloat(event.target.elements.bid.value);
//     if (newBid > highestBid) {
//       setHighestBid(newBid);
//       // 3. استخدام وظيفة إرسال البيانات إلى الخادم الخلفي عند تقديم النموذج
//       sendBidToBackend(newBid);
//     }
//     setBid(0);
//   };

//   useEffect(() => {
//     if (!auctionActive) return;

//     const auctionTimeout = setTimeout(() => {
//       setFirstMinutePassed(true);
//     }, 5000); // 60 ثانية = 1 دقيقة

//     return () => clearTimeout(auctionTimeout);
//   }, [auctionActive]);

//   const startAuction = () => {
//     setAuctionActive(true);
//     setTimeout(() => {
//       setAuctionActive(false);
//       setAuctionEnded(true);
//       setRemaining(time / 1000);
//       console.log("تم إيقاف المزاد");
//     }, time);
//   };

//   return (
//     <Col lg="4" md="4" sm="6" className="mb-5">
//       <div className="car__item">
//         <div className="car__img">
//           <img src={imgUrl} alt="" className="w-100" />
//         </div>

//         <div className="car__item-content mt-4">
//           <h4 className="section__title text-center">{carName}</h4>
//           {!auctionActive ? (
//             <h6 className="rent__price text-center mt-">
//               ${highestBid}.00 <span></span>
//             </h6>
//           ) : null}

//           <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
//             <span className=" d-flex align-items-center gap-1">
//               <i className="ri-car-line"></i> {model}
//             </span>
//             <span className=" d-flex align-items-center gap-1">
//               <i className="ri-settings-2-line"></i> {automatic}
//             </span>
//             <span className=" d-flex align-items-center gap-1">
//               <i className="ri-timer-flash-line"></i> {speed}
//             </span>
//           </div>
//           {auctionActive && !auctionEnded ? (
//             <form onSubmit={handleBidSubmit}>
//               <div className="form">
//                 <TextField
//                   className="input p-2 "
//                   onChange={handleBidChange}
//                   value={bid}
//                   id="bid"
//                   name="bid"
//                   variant="standard"
//                 />
//                 <br />
//                 <Button type="submit" className="mt-2 p-2" variant="contained" color="primary">مزايدة</Button>
//                 <br />
//                 <p>الوقت المتبقي لانتهاء المزايدة : {formatTime(remaing)}</p>
//                 <br />
//               </div>
//             </form>
//           ) : (
//               <button onClick={startAuction} disabled={auctionEnded} className=" w-50 caritem-btn carbtn-rent">
//                 بدأ المزايدة
//               </button>
//             )}

//           <button className=" w-50 caritem-btn carbtn-details">
//            </button>
//         </div>
//         <p>{currentTime}</p>
//         <p>مدة المزايدة : {t}</p>
//       </div>
//     </Col>
//   );
// };

// export default Item3;
const auctionStartTime = moment().set('hour', 11).set('minute', 0).set('second', 0); // بداية المزاد 11:00 صباحًا
  const auctionEndTime = moment().set('hour', 12).set('minute', 0).set('second', 0); // نهاية المزاد 12:00 ظهرًا

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = moment();
      setCurrentTime(now.format('HH:mm:ss'));
      
      if (now.isBetween(auctionStartTime, auctionEndTime)) {
        // إذا كان الوقت الحالي بين وقت بداية ونهاية المزاد
        setAuctionActive(true);
        setRemaing(auctionEndTime.diff(now, 'seconds')); // حساب الوقت المتبقي بالثواني
      } else if (now.isAfter(auctionEndTime)) {
        // إذا كان الوقت الحالي بعد نهاية المزاد
        setAuctionActive(false);
        setAuctionEnded(true);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [])
  // Item2.jsx
import React, { useState, useEffect } from 'react';
import { Button, FormLabel, TextField } from "@material-ui/core";
import { Link } from 'react-router-dom';
import { Col } from "reactstrap";
import './Item.css'
import moment from 'moment';
const Item2 = (props) => {
  const { imgUrl,  lapName,   time, price } = props.item;
  const [bid, setBid] = useState(0);
  const [bids, setBids] = useState([]);
  const [highestBid, setHighestBid] = useState(price);
  const [auctionActive, setAuctionActive] = useState(false);
  const [auctionEnded, setAuctionEnded] = useState(false);
  const [remaing, setremaing] = useState(time/1000);
  const t=moment.utc(time).format("HH:mm:ss")

  const sendBidToBackend = async (newBid) => {
    try {
      const response = await axios.post('URL_OF_YOUR_BACKEND_ENDPOINT',  newBid );
      // يمكنك تنفيذ أي شيء بعد استلام الاستجابة من الخادم هنا
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  const handleBidChange = (e) => {
    const newBid = parseFloat(e.target.value);
    setBid(newBid);
  };

  const handleBidSubmit = (e) => {
    e.preventDefault();
    setBids([...bids, bid]);
    setBid(0); 
  };

  

  useEffect(() => {
    if (auctionActive) {
      const intervalId = setInterval(() => {
        setremaing(prevTime => {
          if (prevTime === 0) {
            clearInterval(intervalId);
            setAuctionActive(false);
            setAuctionEnded(true); 
            return 0;
          }
          return prevTime - 1;
        });
        const maxBid = Math.max(...bids);
        setHighestBid(maxBid);
      }, 1000); 

 

      return () => {
        clearInterval(intervalId);
         
       };
    }
    console.log("bids:",bids)

  }, [auctionActive,bids,highestBid,time]);
  const startAuction = () => {
    setAuctionActive(true);
     setTimeout(() => {
      setAuctionActive(false);
      setAuctionEnded(true)
      console.log("تم إيقاف المزاد");
     }, time); 
  };
  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <img src={imgUrl} alt="" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{lapName}</h4>
          {auctionActive && !auctionEnded ? (
            <>
              <form onSubmit={handleBidSubmit}>
                <div className="form">
                  <TextField
                    className="input p-2"
                    id="bid"
                    name="bid"
                    value={bid}
                    onChange={handleBidChange}
                    variant="standard"
                  />
                  <br />
                  <Button
                    type="submit"
                    className="m-2 p-2"
                    variant="contained"
                    color="primary"
                  >
                    مزايدة
                  </Button>
                  <p>الوقت المتبقي لانتهاء المزايدة : {formatTime(remaing)}</p>

                  <br />
                  {/* <FormLabel className="error">
                    Bid Amount Should be greater
                  </FormLabel> */}
                </div>
              </form>
            </>
          ) : (
            <div className="form">
              <Button
                onClick={startAuction}
                disabled={auctionEnded}
                className="m-2 p-2 w-50 "
                variant="contained"
                color="primary"
              >
                بدأ  المزايدة

              </Button>
              {/* <button onClick={startAuction}
               disabled={auctionEnded} 
               className=" w-50 m-2 p-2 car__item-btn car__btn-rent">بدأ المزايدة</button> */}

              <h6 className="rent__price text-center mt-">
                أعلى سعر :{highestBid}.00$
               </h6>
              {auctionEnded ?<p className="text-center">المزاد انتهى</p>:<></>}
              <p></p>
            </div>
            
          )}

           

          <button className=" w-100 car__item-btn car__btn-details">
            <Link to='{/laptop/${lapName}}'>التفاصيل</Link>
          </button>
        </div>
        <p>مدة المزايدة : {t}</p>

      </div>
    </Col>
  );
};

 export default Item2;
