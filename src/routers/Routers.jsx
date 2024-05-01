import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetail from "../pages/CarDetail";
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
import UserDetails from "../pages/UserDetails";
import OtherDetail from "../pages/OtherDetail";
import EditCarDetail from "../pages/EditCarDetail";
import EditOtherDetail from "../pages/EditOtherDetail";
import EditAqarDetail from "../pages/EditAqarDetail";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      
      <Route path="/home" element={<Home />} />
      
      <Route path="/user" element={<UserDetails />} />
      <Route path="/user/editcar/:slug" element={<EditCarDetail />} />
      <Route path="/user/editaqar/:slug" element={<EditAqarDetail />} />
      <Route path="/user/editother/:slug" element={<EditOtherDetail />} />

      <Route path="/about" element={<About />} />
      
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetail />} />
      
      <Route path="/aqar" element={<AqarListing />} />
      <Route path="/aqar/:slug" element={<AqarDetails />} />

      <Route path="/other" element={<OtherListing />} />
      <Route path="/other/:slug" element={<OtherDetail />} />

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
