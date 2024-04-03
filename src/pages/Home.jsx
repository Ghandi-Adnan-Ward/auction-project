import React from "react";

import Sliders from "../components/UI/Sliders/Sliders";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
 import AboutSection from "../components/UI/AboutSection/AboutSection";
import carData from "../assets/data/carData";
import Item3 from "../components/UI/Item/Item3";
import Advertising from "../components/UI/Advertising/Advertising";
 
import lapData from "../assets/data/lapData";
import Item2 from "../components/UI/Item/Item2";

const Home = () => {
  return (
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <Sliders />
      </section>
      {/* =========== about section ================ */}
      <AboutSection />
     
      {/* =========== car offer section ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">إبدأ معنا</h6>
              <h2 className="section__title">أفضل الأسعار</h2>
            </Col>

            {carData.slice(0, 3).map((item) => (
              <Item3 item={item} key={item.id} />
            ))}
            {lapData.slice(0,2).map((item)=>(
              <Item2 item={item} key={item.id} />
            ))}
                        
          </Row>
        </Container>
      </section>
      {/* =========== become a driver section ============ */}
      <section className="mb-2">
      <Advertising />

      </section>
      {/* =========== testimonial section =========== */}
      {/* <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">Our clients says</h6>
              <h2 className="section__title">Testimonials</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section> */}

    </Helmet>
  );
};

export default Home;
