import React from "react";
import "./OurMembers.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import av from "../../../assets/av.jpg";
import ava02 from "../../../assets/all-images/ava-2.jpg";
import ava03 from "../../../assets/all-images/ava-3.jpg";
import ava01 from '../../../assets/all-images/ava-1.jpg'
const OUR__MEMBERS = [
  {
    name: "غاندي ورد",
    experience: "5 سنوات من الخبرة",
    fbUrl: "https://www.facebook.com/ghandi.adnan.ward?mibextid=ZbWKwL",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: av,
  },

  {
    name: "رجائي حمود",
    experience: "5 years of experience",
    fbUrl: "https://www.facebook.com/profile.php?id=100013391958470&mibextid=ZbWKwL",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava03,
  },

  {
    name: "شهد عباس",
    experience: "4 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava02,
  },

  {
    name: "أحمد الهزاع",
    experience: "2 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },
];

const OurMembers = () => {
  return (
    <>
      {OUR__MEMBERS.map((item, index) => (
        <Col lg="3" md="3" sm="3" xs="6" key={index} className="mb-4">
          <div className="single__member">
            <div className="single__member-img">
              <img src={item.imgUrl} alt="" className="w-100" />

              <div className="single__member-social">
                <Link to={item.fbUrl}>
                  <i className="ri-facebook-line"></i>
                </Link>
                <Link to={item.twitUrl}>
                  <i className="ri-twitter-line"></i>
                </Link>

                <Link to={item.linkedinUrl}>
                  <i className="ri-linkedin-line"></i>
                </Link>

                <Link to={item.instUrl}>
                  <i className="ri-instagram-line"></i>
                </Link>
              </div>
            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className=" text-center">
              {item.experience}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;
