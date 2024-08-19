import React, { useEffect, useState } from 'react'
 import PaymentMethod from '../PaymentMethod/PaymentMethod'
import BookingForm from '../BookingForm/BookingForm'
import { Col, Container, Row } from 'reactstrap'
import paypal from "../../../assets/all-images/paypal.jpg";
import av from '../../../assets/all-images/cars-img/nissan-offer.png'
import './Checkout.css'
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
import PublicIcon from '@mui/icons-material/Public';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import CropDinIcon from '@mui/icons-material/CropDin'
import BedroomParentIcon from '@mui/icons-material/BedroomParent'
import axios from 'axios';
const CheckoutAqar = () => {
  const [aqarData, setaqarData] = useState([]);

  const getData=async()=>{
    try {
      const response = await axios.get('http://localhost:8000/api/v1/user/specificAuction/62');
      setaqarData(response.data);
      console.log(response.data.details)
    } 
    catch (error) {
      console.log(error)
      
    }
  }
  useEffect(() => {
    getData()   
  }, [])
  return (
   <section>
      <Container>
          <Row>
          <Col lg="7" className="mt-5">
             <img src={av} alt="" className="" />
              </Col>

             <Col lg="5" className="mt-7">
            <div className="payment__info">
                <h5 className="check mb-4 fw-bold ">معلومات العقار</h5>
               </div>
               <div
                className=" d-flex align-items-center justify-content-between"
                style={{ columnGap: "4rem" }}
              >
                <span className=" d-flex align-items-center gap-1 section__description">
                 <h3><PublicIcon className='p-1' htmlColor="#f9a826" fontSize="large"/>
                  {"البلد: "}
                  {aqarData.details?.country}

                  </h3>
                </span>

                <span className=" d-flex align-items-center gap-1 section__description">
                  <h3>
                    <LocationCityIcon className='p-1' htmlColor="#f9a826" fontSize="large"/>
                  {"المدينة: "}
                  {aqarData.details?.city}

                   </h3>
                </span>

                
              </div>
              <div
                className=" d-flex align-items-center justify-content-center mt-9"
                style={{ columnGap: "2.8rem" }}
              ><span className=" d-flex align-items-center gap-1 section__description">
              <h3>
              <LocationCityIcon className='p-1' htmlColor="#f9a826" fontSize="large"/>
               {"المنطقة: "}
               {aqarData.details?.area}

               </h3>
            </span></div>
              
              <div
                 style={{ columnGap: "2.8rem" }}
              >
                <span className=" d-flex align-items-center gap-1 section__description1">
                  <h3>
                    <AddRoadIcon className='p-1' htmlColor="#f9a826" fontSize="large"/>
                  {"الشارع: "}
                  {aqarData.details?.street}

                   </h3>
                </span>
                </div>
                <div
                 style={{ columnGap: "2.8rem" }}
              >
                 <span className=" d-block align-items-center gap-1 section__description1">
                 <h3>
                 <LocationCityIcon className='p-1' htmlColor="#f9a826" fontSize="large"/>
                {"الطابق: "}
                {aqarData.details?.floor}

                  </h3>
                 <h3>
                    <CropDinIcon className='p-1' htmlColor="#f9a826" fontSize="large"/>
                  {"المساحة الكلية: "}
                  {aqarData.details?.total_area}

                  </h3>
                 <h3>
                    <BedroomParentIcon className='p-1' htmlColor="#f9a826" fontSize="large"/>
                  {"عدد غرف النوم: "}
                  {aqarData.details?.num_bedrooms}

                  </h3>
                </span>

                </div>
            </Col>

            <Col lg="7" className="mt-5">
              <div className="booking-info mt-5">
                <h5 className=" mb-4 fw-bold ">المعلومات الشخصية</h5>
                <BookingForm />
              </div>
            </Col>

            <Col lg="5" className="mt-5">
              <div className="payment__info mt-5">
                <h5 className="mb-4 fw-bold ">معلومات الدفع</h5>
                <PaymentMethod />
              </div>
            </Col>
          </Row>
        </Container>
   </section>
  )
}

export default CheckoutAqar