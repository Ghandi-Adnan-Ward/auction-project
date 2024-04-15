import React, {  useEffect, useRef } from "react";

import { Container, Row, Col } from "reactstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
 
const navLinks = [
  {
    path: "/home",
    display: "الرئيسية",
  },
  {
    path: "/about",
    display: "حول",
  },
  {
    path: "/cars",
    display: "سيارات",
  },

  {
    path: "/laptop",
    display: "لابتوبات",
  },
  {
    path: "/contact",
    display: "تواصل معنا",
  },
   
  {
    path: "/addbazar",
    display: "إضافة"
  },
];

const Header = () => {
  const menuRef = useRef(null);
   const navigate = useNavigate();
   
  useEffect(() => {
    const fetchData = async () => {
      const jwt_token = localStorage.getItem('jwt_token');

   
      if (jwt_token==null) {
        navigate('/login'); // Redirect to login page if jwt_token is not present
        return;
       }

      
    }

    fetchData();
  }, [navigate]);
   
  
  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>أتحتاج مساعدة ؟</span>
                <span className="header__top__help">
                  <i className="ri-phone-fill"></i> 963-930-547-778+
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <Link to="/login" className=" d-flex align-items-center gap-1">
                  <i className="ri-login-circle-line"></i> تسجيل الدخول
                </Link>
                 

                <Link to="/register" className=" d-flex align-items-center gap-1">
                  <i className="ri-user-line"></i> إنشاء حساب
                </Link>

                <Link to="/logout" className=" d-flex align-items-center gap-1">
                  <i className="ri-login-circle-line"></i> تسجيل خروج
                </Link>
              </div>
            </Col>
          </Row>
          
        </Container>
      </div>

      {/* =============== header middle =========== */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className=" d-flex align-items-center gap-2">
                    <i className="ri-car-line"></i>
                    <i className="ri-computer-line"></i>
                    <span>
                    خدمة <br />  مزايدة
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>سوريا</h4>
                  <h6>سوريا,مدينة حمص</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>من الأحد إلى الخميس</h4>
                  <h6></h6>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className=" d-flex align-items-center justify-content-end "
            >
              <button className="header__btn btn ">
                <Link to="/contact">
                  <i className="ri-phone-line"></i>تواصل معنا
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
         <Container>
        <div className="navigation__wrapper d-flex align-items-center justify-content-between">
          <span className="mobile__menu">
            <i className="ri-menu-line" onClick={toggleMenu}></i>
          </span>

          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu">
              {navLinks.map((item, index) => (
                <NavLink
                  to={item.path}
                  className={(navClass) =>
                    navClass.isActive ? "nav__active nav__item" : "nav__item"
                  }
                  key={index}
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

    
        </div>
      </Container>
          
      </div>
    </header>
  );
};

export default Header;
