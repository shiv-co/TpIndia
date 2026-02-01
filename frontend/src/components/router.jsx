import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "../pages/navbar.jsx";
import Footer from "../pages/footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";

import HomePage from "../pages/homePage.jsx";
import ServicePage from "../pages/servicePage";
import PortfolioPage from "../pages/portfolio.jsx";
import BlogPage from "../pages/blog.jsx";
import AboutPage from "../pages/about.jsx";
import ContactPage from "../pages/contact.jsx";
import Rentals from "../pages/Rentals.jsx";
import CareersPage from "../pages/careers.jsx";
import GetQuoteWizard from "../pages/GetQuoteWizard.jsx";
import WebsiteDevLanding from "../pages/WebsiteDevLanding.jsx";
import DocumentaryLanding from "../pages/DocumentaryLanding.jsx";
import RateCard from "../pages/webdevRateCard.jsx";

const AppRouter = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[var(--bg-color)] text-[var(--text-primary)]">
        
        {/* ScrollToTop MUST be inside Router layout */}

        <Navbar />

        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/get-quote" element={<GetQuoteWizard />} />
          <Route path="/website-development" element={<WebsiteDevLanding />} />
          <Route path="/documentary" element={<DocumentaryLanding />} />
          <Route path="/website/pricing" element={<RateCard />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
