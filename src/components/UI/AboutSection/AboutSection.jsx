import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./AboutSection.css";
import aboutImg from "../../../assets/all-images/cars-img/bmw.jpg";
import aboutImg2 from "../../../assets/all-images/slider-img/lap.webp";

const AboutSection = ({ aboutClass }) => {
  return (
    <section className="about__section">
      <Container>
        {/* <Row>
        <iframe 
        src="https://lumalabs.ai/embed/337ba289-f7d2-432b-b1dc-4bb19f6d2b2e?mode=sparkles&background=%23ffffff&color=%23000000&showTitle=true&loadBg=true&logoPosition=bottom-left&infoPosition=bottom-right&cinematicVideo=undefined&showMenu=false" 
        width="374"
         height="500"
          // frameBorder='0' 
          title="luma embed"
           style={{border: "none"}}
            
           ></iframe>
        </Row> */}
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">مرحبًا بك في خدمتنا للمزادات</h4>
              <h2 className="section__title">اكتشف المزادات للسيارات</h2>
              <p className="section__description">
                اكتشف مزادات السيارات لدينا واحصل على السيارة التي تحلم بها بأسعار تنافسية. نوفر لك مجموعة متنوعة من السيارات لتلبية جميع احتياجاتك ومتطلباتك. استفد من فرص المزادات للحصول على سيارة بأفضل سعر.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <h3 className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> ابحث عن السيارة المثالية
                </h3>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <h3 className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> استمتع بعمليات المزايدة على السيارات
                </h3>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="سيارة" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>

      &nbsp;

      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg2} alt="عقار" className="w-100" />
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">ابحث عن العقار المثالي</h4>
              <h2 className="section__title">تصفح مزادات العقارات</h2>
              <p className="section__description">
                استكشف مزادات العقارات لدينا للعثور على العقار الذي تحلم به. من الشقق المريحة إلى الفيلات الفاخرة، نقدم لك مجموعة متنوعة من العقارات لتلبية احتياجاتك. سواء كنت تبحث عن منزل للسكن أو عقار للاستثمار، فإننا نوفر لك الخيارات الأفضل.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <h3 className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> ابحث عن العقار الذي تحلم به
                </h3>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <h3 className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> استفد من فرص الاستثمار العقاري
                </h3>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      &nbsp;

      <Container>
        <Row>
          <Col lg="12" md="12">
            <div className="about__section-content">
              <h4 className="section__subtitle">استكشاف المزادات الأخرى</h4>
              <h2 className="section__title">تصفح مزادات متنوعة</h2>
              <p className="section__description">
                بالإضافة إلى مزادات السيارات والعقارات، نقدم لك أيضًا فرصًا للمزايدة على مجموعة متنوعة من المنتجات الأخرى. استكشف المزادات لدينا للعثور على العناصر التي تبحث عنها بأسعار مميزة وفرص رائعة للشراء.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <h3 className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> استمتع بمزادات متنوعة
                </h3>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
