import React,{useEffect} from "react";
import CommonSection from "../components/UI/CommonSection/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection/AboutSection";
import { Container, Row, Col, Fade } from "reactstrap";
import Advertising from "../components/UI/Advertising/Advertising";
import OurMembers from '../components/UI/OurMembers/OurMembers'
import "../styles/About.css";
import { Zoom } from "react-awesome-reveal";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Helmet title="About">
      <Zoom>
      <CommonSection title="حول الموقع" />

      </Zoom>
      <Zoom>      
        <AboutSection aboutClass="aboutPage" />
      </Zoom> 

      <Zoom>
        <Advertising />
      </Zoom>

      <Zoom>
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

      </Zoom>
    </Helmet>
  );
};

export default About;
