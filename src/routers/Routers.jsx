import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/Car/CarListing";
import CarDetail from "../pages/Car/CarDetail";
import NotFound from "../pages/NotFound";
import Contact from '../pages/Contact'
import Login from "../pages/Login";
import Logout from "../components/UI/Logout/Logout";
import Register from "../components/UI/register/Register";
import AddAuction from"../pages/AddAuction";
import AqarListing from '../pages/Aqar/AqarListing';
import OtherListing from '../pages/OtherAuctions/OtherListing'
import AllAuctions from "../pages/AllAuctions";
import AqarDetails from "../pages/Aqar/AqarDetails";
import UserDetails from "../pages/UserDetails";
import OtherDetail from "../pages/OtherAuctions/OtherDetail";
import EditCarDetail from "../pages/EditCar/EditCarDetail";
import EditOtherDetail from "../pages/EditOther/EditOtherDetail";
import EditAqarDetail from "../pages/EditAqar/EditAqarDetail";
import Notifications from "../components/UI/Notifications/Notifications";
import Check from "@mui/icons-material/Check";
import Checkout from "../components/UI/Checkout/Checkout";
import CheckoutAqar from "../components/UI/Checkout/CheckoutAqar";
import CheckoutOther from "../components/UI/Checkout/CheckoutOther";
import CheckoutCar from "../components/UI/Checkout/Checkout";
import TenderListing from "../pages/Tenders/TenderListing";
import TenderDetail from "../pages/Tenders/TenderDetail";
import AqarDetails1 from "../pages/Aqar/AqarDetails1";
import EvaluationListing from "../pages/Evaluations/EvaluationListing";
import EvaluationDetail from "../pages/Evaluations/EvaluationDetail";
import AqarDetail from "../pages/Aqar/AqarDetail";
import CarImagePage from "../components/UI/CarImagePage";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/cars/image/:slug" element={<CarImagePage />} />
      <Route path="/aqar/image/:slug" element={<CarImagePage />} />
      <Route path="/other/image/:slug" element={<CarImagePage />} />
      <Route path="/tender/image/:slug" element={<CarImagePage />} />

      <Route path="/home" element={<Home />} />
      
      <Route path="/user" element={<UserDetails />} />
      <Route path="/user/editcar/:slug" element={<EditCarDetail />} />
      <Route path="/user/editaqar/:slug" element={<EditAqarDetail />} />
      <Route path="/user/editother/:slug" element={<EditOtherDetail />} />

      <Route path="/about" element={<About />} />
      
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetail />} />
      
      <Route path="/aqar" element={<AqarListing />} />
      <Route path="/aqar/:slug" element={<AqarDetail />} />

      <Route path="/other" element={<OtherListing />} />
      <Route path="/other/:slug" element={<OtherDetail />} />

      <Route path="/tender" element={<TenderListing/>} />
      <Route path="/tender/:slug" element={<TenderDetail />} />

      <Route path="/evaluation" element={<EvaluationListing/>} />
      <Route path="/evaluation/:slug" element={<EvaluationDetail />} />

      <Route path="/all" element={<AllAuctions />} />
      
      <Route path="/addauction" element={<AddAuction />} />

      <Route path="/contact" element={<Contact />} />
      
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/register" element={<Register />} />

      <Route path="/notification" element={<Notifications />} />
      
      <Route path="/check/:slug" element={<CheckoutCar />} />
      <Route path="/check1/:slug" element={<CheckoutAqar />} />
      <Route path="/check2/:slug" element={<CheckoutOther />} />


      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
