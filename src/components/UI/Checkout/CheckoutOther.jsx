import React, { useEffect } from 'react'
 import PaymentMethod from '../PaymentMethod/PaymentMethod'
import BookingForm from '../BookingForm/BookingForm'
import { Col, Container, Row } from 'reactstrap'
import paypal from "../../../assets/all-images/paypal.jpg";
import av from '../../../assets/all-images/cars-img/offer-toyota.png'
import './Checkout.css'
import axios from 'axios';
const CheckoutOther = () => {
    const getData=async()=>{
        try {
          const response = await axios.get('');
    
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
              <div className="booking-info">
                <h5 className="mb-4 fw-bold ">المعلومات الشخصية</h5>
                <BookingForm />
              </div>
            </Col>

            <Col lg="5" className="mt-5">
              <div className="payment__info ">
                <h5 className="mb-4 fw-bold ">معلومات الدفع</h5>
                <PaymentMethod />
              </div>
            </Col>

          </Row>
        </Container>
   </section>
  )
}

export default CheckoutOther