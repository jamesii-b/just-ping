import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/home/home";
import NotFound from "./components/reusable/invalidPage";
import BottomNavBar from "./components/reusable/bottom-nav_bar";
import ContactPage from "./components/contact/contact";
import ScrollToTop from './ScrollTOTop'

export default function App() {
  return (
    <div className="bg-bg_primary text-t_Primary font-body md:text-xl">
      <BrowserRouter>
        {/* <NavBar /> */}
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <BottomNavBar />
      </BrowserRouter>
    </div>

  );
}

