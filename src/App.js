import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Navigations/Home";
import Profile from "./Components/Navigations/Profile";
import Contact from "./Components/Navigations/Contact";
import About from "./Components/Navigations/About";
import Footer from "./Components/Footer/Footer";
import { AiOutlineMenu } from "react-icons/ai";



const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <BrowserRouter>
        <div className="relative container mx-auto z-10">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <AiOutlineMenu
                className="text-gray-600 h-6 w-6 md:hidden"
                onClick={toggleMobileMenu}
              />
              Home
            </Link>
            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden space-x-4">
                <Link to="/Profile" className="hover:bg-blue-100 rounded-full">
                  Profile
                </Link>
                <Link to="/About" className="hover:bg-red-100 rounded-full">
                  About
                </Link>
                <Link to="/Contact">
                  <button className="bg-blue-800 text-white hover:bg-yellow-100 rounded-full">
                    Contact
                  </button>
                </Link>
              </div>
            )}
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4">
              <Link to="/Profile" className="hover:bg-blue-100 rounded-full">
                Profile
              </Link>
              <Link to="/About" className="hover:bg-red-100 rounded-full">
                About
              </Link>
              <Link to="/Contact">
                <button className="bg-blue-800 text-white hover:bg-yellow-100 rounded-full">
                  Contact
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="About" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
