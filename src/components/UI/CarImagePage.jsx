import React, { useState } from 'react';
import { Container, Row } from 'reactstrap';
import { Zoom } from "react-awesome-reveal";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CarImagePage = () => {
  const { slug } = useParams();
  const [CarData, setCarData] = useState([]);
  const fetch= async()=>{
    
    try {
        const response = await axios.get('http://localhost:8000/api/v1/user/specificAuction/' + slug);
        setCarData(response.data);
    } catch (error) {
      
    }
  }
useEffect(() => {
 
 fetch()
}, [slug])

  return (
    <Container className="text-center mt-3 mb-3">
      <Zoom triggerOnce>
  <Row>
        <iframe 
        src={CarData.model_link}
        // src="https://lumalabs.ai/embed/337ba289-f7d2-432b-b1dc-4bb19f6d2b2e?mode=sparkles&background=%23ffffff&color=%23000000&showTitle=true&loadBg=true&logoPosition=bottom-left&infoPosition=bottom-right&cinematicVideo=undefined&showMenu=false" 
        width="374"
         height="500"
          title="luma embed"
           style={{border: "none"}}
            
           ></iframe>
        </Row>
      </Zoom>
    </Container>
  );
};

export default CarImagePage;
