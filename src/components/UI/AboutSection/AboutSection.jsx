import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./AboutSection.css";
import aboutImg from "../../../assets/all-images/cars-img/bmw-offer.png";
import aboutImg2 from "../../../assets/all-images/slider-img/lap.jpg"
const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "0px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">حول الموقع</h4>
              <h2 className="section__title">أهلا بك في خدمة المزايدة</h2>
              <h1 className="section__description">
               مع خدمة مزايدة السيارات احصل على سيارتك
              </h1>

              <div className="about__section-item d-flex align-items-center">
                <h3 className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i>اختر أفضل الميزات التي تريدها
                </h3>

                {/* <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> choose your favourite color
                </p> */}
              </div>

              <div className="about__section-item d-flex align-items-center">
                <h3 className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> اختر اللون الذي ترغب به
                </h3>

                {/* <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                  amet.
                </p> */}
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
        <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg2} alt="" className="w-100" />
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="about__section-content">
            <h4 className="section__subtitle">حول الموقع</h4>
              <h2 className="section__title">أهلا بك في خدمة المزايدة</h2>
              <h1 className="section__description">
               مع خدمة مزايدة اللابتوبات احصل على لابتوبك
              </h1>

              <div className="about__section-item d-flex align-items-center">
                <h3 className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i>اختر أفضل الميزات التي تريدها
                </h3>

                
              </div>

              <div className="about__section-item d-flex align-items-center">
                <h3 className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> احصل على أفضل المعالجات
                </h3>

                {/* <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                  amet.
                </p> */}
              </div>
            </div>
          </Col>

        
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
