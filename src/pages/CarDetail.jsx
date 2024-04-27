 //Aqars
 import React, { useState, useEffect } from "react";
 import { Container, Row } from "reactstrap";
 import Helmet from "../components/Helmet/Helmet";
 import CommonSection from "../components/UI/CommonSection/CommonSection";
 import axios from 'axios';
 import { useNavigate, useParams } from "react-router-dom";
 import { Alert } from '@mui/material';
 import CheckIcon from '@mui/icons-material/Check';
 import Spinner from '../components/UI/Spinner/Spinner';
 import CarDetails from "./CarDetails";
 import moment from "moment";
 const CarDetail = () => {
    const { slug } = useParams();
    const[auctionActive,setAuctionActive]=useState(false)
    const [auctionEnded, setAuctionEnded] = useState(false);
    const [currentTime, setCurrentTime] = useState(moment().format('YYYY-MM-DD HH:mm:ss'));
    const [WinnerData,setWinnerData]=useState([]);

   const navigate = useNavigate();
   const [CarData, setCarData] = useState([]);
    const [endd,setendd]=useState(CarData.end_time)
   const end=moment(moment(endd,'YYYY-MM-DD HH:mm:ss'))   
   const [remaing, setremaing] = useState(moment(end));

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
             setCarData(response.data);
             //const endd=response.data.end_time
             const end=moment(moment(response.data.end_time,'YYYY-MM-DD HH:mm:ss'))  
             if(response.data.status=='closed')
        {
          // gethighestBid()

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
            setendd(response.data.end_time)
            
             const intervalId = setInterval(() => {
        const now = moment();
        setCurrentTime(now.format('YYYY-MM-DD HH:mm:ss'));
        
        
        if (now.isBetween(currentTime,end)) {
          setAuctionActive(true);
          setremaing(end.diff(now,'seconds')); 
        } else if (now.isAfter(end)) {
          setAuctionActive(false);
          setAuctionEnded(true);
          setremaing(0)
        }
      }, 10);
     
 
      if(auctionActive){
  const intervalId=setInterval(() => {
    setCurrentTime(moment().format('YYYY-MM-DD HH:mm:ss'));
      setremaing(prevTime => {
        if (prevTime === 0) {
          clearInterval(intervalId);
          setAuctionActive(false);
          setAuctionEnded(true); 
           return 0;
        }
        return prevTime - 1;
      });
  }, 1000);
   const intervalid=setInterval(()=>{
      setCurrentTime(moment().format('YYYY-MM-DD HH:mm:ss'));
    })
    return () => {
      clearInterval(intervalid)
      clearInterval(intervalId)

    }
   
  }
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
 
 
  const gethighestBid=async()=> {

    // try{
    //   await axios.get('http://localhost:8000/api/v1/user/auctions/'+id+'/bids',config).then(res =>
    //     {
          
    //       setHighestBid(res.data)
    //        console.log(res.data.bids[0].amount)
    //       // console.log(res.data)
    //      }
           
    //   )
    // }
    // catch(error){
    //   console.error(error)
    // }
  }
   
  useEffect(() => {
    
    
 }, [slug,CarData,CarData.status])
//   useEffect(() => {
    
//   }, [slug,CarData])
  
  // useEffect(() => {
    
  
  // }, [auctionActive,auctionEnded,setCurrentTime,currentTime ])
  // useEffect(() => {
   
  // }, [currentTime])
   return (
        <Helmet title="Cars">
       <CommonSection title="السيارات" />
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
 
 export default CarDetail;