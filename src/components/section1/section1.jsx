import React from "react";
import ParallaxOwlCarousel from "../carousel/Carousel";
import img from "/assets/images.webp";
import design from "/assets/design.png";

function Section1() {
  return (
    <div className=" mt-[0.5rem] ">
      <ParallaxOwlCarousel data-aos="fade-down"/>
      <section id="section2">
        <div className="section2-main justify-evenly flex sm:flex-col lg:flex-row items-center w-full mt-10">
          <img
            className="qoute sm-mt-2 lg:ml-4  w-[25%]"
            src={img}
            alt="quote"
            data-aos="fade-down"
          />
          <img
            className="qoute sm-mt-2 lg:ml-4  w-[25%] "
            src={img}
            data-aos="fade-down"
            alt="quote"
          />
        </div>
      </section>

      <section id="section3" className="h-auto flex w-[100%] flex-col">
      <div className="section3-main mt-10 w-[100%]  h-[450px] lg:justify-end justify-center bg-[url('/assets/slide1.jpg')] flex self-center items-center">
        <img src="/assets/ambition.png" data-aos="fade-left" className="w-[350px] lg:mr-[4rem] justify-center lg:justify-end"></img>
      </div>
      </section>
    </div>
  );
}

export default Section1;
