import React, { useEffect, useState } from "react";
import { Container, Row, Col, Fade } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection/AboutSection";
import CarAuctionItem from "../components/UI/Item/CarAuctionItem";
import RealEstateAuctionItem from "../components/UI/Item/RealEstateAuctionItem";
import OtherAuctionItem from "../components/UI/Item/OtherAuctionItem";
import Advertising from "../components/UI/Advertising/Advertising";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [carAuctions, setCarAuctions] = useState([]);
  const [realEstateAuctions, setRealEstateAuctions] = useState([]);
  const [otherAuctions, setOtherAuctions] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const carResponse = await axios.get('http://localhost:8000/api/v1/user/car-auctions');
        setCarAuctions(carResponse.data);

        const realEstateResponse = await axios.get('http://localhost:8000/api/v1/user/real-estate-auctions');
        setRealEstateAuctions(realEstateResponse.data);

        const otherResponse = await axios.get('http://localhost:8000/api/v1/user/other-auctions');
        setOtherAuctions(otherResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Helmet title="Home">
      <div className="home-page">
        <AboutSection />
        <section>
          <Container>
            <Row>
              <Col lg="12" className="text-center mb-5">
                <h6 className="section__subtitle">مزادات السيارات</h6>
                <h2 className="section__title">أفضل مزادات السيارات</h2>
              </Col>
              {carAuctions.slice(-3).map((auction) => (
                <Col key={auction.id} lg="4" md="4">
                  <CarAuctionItem auction={auction} />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
        <section>
          <Container>
            <Row>
              <Col lg="12" className="text-center mb-5">
                <h6 className="section__subtitle">مزادات العقارات</h6>
                <h2 className="section__title">ابحث عن العقار الذي تحلم به</h2>
              </Col>
              {realEstateAuctions.slice(-3).map((auction) => (
                <Col key={auction.id} lg="4" md="4">
                  <RealEstateAuctionItem auction={auction} />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
        <section>
          <Container>
            <Row>
              <Col lg="12" className="text-center mb-5">
                <h6 className="section__subtitle">مزادات أخرى</h6>
                <h2 className="section__title">استكشف مزادات متنوعة</h2>
              </Col>
              {otherAuctions.slice(-3).map((auction) => (
                <Col key={auction.id} lg="4" md="4">
                  <OtherAuctionItem auction={auction} />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
        <section className="mb-2">
          <Advertising />
        </section>
      </div>
    </Helmet>
  );
};

export default Home;
