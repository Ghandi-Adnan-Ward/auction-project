import React, { useEffect, useState } from "react";
import Sliders from "../components/UI/Sliders/Sliders";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, Fade } from "reactstrap";
import AboutSection from "../components/UI/AboutSection/AboutSection";
import Item1 from "../components/UI/Item/Item1";
import Advertising from "../components/UI/Advertising/Advertising";
import axios from "axios";
import Item2 from "../components/UI/Item/Item2";
 
const Home = () => {
 
  const[carData, setCarData] = useState([]);
  const[Aqar,setAqar]=useState([])
  
  useEffect(() => {
    const fetchData = async () => {
        
        try {
          const response = await axios.get('http://localhost:8000/api/v1/user/car-auctions');
          setCarData(response.data);
          console.log(response.data)
         } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      
    const getAqar = async () => {
   
        try {
          const response = await axios.get('http://localhost:8000/api/v1/user/real-estate-auctions');
          setAqar(response.data);
          console.log(response.data)
         } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    getAqar()
    fetchData();
  }, []);
  
  return (
    <Fade>
    <Helmet title="Home">
       {/* ============= hero section =========== */}
      {/* <section className="p-0 hero__slider-section">
        <Sliders />
      </section> */}
      {/* =========== about section ================ */}
      <AboutSection />
     
      {/* =========== car   section ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">إبدأ معنا</h6>
              <h2 className="section__title">أفضل الأسعار</h2>
            </Col>
             {carData.slice(0, 3).map((item) => (
              <Item1 item={item} key={item.id} />
            ))}
            {Aqar.slice(0, 3).map((item) => (
              <Item2 item={item} key={item.id} />
            ))}
                        
          </Row>
        </Container>
      </section>
      {/* =========== Advertisment section ============ */}
      <section className="mb-2">
      <Advertising />

      </section>
    </Helmet>
    </Fade>

  );
};

export default Home;
