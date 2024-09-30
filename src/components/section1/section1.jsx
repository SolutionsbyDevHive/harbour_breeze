// import React from "react";
// import ParallaxOwlCarousel from "../carousel/Carousel";
// import amenities from "/assets/download.png";
// import generated from "/assets/generated.jpeg";
// import lifestyle from "/assets/lifestyle.png";
// function Section1() {
//   return (
//     <div className=" mt-[0.5rem] ">
//       <ParallaxOwlCarousel data-aos="fade-down"/>
//       <section id="section2">
//         <div className="section2-main justify-evenly flex sm:flex-col lg:flex-row H-AUTO items-center w-full mt-10 mb-10">
//           <img
//             className="qoute sm-mt-2 lg:ml-4 rounded-2xl shadow-2xl w-[25%]"
//             src={generated}
//             alt="quote"
//             data-aos="fade-down"
//           />
//           <img
//             className="qoute sm-mt-2 lg:ml-4 rounded-2xl w-[25%] "
//             src={amenities}
//             data-aos="fade-down"
//             alt="quote"
//           />
//         </div>
//       </section>

//       <section id="section3" className="h-auto flex w-[100%] flex-col">
//       <div className="section3-main  w-[100%] h-[auto] lg:justify-end justify-center bg-[url('D:\DevHive\Harbour Breeze\harbour_breeze\public\assets\lifestyle.png')] flex self-center items-center">
//         <img src={lifestyle} className="w-full" alt="" />
//       </div>
//       </section>
//     </div>
//   );
// }

// export default Section1;


import React from "react";
import ParallaxOwlCarousel from "../carousel/Carousel";
import amenities from "/assets/download.png";
import generated from "/assets/generated.jpeg";
import lifestyle from "/assets/lifestyle.png";

function Section1() {
  return (
    <div className="mt-[0.5rem]">
      <ParallaxOwlCarousel data-aos="fade-down" />

      {/* Section 2 */}
      <section id="section2">
        <div className="flex flex-col sm:flex-col lg:flex-row justify-evenly items-center w-full mt-10 mb-10">
          <img
            className="rounded-2xl shadow-2xl w-[90%] sm:w-[80%] lg:w-[25%] mb-6 lg:mb-0 lg:ml-4"
            src={generated}
            alt="quote"
            data-aos="fade-down"
          />
          <img
            className="rounded-2xl w-[90%] sm:w-[80%] lg:w-[25%] lg:ml-4"
            src={amenities}
            alt="quote"
            data-aos="fade-down"
          />
        </div>
      </section>

      {/* Section 3 */}
      <section id="section3" className="h-auto flex w-full flex-col">
        <div className="section3-main w-full h-auto lg:justify-end justify-center bg-cover bg-center flex items-center">
          <img
            src={lifestyle}
            className="w-full h-auto object-cover"
            alt="lifestyle"
          />
        </div>
      </section>
    </div>
  );
}

export default Section1;
