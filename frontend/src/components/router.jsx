import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../pages/navbar.jsx";
import Footer from "../pages/footer.jsx";


import HomePage from "../pages/homePage.jsx";
import ServicePage from "../pages/servicePage";

import PortfolioPage from "../pages/portfolio.jsx";
import BlogPage from "../pages/blog.jsx";
import AboutPage from "../pages/about.jsx";
import ContactPage from "../pages/contact.jsx";
import CareersPage from "../pages/careers.jsx";
// import BlogPage from "./pages/BlogPage";
// import AboutPage from "./pages/AboutPage";
// import ContactPage from "./pages/ContactPage";

const AppRouter = () => {
  return (
    <Router>
      {/* Global Layout */}
      <div className="min-h-screen bg-[var(--bg-color)] text-[var(--text-primary)]">
        
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
