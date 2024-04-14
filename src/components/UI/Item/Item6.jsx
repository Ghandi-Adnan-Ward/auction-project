import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col } from "reactstrap";
import './Item.css'
export default function Item6() {

    

    const [car, setcar] = useState([])
    

    useEffect(() => {
        fetchProducts();
    }, [])

    const fetchProducts = async () => {
        const jwt_token=localStorage.getItem('jwt_token');
      const config={
        headers:{
          Authorization:`Bearer ${jwt_token}`
        }
      }
        await axios.get('http://localhost:8000/api/v1/user/car-auctions',config).then(({ data }) => {setcar(data) 
    console.log(data)}) 
    }

   

   

 

    return (
        <div>
           {car.length >0 ?
           car.map((daw)=>(
            <p>{daw.details.brand}</p>
        ))
           :
           <p>////</p>
            
          
          }
    
    </div>
    )
}