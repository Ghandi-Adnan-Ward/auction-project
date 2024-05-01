// Item.js
import React, {  } from "react";
import { Col } from "reactstrap";
import {useNavigate} from "react-router-dom";
import moment from 'moment';
import './Item.css'
import PaidIcon from '@mui/icons-material/Paid';
const AuctionOtherUser = ({auction}) => {
    const navigate=useNavigate();
  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <img src={`http://localhost:8000/storage/${auction.image}`} alt="car" className="w-100" />
        </div>
         <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{auction.name}</h4>
          <h6 className="rent__price text-center mt-">
             <PaidIcon />{'السعر الابتدائي:'}
             <br/>
           ${auction.minimum_bid}.00  
         </h6> 
         <h4>{auction.description}</h4>
          
                
              </div>
              <div >
                <span>سعر البداية</span> {/* Starting Bid in Arabic */}
                <span>${auction.minimum_bid}</span>
              </div>
          <button onClick={()=>{navigate(`/user/editother/${auction.id}`)}} className=" w-100 car__item-btn car__btn-details">
          مزايدة/تفاصيل
          </button>
        </div>
      </Col>
  );
};

export default AuctionOtherUser;