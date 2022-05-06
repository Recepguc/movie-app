import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../component/Navbar";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MovieDetails from "../pages/MovieDetails";

const Approuter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/details" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Approuter;
