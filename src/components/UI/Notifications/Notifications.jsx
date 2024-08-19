import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Notifications.css';
import { Zoom } from 'react-awesome-reveal';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Button } from '@mui/material';

const Notifications = ({ handleClose }) => {
    const navigate = useNavigate();
    const jwt_token = localStorage.getItem('jwt_token');
    const id = localStorage.getItem('id');

    const config = {
        headers: {
            Authorization: `Bearer ${jwt_token}`
        }
    };
    const handleConfirm = (path,notificationId) => {
        markASread(notificationId)
        navigate(path);
        handleClose();
      };
    const [Not, setNot] = useState([]);
    const getNotifications = async () => {
        try {
            const res = await axios.get('http://localhost:8000/api/v1/user/notifications', config);
            setNot(res.data.notifications);
            console.log(res.data)
            // console.log(res.data.notifications[0].attachable.category_id);
        } catch (error) {
            console.error("Error fetching notifications:", error);
        }
    };
    useEffect(() => {
       
        getNotifications();
    }, []);
   const markASread=(notificationId)=>{
    try {
        console.log('good')

        axios.get('http://localhost:8000/api/v1/user/notifications/'+notificationId+'/update-status',config)
    } catch (error) {
        
    }
   }
    const markAllAsRead = async () => {
        try {
            await axios.get('http://localhost:8000/api/v1/user/notifications/update-status-all')
            console.log('All-good')
        } catch (error) {
            console.error("Error marking notification as read:", error);
        }
    };

  

    return (
        <section className="not">
            <Container>
                <Zoom>
                    {Not && Not.length > 0 ? 
                
                       <Container>
                        <Row>
                        <Box textAlign='center'>
                      <Button variant="contained" color="primary" type="submit" style={{fontSize:'18px'}} onClick={markAllAsRead}>
                      تعليم الكل ك مقررء
                      </Button>
                      </Box>

                        </Row>
                       
                         <Row>
                            {Not.filter((item) => item.user_id === parseInt(id)).map((item, key) => (
                                <Col key={key} md='12' lg='12'>
                                        {item.content.includes('Sorry') ? (
                                            <h1 className='not-title' onClick={markASread(item.id)}>عذرا </h1> // عرض رسالة فارغة
                                        ) : (
                                    <div className='not' >
                                         <h1 className='not-title '>لقد تم ربحت المزاد يرجى الضغط على زر التأكيد لاستكمال عملية الدفع</h1>
                                         <div className="payment text-end mt-3  bt">
                                         {item.attachable.category_id==1 ?
                                              <button onClick={()=>handleConfirm('/check/'+item.attachable_id,item.id )}>تأكيد الدفع</button>
                                            :
                                            item.attachable.category_id==2 ?
                                            <button onClick={()=>handleConfirm('/check1/'+item.attachable_id,item.id )}>تأكيد الدفع</button>

                                            :
                                            item.attachable.category_id==2 ?

                                            <button onClick={()=>handleConfirm('/check2/'+item.attachable_id ,item.id )}>تأكيد الدفع</button>
                                            :
                                            <button onClick={()=>handleConfirm('/check2/'+item.attachable_id ,item.id )}>تأكيد الدفع</button>

                                            }
                                        </div>                   
                                     </div>
                                        )}
                                       
                                </Col>
                            ))}
                        </Row>
                       </Container>
                     : 
                        <Row>
                            <Col md='12' lg='12'>
                               <div className='not'>
                               <h1 className='not-title'>
                                    لا توجد اشعارات
                                </h1>
                               </div>
                              </Col>
                        </Row>
                    }
                </Zoom>
            </Container>
        </section>
    );
};

export default Notifications;

