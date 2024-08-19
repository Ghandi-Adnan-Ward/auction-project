import React, { useEffect, useState } from "react";
import { Container, Row, Col, Fade } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection/AboutSection";
import Advertising from "../components/UI/Advertising/Advertising";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import {Zoom} from 'react-reveal'

import { Zoom } from "react-awesome-reveal";
import Item4 from "../components/UI/Item/Item4";
import Item5 from "../components/UI/Item/Item5";
import Item6 from "../components/UI/Item/Item6";
import Item8 from "../components/UI/Item/Item8";
 const Home = (props) => {
  const navigate = useNavigate();
  const [carAuctions, setCarAuctions] = useState([]);
  const [realEstateAuctions, setRealEstateAuctions] = useState([]);
  const [otherAuctions, setOtherAuctions] = useState([]);
  const [tender, setTender] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const carResponse = await axios.get('http://localhost:8000/api/v1/user/car-auctions');
        setCarAuctions(carResponse.data);

        const realEstateResponse = await axios.get('http://localhost:8000/api/v1/user/real-estate-auctions');
        setRealEstateAuctions(realEstateResponse.data);

        const otherResponse = await axios.get('http://localhost:8000/api/v1/user/other-auctions');
        setOtherAuctions(otherResponse.data);
        const tenderResponse = await axios.get('http://localhost:8000/api/v1/user/other-auctions');
        setTender(tenderResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Helmet title="Home">
      <div className="home-page">
      <Zoom triggerOnce>
      <AboutSection />
      
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">مزادات السيارات</h6>
              <h2 className="section__title">أفضل مزادات السيارات</h2>
            </Col>
            {carAuctions.slice(-3).map((item) => (
                <Item4  
                item={item}
              key={item.id}/>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">مزادات العقارات</h6>
              <h2 className="section__title">ابحث عن العقار الذي تحلم به</h2>
            </Col>
            {realEstateAuctions.slice(-3).map((item) => (
                <Item5 
                item={item}
                key={item.id}                />
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">مزادات أخرى</h6>
              <h2 className="section__title">استكشف مزادات متنوعة</h2>
            </Col>
            {otherAuctions.slice(-3).map((item) => (
                <Item6 
                 item={item}
                key={item.id}   />
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">مناقصات </h6>
              <h2 className="section__title">استكشف مناقصات متنوعة</h2>
            </Col>
            {tender.slice(-3).map((item) => (
                <Item8 
                 item={item}
                key={item.id}   />
            ))}
          </Row>
        </Container>
      </section>
      <section className="mb-2">
        <Advertising />
      </section>
      </Zoom>
      </div>
    </Helmet>
  );
};

export default Home;
