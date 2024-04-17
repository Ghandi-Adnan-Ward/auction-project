import React, { useEffect, useState } from "react";

import Sliders from "../components/UI/Sliders/Sliders";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col, Fade } from "reactstrap";
 import AboutSection from "../components/UI/AboutSection/AboutSection";
 import Item1 from "../components/UI/Item/Item1";
import Advertising from "../components/UI/Advertising/Advertising";
 
import lapData from "../assets/data/lapData";
import Item2 from "../components/UI/Item/Item2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
 
const Home = () => {
  const navigate = useNavigate();
  const jwt_token = localStorage.getItem('jwt_token');
  const [carData, setCarData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const jwt_token = localStorage.getItem('jwt_token');

  const config = {
    headers: {
      Authorization:` Bearer ${jwt_token}`
    }
  };
      // if (jwt_token==null) {
      //   navigate('/login'); // Redirect to login page if jwt_token is not present
      //   return; // Exit the function early
      // }

      

      if(jwt_token!=null){
        try {
          const response = await axios.get('http://localhost:8000/api/v1/user/car-auctions', config);
          setCarData(response.data);
            
          console.log(response.data)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();
  }, []);
  // useEffect(() => {
    
  //   const fetchData = async () => {

  //      if (jwt_token==null) {
  //       navigate('/login'); // Redirect to login page if jwt_token is not present
  //       return; // Exit the function early
  //     }

      
  //   }
     
  //   fetchData();
  // }, []);

  return (
    <Fade>
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
             {jwt_token!=null && carData.slice(0, 3).map((item) => (
              <Item1 item={item} key={item.id} />
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
    </Helmet>
    </Fade>

  );
};

export default Home;
