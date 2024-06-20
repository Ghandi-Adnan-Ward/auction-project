import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection/CommonSection";
import { Zoom } from "react-awesome-reveal";
import "../styles/contact.css";
import axios from "axios";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const jwt_token=localStorage.getItem('jwt_token');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const sendGridEndpoint = "https://api.sendgrid.com/v3/mail/send";
    try{
      const response=axios.post(sendGridEndpoint,{
        personalizations: [
           {
               to: [{ email: "ghandi.ward81@gmail.com" }], // Destination email address
                subject: "New Message from " + name, // Email subject
                  },
                ],
                 from: { email: email }, // Sender's email address
                  content: [
                   {
                  type: "text/plain",
                   value: message, // Email message
                  },
        ],
        },
              {
                headers: {
                  Authorization: `Bearer ${apiKey}`, // Authorization header with SendGrid API key
                },
      }
    
    )
    console.log("Email sent successfully:", response);
      
          // Reset form data after successful submission
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        } catch (error) {
          console.error("Error sending email:", error);
        }
   };
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Helmet title="Contact">
      <Zoom>
      <CommonSection title="تواصل معنا" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">تواصل</h6>

              <form onSubmit={handleSubmit}>
                <FormGroup className="contact__form">
                  <Input
                    placeholder="الاسم"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input
                    placeholder="الإيميل"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                <Input
                     type='textarea'
                     placeholder="الرسالة"
                     className="textarea"
                     name="message"
                     value={formData.message}
                     onChange={handleChange}
                   />
                  </FormGroup>
                <button className=" contact__btn" type="submit">
                  إرسال الرسالة
                </button>
              </form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">معلومات التواصل</h6>
                <p className="section__description mb-0">
                  سوريا,حمص
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">رقم الهاتف:</h6>
                  <p className="section__description mb-0">+963930547778</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">الإيميل:</h6>
                  <p className="section__description mb-0">example@gmail.com</p>
                </div>

                <h6 className="fw-bold mt-4">تابعنا</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i className={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      </Zoom>
    </Helmet>
  );
};

export default Contact;