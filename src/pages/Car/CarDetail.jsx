import React, { useState, useEffect } from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/CommonSection/CommonSection";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import { Alert } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import Spinner from '../../components/UI/Spinner/Spinner';
import CarDetails from "./CarDetails";
import moment from "moment";

import { Zoom } from "react-awesome-reveal";

const CarDetail = () => {
   const { slug } = useParams();
   const [auctionActive, setAuctionActive] = useState(false);
   const [auctionEnded, setAuctionEnded] = useState(false);
   const [currentTime, setCurrentTime] = useState(moment.utc().format('YYYY-MM-DD HH:mm:ss'));
   const [WinnerData, setWinnerData] = useState([]);

   const navigate = useNavigate();
   const [CarData, setCarData] = useState([]);
   const [endd, setEndd] = useState(null);
   const [remaing, setRemaing] = useState(0);

   const [loading, setLoading] = useState(false);
   const [showAlert, setShowAlert] = useState(false);
   const [showAlert1, setShowAlert1] = useState(false);
   const [error, setError] = useState('error');

   useEffect(() => {
      const fetchData = async () => {
         setLoading(true);
         setShowAlert(true);

         try {
            const response = await axios.get('http://localhost:8000/api/v1/user/specificAuction/' + slug);
            setCarData(response.data);

            if(response.data.status=='closed')
               {
                  try{
                     axios.get('http://localhost:8000/api/v1/user/auctions/'+response.data.id+'/winner').then(res =>
                     {
                       
                       setWinnerData(res.data.winner.first_name)
                       console.log(res.data.winner.first_name)
                      }
                        
                   )
                 }
                 catch(error){
                   console.error(error)
                 }
               }

            setShowAlert(false);
            setLoading(false);
            setEndd(moment.utc(response.data.end_time));

            const intervalId = setInterval(() => {
               const now = moment.utc();
               setCurrentTime(now.format('YYYY-MM-DD HH:mm:ss'));

               if (now.isBefore(moment.utc(response.data.end_time))) {
                  setAuctionActive(true);
                  setRemaing(moment.utc(response.data.end_time).diff(now, 'seconds'));
               } else if (now.isAfter(moment.utc(response.data.end_time))) {
                  setAuctionActive(false);
                  setAuctionEnded(true);
                  setRemaing(0);
               }
            }, 1000);

            return () => clearInterval(intervalId);
         } catch (error) {
            setError(error.message);
            setShowAlert(false);
            setShowAlert1(true);
            console.error('Error fetching data:', error);
         }
      };
      fetchData();
   }, []);

   return (
      <Helmet title="Cars">
         <Zoom triggerOnce>
            <CommonSection title="السيارات" />
         </Zoom>
         {loading ? <Spinner /> : 
            <Container>
               <Row>
                  <CarDetails
                     carData={CarData}
                     key={CarData.id}
                     auctionActive={auctionActive}
                     auctionEnded={auctionEnded}
                     remaing={remaing}
                     currentTime={currentTime}
                     WinnerData={WinnerData}
                  />
               </Row>
            </Container>
         }
         {showAlert && (
            <Alert severity="success" className="custom-alert" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <div className="d-flex justify-content-center align-items-center">
                  <h4>يتم الآن التحميل</h4>
                  <CheckIcon />
               </div>
            </Alert>
         )}
         {showAlert1 && (
            <Alert severity="error" className="custom-alert" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <div className="d-flex justify-content-center align-items-center">
                  <h4>يتم الآن {error.message} </h4>
                  <CheckIcon />
               </div>
            </Alert>
         )}
      </Helmet>
   );
};

export default CarDetail;
