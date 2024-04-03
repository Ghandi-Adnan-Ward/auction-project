import React from "react";
import "./Advertising.css";
import { Container, Row, Col } from "reactstrap";

import driverImg from "../../../assets/all-images/toyota-offer-2.png";

const Advertising = () => {
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img src={driverImg} alt="" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
          <h1 className="section__title become__driver-title">
              الإعلانات !!!
          </h1>
            <h2 className="section__title become__driver-title">
              هل أنت ميكانيكي سيارات
            </h2>

            <button className="btn become__driver-btn mt-4">
              تواصل معنا
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Advertising;
