import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import NotFound from "../pages/NotFound";
import Contact from '../pages/Contact'
import Login from "../pages/Login";
import Logout from "../components/UI/Logout/Logout";
import Register from "../components/UI/register/Register";
import AddAuction from"../pages/AddAuction";
import AqarListing from '../pages/AqarListing';
import OtherListing from '../pages/OtherListing'
import AllAuctions from "../pages/AllAuctions";
import AqarDetails from "../pages/AqarDetails";
import OtherDetails from "../pages/OtherDetails";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      
      <Route path="/home" element={<Home />} />
      
      <Route path="/about" element={<About />} />
      
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      
      <Route path="/aqar" element={<AqarListing />} />
      <Route path="/aqar/:slug" element={<AqarDetails />} />

      <Route path="/other" element={<OtherListing />} />
      <Route path="/other/:slug" element={<OtherDetails />} />

      <Route path="/all" element={<AllAuctions />} />
      
      <Route path="/addauction" element={<AddAuction />} />

      <Route path="/contact" element={<Contact />} />
      
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/register" element={<Register />} />


      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
