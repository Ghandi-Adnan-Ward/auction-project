// Item.js
import React, { } from "react";
import { Col } from "reactstrap";
import {  useNavigate } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";
import './Item.css'
import PaidIcon from '@mui/icons-material/Paid';
const AuctionCarUser = ({auction}) => {
    const navigate=useNavigate();
  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <Zoom>
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
            <svg xmlns="http://www.w3.org/2000/svg"  width="35" height="35" style={{ verticalAlign: '-0.125em' }} viewBox="0 0 24 24"><g transform="translate(24 0) scale(-1 1)"><path fill="currentColor" d="M19 20H5V21C5 21.5523 4.55228 22 4 22H3C2.44772 22 2 21.5523 2 21V11L4.4805 5.21216C4.79566 4.47679 5.51874 4 6.31879 4H17.6812C18.4813 4 19.2043 4.47679 19.5195 5.21216L22 11V21C22 21.5523 21.5523 22 21 22H20C19.4477 22 19 21.5523 19 21V20ZM20 13H4V18H20V13ZM4.17594 11H19.8241L17.6812 6H6.31879L4.17594 11ZM6.5 17C5.67157 17 5 16.3284 5 15.5C5 14.6716 5.67157 14 6.5 14C7.32843 14 8 14.6716 8 15.5C8 16.3284 7.32843 17 6.5 17ZM17.5 17C16.6716 17 16 16.3284 16 15.5C16 14.6716 16.6716 14 17.5 14C18.3284 14 19 14.6716 19 15.5C19 16.3284 18.3284 17 17.5 17Z"></path></g></svg>

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
                  <span>{auction.details?.manufacturing_year}</span>
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
                تعديل
          </button>
        </div>
      </Zoom>  
    </Col>
  );
};

export default AuctionCarUser;