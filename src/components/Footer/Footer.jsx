import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "حول",
  },
  {
    path: "/cars",
    display: "السيارات",
  },
  {
    path: "/laptop",
    display: "لابتوبات",
  },

  {
    path: "/contact",
    display: "تواصل معنا",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
        <Col lg="5" md="4" sm="6">
            <div className="logo footer__logo ">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                   <span>
                   <i className="ri-car-line"></i>
                   <i className="ri-computer-line"></i>  
                                    </span>
                  <span>
                  خدمة <br />  مزايدة
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              أهلا بك في خدمة المزايدة (سيارات,لابتوبات)
              <br />
              <br />
             معنا يمكنك الحصول على أفضل الميزات والخيارات 
            </p>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">روابط وصول</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="4" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">العنوان</h5>
              <p className="office__info">سوريا,حمص</p>
              <p className="office__info">رقم الهاتف: +963930547778</p>

              <p className="office__info">الإيميل: ghandi.ward@gmail.com</p>

              <p className="office__info">أوقات الدوام: 8am - 8pm</p>
            </div>
          </Col>

          {/* <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">ر</h5>
              <p className="section__description">Subscribe our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col> */}

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i className="ri-copyright-line"></i>Copyright {year}, Developed by
                our team. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
