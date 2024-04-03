import  React,{useState} from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
//import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
//import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import logocar from "../../../assets/all-images/Addbazar-img/car.png"
import logolaptop from "../../../assets/all-images/Addbazar-img/laptop.png"
import logoanything from "../../../assets/all-images/Addbazar-img/anything.png"
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from "@mui/material/Container";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddCar from "./AddCar";
import Add from "./Add";
import AddAqar from "./AddAqar";
import AddLap from "./AddLap";
//import { blue, blueGrey } from "@mui/material/colors";

const AddBazar=()=> {
  
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     brand: data.get("brand"),
  //     model: data.get("model"),
  //     manufacturingYear: data.get("manufacturingYear"),
  //     registrationYear: data.get("registrationYear"),
  //     engineType: data.get("engineType"),
  //     price: data.get("price"),
  //     description: data.get("description"),
  //   });
  // };

  // const [carDetails, setCarDetails] = useState({
  //   make: "",
  //   model: "",
  //   year: "",
  //   price: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setCarDetails({
  //     ...carDetails,
  //     [name]: value,
  //   });
  // };

  const [expanded, setExpanded] = React.useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container>
           <AddCar  expanded={expanded === "panel1"} handle={handleAccordionChange("panel1")} />
            <AddAqar expanded={expanded === "panel2"} handle={handleAccordionChange("panel2")} />
           <AddLap expanded={expanded === "panel3"} handle={handleAccordionChange("panel3")}/>
           <Add expanded={expanded === "panel4"} handle={handleAccordionChange("panel4")}/> 
    </Container>
    );
}
export default AddBazar;