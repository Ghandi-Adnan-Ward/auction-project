// import React from "react";
// import { Link } from "react-router-dom";
// import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
// import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/CommonSection/CommonSection";

// import "../styles/contact.css";

// const socialLinks = [
//   {
//     url: "#",
//     icon: "ri-facebook-line",
//   },
//   {
//     url: "#",
//     icon: "ri-instagram-line",
//   },
//   {
//     url: "#",
//     icon: "ri-linkedin-line",
//   },
//   {
//     url: "#",
//     icon: "ri-twitter-line",
//   },
// ];

// const Contact = () => {
//   return (
//     <Helmet title="Contact">
//       <CommonSection title="تواصل معنا" />
//       <section>
//         <Container>
//           <Row>
//             <Col lg="7" md="7">
//               <h6 className="fw-bold mb-4">تواصل</h6>

//               <form>
//                 <FormGroup className="contact__form">
//                   <Input placeholder="الاسم" type="text" />
//                 </FormGroup>
//                 <FormGroup className="contact__form">
//                   <Input placeholder="الإيميل" type="email" />
//                 </FormGroup>
//                 <FormGroup className="contact__form">
//                   <textarea
//                     rows="5"
//                     placeholder="الرسالة"
//                     className="textarea"
//                   ></textarea>
//                 </FormGroup>

//                 <button className=" contact__btn" type="submit">
//                   إرسال الرسالة
//                 </button>
//               </form>
//             </Col>

//             <Col lg="5" md="5">
//               <div className="contact__info">
//                 <h6 className="fw-bold">معلومات التواصل</h6>
//                 <p className="section__description mb-0">
//                   سوريا,حمص
//                 </p>
//                 <div className=" d-flex align-items-center gap-2">
//                   <h6 className="fs-6 mb-0">رقم الهاتف:</h6>
//                   <p className="section__description mb-0">+963930547778</p>
//                 </div>

//                 <div className=" d-flex align-items-center gap-2">
//                   <h6 className="mb-0 fs-6">الإيميل:</h6>
//                   <p className="section__description mb-0">example@gmail.com</p>
//                 </div>

//                 <h6 className="fw-bold mt-4">تابعنا</h6>

//                 <div className=" d-flex align-items-center gap-4 mt-3">
//                   {socialLinks.map((item, index) => (
//                     <Link
//                       to={item.url}
//                       key={index}
//                       className="social__link-icon"
//                     >
//                       <i className={item.icon}></i>
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default Contact;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection/CommonSection";

import "../styles/contact.css";

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

  const handleChange = (e) => {
    const { name, email,value } = e.target;
    setFormData({ ...formData, [name]: value,[email]:value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:ghandi.ward81@gmail.com?subject=New Message from ${name}&body=${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <Helmet title="Contact">
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
                  <textarea
                    rows="5"
                    placeholder="الرسالة"
                    className="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
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
    </Helmet>
  );
};

export default Contact;