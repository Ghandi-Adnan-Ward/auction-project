import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Laptop from "../pages/Laptop";
import LaptopDetails from "../pages/LaptopDetails";
 import NotFound from "../pages/NotFound";
import Contact from '../pages/Contact'
import Login from "../pages/Login";
import Logout from "../components/UI/Logout/Logout";
 import Register from "../components/UI/register/Register";
import Aqar from "../pages/Aqar";
import AddBazar from "../pages/AddBazar";
import Item6 from "../components/UI/Item/Item6";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/laptop" element={<Laptop />} />
      <Route path="/laptop/:slug" element={<LaptopDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />

      <Route path="/register" element={<Register />} />
       <Route path="/addbazar" element={<AddBazar />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
