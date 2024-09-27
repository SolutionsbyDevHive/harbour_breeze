import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "/assets/logoWithTitle2.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "About", path: "/about" },
    { id: 3, text: "Contact", path: "/contact" },
  ];

  // Effect to handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleNavigation = (path) => {
    navigate(path); // Navigate to the specified path
    setNav(false); // Close mobile navigation after click
  };
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center h-fit px-4 text-black transition-all duration-300 ${
        isScrolled ? "bg-white/60 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <img src={logo} className="w-[50%] sm:w-[30%] md:w-[20%]" />

      {/* Desktop Navigation */}
      <ul className="hidden md:flex mr-6 font-montserrat font-semibold text-lg">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-2 px-4 hover:border-b-[1px] hover:cursor-pointer border-[#d5b36b] "
            onClick={() => handleNavigation(item.path)}
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 z-30"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <img src={logo} className="w-[60%] mb-12" />

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-2 py-4 border-b rounded-xl duration-300 hover:text-blue-950 cursor-pointer border-[#d5b36b]"
            onClick={() => handleNavigation(item.path)}
          >
            <span className="ml-3">{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
