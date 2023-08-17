import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import { NotFound } from "../pages/NotFound";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    );
};