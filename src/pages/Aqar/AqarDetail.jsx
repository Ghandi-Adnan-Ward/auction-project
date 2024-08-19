 import React, { useState, useEffect } from "react";
 import { Container, Row } from "reactstrap";
 import Helmet from "../../components/Helmet/Helmet";
 import CommonSection from "../../components/UI/CommonSection/CommonSection";
 import axios from 'axios';
 import { useNavigate, useParams } from "react-router-dom";
 import { Alert } from '@mui/material';
 import CheckIcon from '@mui/icons-material/Check';
 import Spinner from '../../components/UI/Spinner/Spinner';
 import AqarDetails from "./AqarDetails";
 import moment from "moment";
import { Zoom } from "react-awesome-reveal";

 const AqarDetail = () => {
    const { slug } = useParams();
    const [auctionActive,setAuctionActive]=useState(false)
    const [auctionEnded, setAuctionEnded] = useState(false);
    const [currentTime, setCurrentTime] = useState(moment.utc().format('YYYY-MM-DD HH:mm:ss'));
    const [WinnerData,setWinnerData]=useState([]);

   const navigate = useNavigate();
   const [AqarData, setAqarData] = useState([]);
   const [endd,setendd]=useState(null)
   const [remaing, setremaing] = useState(0);

   const[loading,setloading]=useState(false)
   const[showAlert, setShowAlert] = useState(false);
   const[showAlert1, setShowAlert1] = useState(false);
   const[error,setError]=useState('error')
    useEffect(() => {
    const fetchData = async () => {
        setloading(true);
      setShowAlert(true);

      try {
        const response = await axios.get('http://localhost:8000/api/v1/user/specificAuction/'+slug);
 
             setAqarData(response.data);
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
             setloading(false);
            setendd(moment.utc(response.data.end_time))
             const intervalId = setInterval(() => {
        const now = moment.utc();
        setCurrentTime(now.format('YYYY-MM-DD HH:mm:ss'));
        
        
        if (now.isBefore(moment.utc(response.data.end_time))) {
          setAuctionActive(true);
          setremaing(moment.utc(response.data.end_time).diff(now,'seconds')); 
        } else if (now.isAfter(moment.utc(response.data.end_time))) {
          setAuctionActive(false);
          setAuctionEnded(true);
          setremaing(0)
        }
      }, 10);
     
 
      
      return () => clearInterval(intervalId);
            
      } catch (error) {
        setError(error.message);
        setShowAlert(false);
        setShowAlert1(true);
        console.error('Error fetching data:', error);
      }
    };
    fetchData()
  }, []);
 
 

   
  useEffect(() => {
 }, [])
   return (
        <Helmet title="Cars">
              <CommonSection title="السيارات" />
       {loading ? <Spinner /> :
          <Container>
            <Row>
                    <AqarDetails
                    aqarData={AqarData}
                    key={AqarData.id}
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
       <Alert severity="success" className="custom-alert"sx={{display:'flex',alignItems:'center',justifyContent:'center'}}  >
         <div className="d-flex justify-content-center align-items-center">
              <h4>يتم الآن التحميل</h4>
              <CheckIcon/>
         </div>
         </Alert>
     )}
      {showAlert1 && (
       <Alert severity="error" className="custom-alert"sx={{display:'flex',alignItems:'center',justifyContent:'center'}}  >
         <div className="d-flex justify-content-center align-items-center">
              <h4>يتم الآن {error.message} </h4>
              <CheckIcon/>
         </div>
         </Alert>
     )}
     </Helmet>
    );
 };
 
 export default AqarDetail;