 //Aqars
import React, { useState, useEffect } from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection/CommonSection";
 import axios from 'axios';
import { useNavigate } from "react-router-dom";
 import Item4 from "../components/UI/Item/Item4";

const AqarListing = () => {
  const navigate = useNavigate();
  const [AqarData, setAqarData] = useState([]);

  useEffect(() => {
    const getData = async () => {
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
        axios.get('http://localhost:8000/api/v1/user/real-estate-auctions')
        .then(res=>{
          setAqarData(res.data);
          console.log(res.data)
        })
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
   
    getData();
  }, []);

  return (
       <Helmet title="Aqars">
      <CommonSection title="العقارات" />
      <Container>
        <Row>
          {AqarData.map((item) => (
            <Item4
              item={item}
              key={item.id}
              />
          ))}
        </Row>
      </Container>
    </Helmet>
   );
};

export default AqarListing;