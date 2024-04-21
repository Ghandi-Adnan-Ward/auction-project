// // // CarListing.js

// // import React from "react";
// // import { Container, Row } from "reactstrap";
// // import Helmet from "../components/Helmet/Helmet";
// // import CommonSection from "../components/UI/CommonSection/CommonSection";
// // import carData from "../assets/data/carData";
// // import Item from "../components/UI/Item/Item";
// // import Item3 from "../components/UI/Item/Item3";

// // const CarListing = () => {
// //   const selectedCar = carData[0]; // اختيار السيارة المحددة للمزايدة

// //   return (
// //     <Helmet title="Cars">
// //       <CommonSection title="السيارات" />
// //       <section>
// //         <Container>
// //           <Row>
// //             <Item3 item={selectedCar} key={selectedCar.id} />
// //           </Row>
// //         </Container>
// //       </section>
// //     </Helmet>
// //   );
// // };

// // export default CarListing;
// import React, { useState,useEffect } from "react";
// import { Container, Row } from "reactstrap";
// import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/CommonSection/CommonSection";
//  import Item3 from "../components/UI/Item/Item3";
//  import axios from 'axios'
// import { useNavigate } from "react-router-dom";
//  const CarListing = () => {
//   const navigate=useNavigate()
//   const[carData,setcarData]=useState([])
//   useEffect(() => {
//     const fetchData = async () => {
//       const jwt_token=localStorage.getItem('jwt_token');
//       const config={
//         headers:{
//           Authorization:`Bearer ${jwt_token}`
//         }
//       }
//       try {
//         if(jwt_token==null){navigate('/login')}
//         else{const response = await axios.get('http://localhost:8000/api/v1/user/car-auctions',config);
//         setcarData(response.data);}
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);
//   // const handleBidSubmit = (bid, itemId) => {
//   //   // Update auction status for the specific item
//   //   const updatedCarData = carData.map((item) => {
//   //     if (item.id === itemId) {
//   //       return { ...item, auctionActive: false }; // Setting auctionActive to false for the item
//   //     }
//   //     return item;
//   //   });
//   //   // Update carData with the modified auction status
//   //   // You might want to use a state management solution like Redux for a large-scale application
//   //   // Here, we are just updating the local variable carData
//   //   // In a real-world application, you would update the state using setState or Redux dispatch
//   //   carData = updatedCarData;
//   // };

//   return (
//     <Helmet title="Cars">
//       <CommonSection title="السيارات" />
//       <Container>
//         <Row>
//           {carData.map((item) => (
//             <Item3
//               item={item}
//               key={item.id}
//               // handleBidSubmit={handleBidSubmit}  
//             />
//           ))}
//         </Row>
//       </Container>
//     </Helmet>
//   );
// };

// export default CarListing;
import React, { useState, useEffect } from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection/CommonSection";
 import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Item1 from "../components/UI/Item/Item1";

const CarListing = () => {
  const navigate = useNavigate();
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
       <Helmet title="Cars">
      <CommonSection title="السيارات" />
      <Container>
        <Row>
          {carData.map((item) => (
            <Item1
              item={item}
              key={item.id}
              />
          ))}
        </Row>
      </Container>
    </Helmet>
   );
};

export default CarListing;