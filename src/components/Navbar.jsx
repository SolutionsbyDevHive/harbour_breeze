import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "/assets/cheddaLogo.png";
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
    if (path == "/") {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // This enables a smooth scrolling effect
      });
      setNav(false); // Close mobile navigation after click

    } else {
    
      // navigate(path); // Navigate to the specified path
      setNav(false); // Close mobile navigation after click

    }
  };
  return (
    <div
  className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center h-[100px] text-[#d2ac62] font-bold transition-all duration-300 overflow-hidden ${
    isScrolled
      ? "bg-[#1A3E5C]/90 backdrop-blur-lg shadow-lg"
      : "bg-[#1A3E5C]/90 backdrop-blur-lg shadow-lg"
  }`}
>
  {/* Logo */}
  <img src={logo} className="h-auto w-[120px] md:w-[145px]" />

  {/* Desktop Navigation */}
  <ul className="hidden md:flex mr-6 font-montserrat font-semibold text-lg">
    {navItems.map((item) => (
      <li
        key={item.id}
        className="p-2 px-4 hover:border-b-[1px] hover:cursor-pointer font-trajan border-[#d5b36b] "
        onClick={() => handleNavigation(item.path)}
      >
        {item.text}
      </li>
    ))}
  </ul>

  {/* Mobile Navigation Icon */}
  <div
    onClick={handleNav}
    className="block md:hidden cursor-pointer font-trajan z-50"
  >
    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
  </div>

  {/* Mobile Navigation Menu */}
  <ul
    className={`${
      nav
        ? "fixed md:hidden left-0 top-0 w-[60vw] h-full border-r border-r-gray-900 bg-[#1A3E5C] ease-in-out duration-500 z-40"
        : "ease-in-out w-[60vw] duration-500 fixed top-0 bottom-0 left-[-100%]"
    }`}
  >
    {/* Mobile Logo */}
    <img src={logo} className="w-[60%] mb-12 ml-4" />

    {/* Mobile Navigation Items */}
    {navItems.map((item) => (
      <li
        key={item.id}
        className="p-2 py-4 border-b rounded-xl duration-300 hover:text-blue-950 cursor-pointer font-trajan border-[#d5b36b]"
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
