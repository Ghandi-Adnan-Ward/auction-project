import React from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection/CommonSection";
 import lapData from "../assets/data/lapData";
 import Item2 from "../components/UI/Item/Item2";
const Laptop = () => {
  return (
    <Helmet title="Laptop">
      <CommonSection title="اللابتوبات" />

      <section>
        <Container>
          <Row>
            {lapData.map((item) => (
              <Item2 item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Laptop;
