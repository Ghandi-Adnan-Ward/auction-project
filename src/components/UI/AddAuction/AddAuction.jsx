import  React,{useState} from "react";
import Container from "@mui/material/Container";
import AddCar from "./AddCar";
import Add from "./Add";
import AddAqar from "./AddAqar";
import { useNavigate } from "react-router-dom";

const AddAuction=()=> {
  
const navigate=useNavigate()
  const [expanded, setExpanded] = React.useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
     setExpanded(isExpanded ? panel : false);
      
  };

  return (
    <Container>
      
      <AddCar  expanded={expanded === "panel1"} handle={handleAccordionChange("panel1")} />
      <AddAqar expanded={expanded === "panel2"} handle={handleAccordionChange("panel2")} />
      <Add expanded={expanded === "panel3"} handle={handleAccordionChange("panel3")}/> 
              
    </Container>
    );
}
export default AddAuction;