// import React, { useState,useEffect } from "react";
// import { Col } from "reactstrap";
// import { Link } from "react-router-dom";

// import moment from 'moment'
// import { Button, FormLabel, TextField } from "@material-ui/core";

// const Item = (props) => {
  
//   const { imgUrl, model, carName, automatic, speed, price } = props.item;
//   const [currentTime, setCurrentTime] = useState(moment().format('HH:mm:ss'));
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentTime(moment().format('HH:mm:ss'));
//     }, 1000);
//     //  setTimeout(() => {
//     //   clearInterval(intervalId);
      
//     //   console.log("تم إيقاف التنفيذ الدوري");
//     // }, 20000);
//   }, []);
//   // useEffect(() => {
//   //   const bb=setInterval(()=>{
//   //     setbid(bid)
//   //   },5000);
//   //   setTimeout(() => {
//   //       clearInterval(setInterval);
//   //     console.log("تم إيقاف التنفيذ الدوري");
//   //   }, 20000);
//   //    }, []);
//   const [p,setp]=useState(price)
//   const [bid,setbid]=useState(0)
  
//    const BidChange = (e) => {
//     const bid = e.target.value;
//     if (bid >= p) {
//       setbid(bid)
//       } else {
//       setbid(p)
//   }
//    }
//    function BB(){

//    }
//    function Bid() {
//     setTimeout(() => {
//       BidChange
//     }, 10000);
//    }
//    let i=0;
//   function onclick(bid){
//       i++;
//     setp(bid)
//     if(i==1){
//       const intervalId = setTimeout(() => {
//           BidChange
//       }, 10000);
//        setTimeout(() => {
//         clearTimeout(intervalId);
        
//         console.log("تم إيقاف التنفيذ الدوري");
//       }, 5000);
//     }
//   }
//     // setTimeout(() => {
//     //   BidChange
//     // }, 1000);
//     function clicked(bid){
//       // let arr=[...Array(d).concat(d)]

//       setp(bid)
//       console.log(bid);
//       // console.log(arr)
//     }
    
//   return (
//     <Col lg="4" md="4" sm="6" className="mb-5">
//       <div className="car__item">
//         <div className="car__img">
//           <img src={imgUrl} alt="" className="w-100" />
//         </div>

//         <div className="car__item-content mt-4">
//           <h4 className="section__title text-center">{carName}</h4>
//           <h6 className="rent__price text-center mt-">
//             ${p}.00 <span></span>
//           </h6>

//           <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
//             <span className=" d-flex align-items-center gap-1">
//               <i class="ri-car-line"></i> {model}
//             </span>
//             <span className=" d-flex align-items-center gap-1">
//               <i class="ri-settings-2-line"></i> {automatic}
//             </span>
//             <span className=" d-flex align-items-center gap-1">
//               <i class="ri-timer-flash-line"></i> {speed}
//             </span>
//           </div>
//           <form >
//                     <div className="form">
                    
//                     <TextField 
//                         className="input p-2 "
//                         id="bid"
//                         name="bid"
//                          onChange={BidChange}
                         
//                          variant="standard" />
//                         <br />
//                     <Button onClick={()=>clicked(bid)} className="mt-2 p-2  " variant="contained" color="primary" >مزايدة</Button>
           
//                     <br />
//                     <FormLabel className="error"> Bid Amount Should be greater</FormLabel>
                    
//                     </div>

//                 </form>
//           <button className=" w-50 car__item-btn car__btn-rent">
//             <Link to={`/cars/${carName}`}>مزايدة</Link>
//           </button>

//           <button className=" w-50 car__item-btn car__btn-details">
//             <Link to={`/cars/${carName}`}>تفاصيل</Link>
//           </button>
//         </div>
//         <p>{currentTime}</p>
//       </div>
//     </Col>
//   );
// };

// export default Item;
const Item = (props) => {
  const { id, imgUrl, model, carName, automatic, speed, price } = props.item;
  const [currentTime, setCurrentTime] = useState(moment().format("HH:mm:ss"));
  const [bidAmount, setBidAmount] = useState("");
  const [auctionActive, setAuctionActive] = useState(true);

  const handleBidSubmit = (event) => {
    event.preventDefault();
    // Call handleBidSubmit function passed from CarListing
    props.handleBidSubmit(parseFloat(bidAmount), id);
    // Update local auctionActive state
    setAuctionActive(false);
  };

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <img src={imgUrl} alt="" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{carName}</h4>
          <h6 className="rent__price text-center mt-">
            ${price}.00 <span></span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-car-line"></i> {model}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-settings-2-line"></i> {automatic}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-timer-flash-line"></i> {speed}
            </span>
          </div>
          {auctionActive ? (
            <form onSubmit={handleBidSubmit}>
              <div className="form">
                <TextField
                  className="input p-2 "
                  id="bid"
                  name="bid"
                  value={bidAmount}
                  onChange={(e) => setBidAmount(e.target.value)}
                  variant="standard"
                />
                <br />
                <Button
                  type="submit"
                  className="mt-2 p-2"
                  variant="contained"
                  color="primary"
                >
                  مزايدة
                </Button>
              </div>
            </form>
          ) : (
            <p>المزاد انتهى</p>
          )}

          <button className=" w-50 caritem-btn carbtn-rent">
            <Link to='{/cars/${carName}}'>مزايدة</Link>
          </button>

          <button className=" w-50 caritem-btn carbtn-details">
            <Link to='{/cars/${carName}}'>تفاصيل</Link>
          </button>
        </div>
        <p>{currentTime}</p>
      </div>
    </Col>
  );
};

export default Item;