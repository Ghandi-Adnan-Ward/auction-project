import React from "react";

import CommonSection from "../components/UI/CommonSection/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection/AboutSection";
import { Container, Row, Col } from "reactstrap";
import Advertising from "../components/UI/Advertising/Advertising";

import OurMembers from '../components/UI/OurMembers/OurMembers'
import "../styles/About.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="حول الموقع" />
      <AboutSection aboutClass="aboutPage" />
 

      <Advertising />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">المصممون</h6>
              <h2 className="section__title">أعضاء الفريق</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
