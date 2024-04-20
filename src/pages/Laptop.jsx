import React, { useState } from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection/CommonSection";
 import lapData from "../assets/data/lapData";
 import Item2 from "../components/UI/Item/Item2";
const Laptop = () => {
  const [carData, setCarData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const jwt_token = localStorage.getItem('jwt_token');

  const config = {
    headers: {
      Authorization:` Bearer ${jwt_token}`
    }
  };
      if (jwt_token==null) {
        navigate('/login'); // Redirect to login page if jwt_token is not present
        return; // Exit the function early
      }

      

      try {
        // const response = await axios.get('http://localhost:8000/api/v1/user/car-auctions', config);

        // setCarData(response.data);
          
        // console.log(response.data.id)
        axios.get('http://localhost:8000/api/v1/user/car-auctions',config)
        .then(res=>{
          setCarData(res.data);
          console.log(res.data)
        })
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
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
