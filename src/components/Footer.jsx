import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";
import logo from "/assets/logoWithTitle.png";

function Footer() {
  const iconsTab = [
    { icon: <FaFacebookF />, href: "https://www.facebook.com" },
    { icon: <AiOutlineTwitter />, href: "https://www.twitter.com" },
    { icon: <AiFillYoutube />, href: "https://www.youtube.com" },
    { icon: <BiLogoPinterestAlt />, href: "https://www.pinterest.com" },
  ];

  return (
    <>
      <footer className="bg-white">
        <div className="container mx-auto py-[5rem]">
          {/* footer div all */}
          <div className="flex justify-between flex-col md:flex-row items-center md:items-start md:gap-[5rem] text-left">
            {/* logo side */}
            <div className="flex flex-col w-1/2 md:p-0 py-4 gap-8 ml-0 md:ml-12">
              <img src={logo} alt="footer_logo" className="w-[18rem]" />
              <p className="text-[15px] font-medium text-[#646464]">
                Pavilion Apartments offer the ultimate in high-end living. Our
                spacious and opulent apartments are designed to exceed
                expectations, with stunning decor and a range of top-class
                amenities. We believe in providing our residents with an
                exceptional living experience, from the moment they step into
                our building.
              </p>
              {/* socials */}
              <div className="flex gap-7 text-[18px] text-[#646464] justify-center md:justify-start">
                {iconsTab.map(({ icon, href }, index) => {
                  return (
                    <a
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl bg-[#efefef] p-2 rounded-full hover:bg-[#d5b36b] hover:text-white"
                      style={{ transition: "all 0.3s" }}
                    >
                      {icon}
                    </a>
                  );
                })}
              </div>
              <p className="text-[16px] font-medium text-[#646464]">
                Privacy Policy | © {new Date().getFullYear()} Harbour Breeze{" "}
                <br /> Design by <span>Devhive Solutions</span>
              </p>
            </div>

            {/* middle div */}
            <div className="flex flex-col gap-4 md:gap-8 relative mt-6">
              <p className="text-[22px] font-bold footer-main">USEFUL LINKS</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#d5b36b]"></span>

              {/* Link to Home */}
              <a
                href="/"
                className="text-[16px] hover:text-[#d5b36b] cursor-pointer text-[#646464] font-medium hover:font-bold"
              >
                Home
              </a>

              {/* Link to About Us */}
              <a
                href="/about"
                className="text-[16px] hover:text-[#d5b36b] cursor-pointer text-[#646464] font-medium hover:font-bold"
              >
                About Us
              </a>

              {/* Link to Contact */}
              <a
                href="/contact"
                className="text-[16px] hover:text-[#d5b36b] cursor-pointer text-[#646464] font-medium hover:font-bold"
              >
                Contact
              </a>
            </div>

            {/* right div */}
            <div className="flex flex-col gap-4 md:gap-8 relative mt-6">
              <p className="text-[22px] font-bold footer-main">Working Hours</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#d5b36b]"></span>

              <p className="text-[16px] text-[#646464] font-bold">
                Monday - Friday:
              </p>
              <p className="text-[16px] text-[#646464] font-medium">
                7:00am - 21:00pm
              </p>
              <p className="text-[16px] text-[#646464] font-bold">Saturday:</p>
              <p className="text-[16px] text-[#646464] font-medium">
                7:00am - 19:00pm
              </p>
              <p className="text-[16px] text-[#646464] font-bold">
                Sunday - Closed
              </p>
            </div>

            {/* middle div */}
            <span></span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
