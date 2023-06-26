import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../Pages/home";
import Tours from "../Pages/tours";
import TourDetails from "../Pages/tourDetails";
import Login from "../Pages/login";
import Register from "../Pages/register";
import SearchResult from "../Pages/searchResult";
import ThankYou from "../Pages/thankYou";
export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/tour/search" element={<SearchResult />} />
    </Routes>
  );
}
