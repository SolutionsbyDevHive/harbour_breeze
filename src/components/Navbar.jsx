import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "/assets/cheddaLogo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  // Toggle mobile nav
  const handleNav = () => {
    setNav(!nav);
  };

  // Navigation Items
  const navItems = [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "About", path: "#about" },
    { id: 3, text: "Contact", path: "/contact" },
    { id: 4, text: "Floor Plan", path: "#floorplan" },
  ];

  // Effect for sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle smooth scrolling for internal links
  const handleNavigation = (path) => {
    if (path.startsWith("#")) {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(path);
    }
    setNav(false); // Close mobile nav after selection
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center h-[80px] px-6 text-[#d2ac62] font-bold transition-all duration-300 ${
        isScrolled ? "bg-[#173A55]/90 shadow-lg" : "bg-[#173A55]/90"
      }`}
    >
      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        className="h-auto w-[100px] md:w-[110px]" // Adjusted logo size
      />

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-8 font-trajan font-semibold text-lg">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="cursor-pointer hover:text-[#f4d09a] transition-all"
            onClick={() => handleNavigation(item.path)}
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Toggle */}
      <div
        onClick={handleNav}
        className="md:hidden z-50 cursor-pointer text-[#f4d09a]" // Changed hamburger menu color
      >
        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={`fixed top-0 left-0 w-[60vw] h-full bg-[#1A3E5C] border-r border-[#d5b36b] transform ${
          nav ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 md:hidden z-40`}
      >
        <img src={logo} alt="Logo" className="w-[60%] mx-auto mt-6 mb-12" />
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 text-[#d2ac62] text-lg font-trajan border-b border-[#d5b36b] hover:text-[#f4d09a] transition-all cursor-pointer"
            onClick={() => handleNavigation(item.path)}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
