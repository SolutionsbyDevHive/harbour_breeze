import React from "react";
import ParallaxOwlCarousel from "../carousel/Carousel";
import img from "/assets/images.webp";
import img2 from "/assets/generated.jpeg"
import design from "/assets/design.png";
import amenities from "/assets/download.png";

function Section1() {
  return (
<<<<<<< Updated upstream
    <div className=" mt-[2rem]  min-h-[180vh]">
      <ParallaxOwlCarousel />
      <section id="section2">
        <div className="section2-main justify-evenly flex sm:flex-col lg:flex-row items-center w-full mt-10">
          <img
            className="qoute sm-mt-2 lg:ml-4  w-[25%]"
            src={img}
            alt="quote"
          />
          <img
            className="qoute sm-mt-2 lg:ml-4  w-[25%] "
            src={img}
            alt="quote"
          />
        </div>
      </section>

      <section id="section3" className="h-auto">
        <div className="section3-main mt-10  min-w-full h-auto bg-[url('/assets/slide1.jpg')] flex items-center">
          <img src={design} className=" mt-5 h-5 w-5" alt="chedda" />
          <h2 className="mt-10 mb-10 w-full h-60 text-white text-4xl justify-center font-playfair text-center">
            Live Your ambition <br />
            Book Now
          </h2>
        </div>
      </section>
    </div>
  );
=======
    <div className=" mt-[100px] h-auto">

    <ParallaxOwlCarousel />
    <section id="section2">
      <div className="section2-main justify-evenly flex flex-col lg:flex-row items-center w-full mt-10">
          <img className="qoute sm-mt-2 lg:ml-4 rounded-3xl shadow-2xl lg:w-[30%] " src={img2} alt="quote" />
          <img className="qoute mt-5 lg-mt-0 lg:ml-4 lg:w-[30%]" src={amenities} alt="quote" />
      </div>

    </section>

    {/* <section id="section3" className='h-auto'>
      <div className="section3-main mt-10  min-w-full h-auto bg-[url('/assets/slide1.jpg')] flex flex-col items-center">
        <div className="flex flex-row justify-center items-center">
          <img src={design} className=" ml-5 mr-5 mt-5 h-10 w-10" alt="chedda" />
          <h2 className="mt-5 w-full h-auto text-white text-4xl justify-center font-playfair text-center font-bold">OUR PROPOSAL</h2>
          <img src={design} className=" ml-5 mr-5 mt-5 h-10 w-10" alt="chedda" />
        </div>
        
        <img src={amenities} className=' mr-5 self-end max-h-[50%]' alt="" />
      </div>
    </section> */}
    <section id="section3" className="h-auto">
  <div 
    className="section3-main mt-10 w-full h-auto bg-cover bg-center bg-no-repeat flex flex-col items-center" 
    style={{ backgroundImage: "url('/assets/slide2.jpg')" }}
  >
    <div className="flex flex-row justify-center h-80 items-center">
      <img src={design} className="ml-5 mr-5 mt-5 h-10 w-10" alt="chedda" />
      <h2 className="mt-5 text-2xl text-[#1a3a55] lg:text-4xl justify-center font-playfair text-center font-bold">
        About Us
      </h2>
      <img src={design} className="ml-5 mr-5 mt-5 h-10 w-10" alt="chedda" />
    </div>

  </div>
</section>

</div>
  )
>>>>>>> Stashed changes
}

export default Section1;
