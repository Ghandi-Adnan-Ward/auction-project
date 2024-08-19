import React, { useState } from 'react'
 import PaymentMethod from '../PaymentMethod/PaymentMethod'
import BookingForm from '../BookingForm/BookingForm'
import { Col, Container, Row } from 'reactstrap'
import paypal from "../../../assets/all-images/paypal.jpg";
import av from '../../../assets/all-images/cars-img/mercedes-offer.png'
import axios from 'axios';
import './Checkout.css'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
const CheckoutCar = () => {
  const jwt_token=localStorage.getItem('jwt_token');
  const [CarData, setCarData] = useState([]);
const{slug}=useParams()
 
  const config={
    headers:{
      Authorization:`Bearer ${jwt_token}`
    }
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    const Edit=new FormData();
    Edit.append('first_name',event.target.first_name.value);
    Edit.append('second_name',event.target.second_name.value);
    Edit.append('email',event.target.email.value );
    Edit.append('phone',event.target.phone.value);
    Edit.append('address',event.target.add.value);
    Edit.append('address',event.target.model.value);
    Edit.append('address',event.target.model.value);

  }
  const getData=async()=>{
    try {
      const response = await axios.get('http://localhost:8000/api/v1/user/specificAuction/'+slug);
      setCarData(response.data);
      console.log(response.data)
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
          <img src={`http://localhost:8000/storage/${CarData.image}`} alt="car" className="w-75 " />
              </Col>

             <Col lg="5" className="mt-7">
            <div className="payment__info ">
                <h5 className="check mb-4 fw-bold">معلومات السيارة</h5>
               </div>
               <div
                  className=" d-flex align-items-center justify-content-between"
                  style={{ columnGap: "4rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                  <h3>
                  <i
                      className="ri-roadster-line p-1"
                      style={{ color: "#f9a826" }}
                    ></i>{"الموديل: "}
                    {CarData.details?.model}
                   </h3>
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <h3>
                    <i
                      className="ri-settings-2-line p-1"
                      style={{ color: "#f9a826" }}
                    ></i>{"الصنف: "}
                                        {CarData.details?.brand}

                     </h3>
                  </span>

                  
                </div>
               <div
                  className=" d-flex  mt-9"
                  style={{ columnGap: "2.8rem" }}
                ><span className=" d-flex gap-1 section__description">
                <h3>
                <i
                  className="ri-timer-flash-line p-1"
                  style={{ color: "#f9a826"}}
                ></i>{"نوع المحرك: "}
                {CarData?.details?.engine_type}

                
                 </h3>
              </span></div>
              <div
                  style={{ columnGap: "2.8rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description1">
                    <h3>
                    <i className="ri-map-pin-line p-1" style={{ color: "#f9a826" }}></i>{"سنة التصنيع: "}
                    {CarData?.details?.manufacturing_year}

                     </h3>
                  </span>
                  </div>
                  <div
                  style={{ columnGap: "2.8rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description1">
                  <h3>
                  <i
                      className="ri-wheelchair-line p-1"
                      style={{ color: "#f9a826" }}
                    ></i>{"سنة التسجيل: "}
                    {CarData?.details?.registration_year}

                    

                   </h3>
                  </span>

                  </div>
            </Col>

            <Col lg="7" className="mt-5">
              <div className="booking-info mt-5">
                <h5 className="mb-4 fw-bold ">المعلومات الشخصية</h5>
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

export default CheckoutCar