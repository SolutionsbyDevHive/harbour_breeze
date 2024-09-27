import React from 'react'
import ParallaxOwlCarousel from '../carousel/Carousel'
import img from "/assets/images.webp";
import design from "/assets/design.png";

function Section1() {
  return (
    <div className=" mt-[100px]  min-h-[180vh]">

    <ParallaxOwlCarousel />
    <section id="section2">
      <div className="section2-main justify-evenly flex sm:flex-col lg:flex-row items-center w-full mt-10">
          <img className="qoute sm-mt-2 lg:ml-4  w-[25%]" src={img} alt="quote" />
          <img className="qoute sm-mt-2 lg:ml-4  w-[25%] " src={img} alt="quote" />
      </div>

    </section>

    <section id="section3" className='h-auto'>
      <div className="section3-main mt-10  min-w-full h-auto bg-[url('/assets/slide1.jpg')] flex items-center">
        <img src={design} className=" mt-5 h-5 w-5" alt="chedda" />
        <h2 className="mt-10 mb-10 w-full h-60 text-white text-4xl justify-center font-playfair text-center">Live Your ambition <br/>Book Now</h2>
      </div>
    </section>
</div>
  )
}

export default Section1
