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
const AuctionCarUser = ({auction}) => {
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
          
          <h5>{auction.type}</h5>
           
          <div >
            <span className=" d-flex align-items-center gap-1">
                    {auction.details?.brand} {auction.details?.model} {auction.details?.engine_type}
            </span>
          
          </div>
          <div>
                  <span>العلامة التجارية:</span> {/* Brand in Arabic */}
                  <span>{auction.details?.brand || "غير متوفر"}</span> {/* N/A in Arabic */}
                </div>
                <div >
                  <span>الموديل: </span> {/* Model in Arabic */}
                  <span>{auction.details?.model}</span>
                </div>
                <div>
                  <span>سنة الصنع: </span> {/* Manufacturing Year in Arabic */}
                  <span>{auction.manufacturing_year}</span>
                </div>
                <div >
                  <span>سنة التسجيل: </span> {/* Registration Year in Arabic */}
                  <span>{auction.details?.registration_year}</span>
                </div>
                <div >
                  <span>نوع المحرك: </span> {/* Engine Type in Arabic */}
                  <span>{auction.details?.engine_type || "غير متوفر"}</span> {/* N/A in Arabic */}
                </div>
              </div>
              <div >
                <span>سعر البداية: </span> {/* Starting Bid in Arabic */}
                <span>${auction.minimum_bid}</span>
              </div>
          <button onClick={()=>{navigate(`/user/editcar/${auction.id}`)}} className=" w-100 car__item-btn car__btn-details">
          مزايدة/تفاصيل
          </button>
        </div>
      </Col>
  );
};

export default AuctionCarUser;