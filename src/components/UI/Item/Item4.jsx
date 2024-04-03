import React,{useState} from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./Item.css";
 
import { Button, FormLabel, TextField } from "@material-ui/core";

const Item2 = (props) => {
  const { imgUrl, model, lapName, automatic, speed, price } = props.item;
  const [p,setp]=useState(price)
  const [bid,setbid]=useState(0)
  let i=0;
  function onclick(bid) {
    i++;
    setp(bid);
    if(i===1){
      setTimeout(() => {
        
      }, 10000);
    }
  }
   const BidChange = (e) => {
    const bid = e.target.value;
    if (bid >= p) {
      setbid(bid)
      } else {
      setbid(p)
  }
   }
   const clicked=()=>{
    let d=bid
    // let arr=[...Array(d).concat(d)]

    setp(d)
    console.log(d);
    // console.log(arr)
  }
  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <img src={imgUrl} alt="" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{lapName}</h4>
          <h6 className="rent__price text-center mt-">
            ${p}.00 <span></span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-car-line"></i> {model}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-settings-2-line"></i> {automatic}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-timer-flash-line"></i> {speed}
            </span>
          </div>
          <form >
                    <div className="form">
                    
                    <TextField 
                        className="input p-2 "
                        id="bid"
                        name="bid"
                        onChange={BidChange}
                         
                         variant="standard" />
                        <br />
                    <Button onClick={clicked} className="mt-2 p-2  " variant="contained" color="primary" >BID</Button>
           
                    <br />
                    <FormLabel className="error"> Bid Amount Should be greater</FormLabel>
                    
                    </div>

                </form>
          <button className=" w-50 car__item-btn car__btn-rent">
            <Link to={`/login`}>auction</Link>
          </button>

          <button className=" w-50 car__item-btn car__btn-details">
            <Link to={`/laptop/${lapName}`}>Details</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default Item2;

// import React, { useState, useEffect } from "react";
// import { Col } from "reactstrap";
// import { Link } from "react-router-dom";
// import "./Item.css";
// import { Button, FormLabel, TextField } from "@material-ui/core";

// const Item2 = (props) => {
//   const { imgUrl, lapName, price } = props.item;
//   const [bid, setBid] = useState(0);
//   const [bids, setBids] = useState([]);
//   const [highestBid, setHighestBid] = useState(0);
//   const [auctionActive, setAuctionActive] = useState(false);

//   const handleBidChange = (e) => {
//     const newBid = parseFloat(e.target.value);
//     setBid(newBid);
//   };

//   const handleBidSubmit = (e) => {
//     e.preventDefault()
//     setBids([...bids, bid]);
//   };

//     useEffect(() => {
//          const intervalId = setInterval(() => {
//           // Calculate highest bid
//           const maxBid = Math.max(...bids);
//           setHighestBid(maxBid);
//         }, 5000); // Check every 5 seconds
    
//         // const auctionTimer = setTimeout(() => {
//         //   setAuctionActive(false);
//         //   clearInterval(intervalId);
//         //   console.log("تم إيقاف المزاد");
//         //   console.log({ bids });
//         // }, 10000); // 10 seconds
    
//         return () => {
//           clearInterval(intervalId);
//           // clearTimeout(auctionTimer);
//        }
//     }, [bids])
  
//   const startAuction = () => {
//      setAuctionActive(true);
// setTimeout(() => {
//     setAuctionActive(false);
//     console.log("تم إيقاف المزاد");
//     console.log({ bids });
// }, 10000);  };
//   return (
//     <Col lg="4" md="4" sm="6" className="mb-5">
//       <div className="car__item">
//         <div className="car__img">
//           <img src={imgUrl} alt="" className="w-100" />
//         </div>

//         <div className="car__item-content mt-4">
//           <h4 className="section__title text-center">{lapName}</h4>
//           {auctionActive ? (
//             <>
//               <form>
//                 <div className="form">
//                   <TextField
//                     className="input p-2"
//                     id="bid"
//                     name="bid"
//                     onChange={handleBidChange}
//                     variant="standard"
//                   />
//                   <br />
//                   <Button
//                     onClick={handleBidSubmit}
//                     className="mt-2 p-2"
//                     variant="contained"
//                     color="primary"
//                   >
//                     BID
//                   </Button>
//                   <br />
//                   <FormLabel className="error">
//                     Bid Amount Should be greater
//                   </FormLabel>
//                 </div>
//               </form>
             
//             </>
//           ) : (
//             <div className="form">
//               <Button
//                     onClick={startAuction}
//                     className="mt-2 p-2"
//                     variant="contained"
//                     color="primary"
//                   >
//                     Start Auction
//                   </Button>
//             {/* <button onClick={startAuction} className=" w-100">Start Auction</button> */}
//                           <h6 className="rent__price text-center mt-">
//                 Highest Bid: {highestBid}.00$
//               </h6>
//             </div>
//           )}

//           <button className="w-50 caritem-btn carbtn-rent">
//             <Link to="/login">مزايدة</Link>
//           </button>

//           <button className="w-50 caritem-btn carbtn-details">
//             <Link to='{/laptop/${lapName}}'>Details</Link>
//           </button>
//         </div>
//       </div>
//     </Col>
//   );
// };

// export default Item2;

// import React, { useState, useEffect } from "react";
// import { Col } from "reactstrap";
// import { Link } from "react-router-dom";
// import "./Item.css";
// import { Button, FormLabel, TextField } from "@material-ui/core";

// const Item2 = (props) => {
//   const { imgUrl, model, lapName, automatic, speed, price } = props.item;
//   const [bid, setBid] = useState(0);
//   const [bids, setBids] = useState([]);
//   const [highestBid, setHighestBid] = useState(price);
//   const [auctionActive, setAuctionActive] = useState(false);

//   const handleBidChange = (e) => {
//     const newBid = parseFloat(e.target.value);
//     setBid(newBid);
//   };

//   const handleBidSubmit = (e) => {
//     e.preventDefault()
//     setBids([...bids, bid]);
//   };

//   const startAuction=()=>{
//     setAuctionActive(true);
//     setTimeout(() => {
//       setAuctionActive(false)
//       console.log("تم إيقاف المزاد");
//       console.log({ bids });
//     }, 10000);
//   }
  
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       // Calculate highest bid
//       const maxBid = Math.max(...bids);
//       setHighestBid(maxBid);
//     }, 5000); // Check every 5 seconds

//     // const auctionTimer = setTimeout(() => {
//     //   setAuctionActive(false);
//     //   clearInterval(intervalId);
//     //   console.log("تم إيقاف المزاد");
//     //   console.log({ bids });
//     // }, 10000); // 10 minutes

//     return () => {
//       clearInterval(intervalId);
//       // clearTimeout(auctionTimer);
//     };
//   }, [bids]);

//   return (
//     <Col lg="4" md="4" sm="6" className="mb-5">
//       <div className="car__item">
//         <div className="car__img">
//           <img src={imgUrl} alt="" className="w-100" />
//         </div>

//         <div className="car__item-content mt-4">
//           <h4 className="section__title text-center">{lapName}</h4>
//           {auctionActive ? (
//             <>
//               <form onSubmit={handleBidSubmit}>
//                 <div className="form">
//                   <TextField
//                     className="input p-2"
//                     id="bid"
//                     name="bid"
//                     onChange={handleBidChange}
//                     variant="standard"
//                   />
//                   <br />
//                   <Button
//                   type="submit"
//                     // onClick={handleBidSubmit}
//                     className="mt-2 p-2"
//                     variant="contained"
//                     color="primary"
//                   >
//                     BID
//                   </Button>
//                   <br />
//                   <FormLabel className="error">
//                     Bid Amount Should be greater
//                   </FormLabel>
//                 </div>
//               </form>
              
//             </>
//           ) : (
//             <div className="form">
//                <Button
//                     onClick={startAuction}
//                     className="mt-2 p-2"
//                     variant="contained"
//                     color="primary"
//                   >
//                     Start Auction
//                   </Button>
//               <h6 className="rent__price text-center mt-">
//                 Highest Bid: ${highestBid}.00
//               </h6>

//               <p className="text-center">المزاد انتهى</p>

//             </div>
//           )}

//           <button className="w-50 caritem-btn carbtn-rent">
//             <Link to="/login">مزايدة</Link>
//           </button>

//           <button className="w-50 caritem-btn carbtn-details">
//             <Link to='{/laptop/${lapName}}'>Details</Link>
//           </button>
//         </div>
//       </div>
//     </Col>
//   );
// };