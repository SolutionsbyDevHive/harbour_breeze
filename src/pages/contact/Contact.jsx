import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom"; // Importing Link for navigation

// FontAwesome Icons
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import MapComponent from "../../components/map/map";

function Contact() {

  const position = [18.9698, 72.8409];
  const google = "https://www.google.com/maps/place/Harbour+Breeze/@18.9698958,72.8403236,19z/data=!3m1!4b1!4m6!3m5!1s0x3be7cf003e5a5df9:0x3657c8b0f38641b9!8m2!3d18.9698958!4d72.8409673!16s%2Fg%2F11y5tmt3n_?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`;

  const handleMapClick = () => {
    window.open(google, '_blank');
  };



  return (
    <>
      <Navbar />

      <section className="bg-gray-100 pt-[5rem] pb-[5rem]">
        {/* Contact Header Section */}
        <div
          className="relative h-64 bg-cover bg-no-repeat bg-bottom"
          style={{ backgroundImage: "url('/assets/Contact.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h1 className="text-xl md:text-4xl font-bold text-center">
              PUTTING A PLAN TO ACTION, TO ASSURE YOUR SATISFACTION!
            </h1>
            {/* Home Link (Router) */}
            <p className="mt-2 text-center">
              {/* Home Link is now clickable and styled */}
              <Link to="/" className="text-yellow-500 hover:underline">
                Home
              </Link> &gt; Contact Us
            </p>
          </div>
        </div>

        {/* Contact Form & Info Section */}
        <div className="container mx-auto py-16 px-4 flex flex-col md:flex-row">
          {/* Contact Form */}
          <div className="md:w-2/3 bg-white/30 backdrop-blur-lg shadow-lg p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-yellow-600 mb-4">
              GET IN TOUCH
            </h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="border border-gray-300 p-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-300 p-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <input
                  type="text"
                  placeholder="Mobile No"
                  className="border border-gray-300 p-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="border border-gray-300 p-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                />
              </div>
              <textarea
                placeholder="Message"
                rows="4"
                className="border border-gray-300 p-4 w-full mt-6 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
              ></textarea>
              <button
                type="submit"
                className="bg-yellow-600 text-white py-3 px-6 mt-6 rounded-lg shadow-lg hover:bg-yellow-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="md:w-1/3 bg-black/70 backdrop-blur-lg text-white p-8 rounded-lg md:ml-8 mt-8 md:mt-0 shadow-lg">
            <h2 className="text-2xl font-bold text-yellow-600 mb-4">
              CONTACT INFO
            </h2>
            <div className="space-y-6">
              {/* Phone Section */}
              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-yellow-600 text-xl" />
                <div>
                  <span className="block text-base">Phone</span>
                  <span className="text-sm text-gray-400">+91-8851893233</span>
                </div>
              </div>

              {/* Email Section */}
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-yellow-600 text-xl" />
                <div>
                  <span className="block text-base">Email</span>
                  <span className="text-sm text-gray-400">
                    thepavilion@chhedagroup.co.in
                  </span>
                </div>
              </div>

              {/* Location Section */}
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-yellow-600 text-xl" />
                <div>
                  <span className="block text-base">Location</span>
                  <span className="text-sm text-gray-400">
                    7B, Dr. Madhukar B Raut Marg, <br />
                    Dadar West, Shivaji Park, <br />
                    Mumbai, Maharashtra 400028
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="items-center flex w-full justify-center" onClick={handleMapClick}>
          <MapComponent/>
        </div>

      </section>
      
      <Footer />
    </>
  );
}

export default Contact;
