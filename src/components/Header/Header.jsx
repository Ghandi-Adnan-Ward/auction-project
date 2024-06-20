import React, {  useEffect, useRef,useState } from "react";
import axios from'axios'
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import PersonPinIcon from '@mui/icons-material/PersonPin';
import LogoutIcon from '@mui/icons-material/Logout';
import "./Header.css";
import { Fade, Roll, Zoom } from "react-awesome-reveal";

 const navLinksNOtAuth = [
  {
    path: "/home",
    display: "الرئيسية",
  },
  {
    path: "/about",
    display: "حول",
  },   
  {
    path: "/contact",
    display: "تواصل معنا",
  },
];
const navLinksAuth = [
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
    path: "/aqar",
    display: "عقارات",
  },
  {
    path: "/other",
    display: "أخرى",
  },
  {
    path: "/all",
    display: "الكل",
  },
  {
    path: "/contact",
    display: "تواصل معنا",
  },
   
  {
    path: "/addauction",
    display: "إضافة"
  },
];
const Header = () => {
  const navigate=useNavigate()
  const jwt_token = localStorage.getItem('jwt_token');
  // useEffect(() => {
  //   if(!jwt_token){
  //     navigate('/')
  //   }
  
     
  // }, [])
  
  const menuRef = useRef(null);
   
  
  const[user,setuser]=useState('')  
 
  useEffect(() => {
    const getData = async () => {
      // setloading(true);
      // setShowAlert(true);
  
      try {
        const config={
          headers:{
            Authorization:`Bearer ${jwt_token}`
      
          }
        }
        const response = await axios.get('http://localhost:8000/api/v1/user/details',config);
        setuser(response.data);
        console.log(response.data);
        // setShowAlert(false);
        // setloading(false);
      } catch (error) {
        // setError(error)
        // setShowAlert(false)
        // setShowAlert1(true);
        console.error('Error fetching data:', error);
       }
    };
  
    getData();
  }, []);

  const toggleMenu = () => {
      if(menuRef.current){
        menuRef.current.classList.toggle("menu__active");

      }    
    }

  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <Zoom>
                <span>أتحتاج مساعدة ؟</span>
                <span className="header__top__help">
                  <i className="ri-phone-fill"></i> 963-930-547-778+
                </span>
                </Zoom>
              </div>
            </Col>
              {jwt_token == null ?
              (
              <Col lg="6" md="6" sm="6">
             <Zoom>
             <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <Link to="/login" className=" d-flex align-items-center gap-1">
                  <i className="ri-login-circle-line"></i> تسجيل الدخول
                </Link>
                 

                <Link to="/register" className=" d-flex align-items-center gap-1">
                  <i className="ri-user-line"></i> إنشاء حساب
                </Link>
                 
               </div>
             </Zoom>
            </Col>
              )
            :
            (
            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
              <Zoom>
              <Link to="/user" className=" d-flex align-items-center gap-1" >
               {/* <i className="ri-map-pin-user-fill" style={{fontSize:'20px'}}></i> */}
               <PersonPinIcon fontSize="medium" color="#fff" />
                {user.details?.first_name} {user.details?.last_name} 
                </Link>
                 <Link to="/logout" className=" d-flex align-items-center gap-1">
                  <LogoutIcon fontSize="medium" />
                   تسجيل خروج
                </Link>
              </Zoom>
               </div>
            </Col>
            )  
          }
            
          </Row>
          
        </Container>
      </div>

      {/* =============== header middle =========== */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <Zoom>
                <h1>
                  <Link to="/home" className=" d-flex align-items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg"  width="35" height="35" style={{ verticalAlign: '-0.125em' }} viewBox="0 0 24 24"><g transform="translate(24 0) scale(-1 1)"><path fill="currentColor" d="M19 20H5V21C5 21.5523 4.55228 22 4 22H3C2.44772 22 2 21.5523 2 21V11L4.4805 5.21216C4.79566 4.47679 5.51874 4 6.31879 4H17.6812C18.4813 4 19.2043 4.47679 19.5195 5.21216L22 11V21C22 21.5523 21.5523 22 21 22H20C19.4477 22 19 21.5523 19 21V20ZM20 13H4V18H20V13ZM4.17594 11H19.8241L17.6812 6H6.31879L4.17594 11ZM6.5 17C5.67157 17 5 16.3284 5 15.5C5 14.6716 5.67157 14 6.5 14C7.32843 14 8 14.6716 8 15.5C8 16.3284 7.32843 17 6.5 17ZM17.5 17C16.6716 17 16 16.3284 16 15.5C16 14.6716 16.6716 14 17.5 14C18.3284 14 19 14.6716 19 15.5C19 16.3284 18.3284 17 17.5 17Z"></path></g></svg>
                    <svg   width="35" height="35" viewBox="0 0 24 24"  style={{ verticalAlign: '-0.125em' }}><g transform="translate(24 0) scale(-1 1)"><path fill="currentColor" d="M21 21H3a1 1 0 0 1-1-1v-7.513a1 1 0 0 1 .343-.754L6 8.544V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1M9 19h3v-6.058L8 9.454l-4 3.488V19h3v-4h2zm5 0h6V5H8v2.127c.234 0 .469.082.657.247l5 4.359a1 1 0 0 1 .343.754zm2-8h2v2h-2zm0 4h2v2h-2zm0-8h2v2h-2zm-4 0h2v2h-2z"></path></g></svg>
                    <span>
                    خدمة <br />  مزايدة
                    </span>
                  </Link>
                </h1>
                </Zoom>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
              <Zoom>
              <span>
                  <i className="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>سوريا</h4>
                  <h6>سوريا,مدينة حمص</h6>
                </div>
              </Zoom>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
               <Zoom>
               <span>
                  <i className="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>من الأحد إلى الخميس</h4>
                  <h6></h6>
                </div>
               </Zoom>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className=" d-flex align-items-center justify-content-end "
            >
            <Zoom>
            <button className="header__btn btn " onClick={toggleMenu}>
                <Link to="/contact" >
                     
                  <i className="ri-phone-line"></i>تواصل معنا
                </Link>
              </button>
            </Zoom>
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
             { jwt_token==null?
             (

            <Zoom>
              <div className="menu">
              {navLinksNOtAuth.map((item, index) => (
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
            </Zoom>
             )
            :
            (
            <Zoom>
              <div className="menu">
              {navLinksAuth.map((item, index) => (
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
            </Zoom>
            )
            }
            </div>    
        </div>
      </Container>
      </div>
    </header>
  );
};

export default Header;
