import React from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import "./Sliders.css";

const Sliders = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings} className="hero__slider">
      <div className="slider__item slider__item-01 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">For every transaction,you will pay only 1% as brokerage</h4>
            <h1 className="text-light mb-4">Reserve Now and Get the best</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-05 mt0">
        <Container>
          <div className="slider__content ">
          <h4 className="text-light mb-3">For every transaction,you will pay only 1% as brokerage</h4>
            <h1 className="text-light mb-4">Reserve Now and Get the best</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-02 mt0">
        <Container>
          <div className="slider__content ">
          <h4 className="text-light mb-3">For every transaction,you will pay only 1% as brokerage</h4>
            <h1 className="text-light mb-4">Reserve Now and Get the best</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-03 mt0">
        <Container>
          <div className="slider__content ">
          <h4 className="text-light mb-3">For every transaction,you will pay only 1% as brokerage</h4>
            <h1 className="text-light mb-4">Reserve Now and Get the best</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>
      <div className="slider__item slider__item-04 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">For every transaction,you will pay only 1% as brokerage</h4>
            <h1 className="text-light mb-4">Reserve Now and Get the best</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default Sliders;
