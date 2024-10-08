// import React, { useEffect } from "react";
// import Photo1 from "/Features/1.webp";
// import Photo2 from "/Features/2.webp";
// import Photo3 from "/Features/3.webp";
// import Photo4 from "/Features/4.webp";
// import leaf from "/Features/leaf.png";
// import light_leaf from "/Features/Light_leaf.png";
// import animation from "/Features/animation.webm";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// export const Features = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);
//   return (
//     <section className=" w-full px-[1rem] md:px-[0rem] flex justify-start flex-col items-center text-blue-950">
//       <div data-aos="fade-right" className=" w-full text-center md:text-left pl-[0rem] md:pl-[6rem] mt-12">

//         <span className=" text-3xl text-[#d5b36b]  border-b-[1px] border-[#d5b36b] font-trajan">
//           Features of{" "}
//         </span>{" "}
//         <span className=" text-3xl ml-1  font-trajan">Harbour Breeze</span>
//       </div>{" "}
//       <section className=" py-6 flex flex-col gap-y-6  px-[1rem] md:px-[0rem]">
//         <div className=" flex w-full flex-col md:flex-row justify-center gap-y-1 gap-x-[5rem] items-center md:items-start ">
//           <img data-aos="fade-right" className=" w-[60%] md:w-[30%]" src={Photo1} alt="photo1" />
//           <div data-aos="fade-left" className="bg-[#1A3E5C] text-[#d2ac62] flex items-center justify-center mt-24 rounded-2xl w-[80%] md:w-[50%] h-fit text-xl pb-0 md:pb-[10rem] p-4 ">
//             <div data-aos="fade-up">

//             <h2 className="text-xl font-semibold mt-4">
//               6 Ft. By 32 Ft. Sundeck to take in the Sea and Sunshine.
//             </h2>
//             <p className="mt-8">
//               Throw your gaze from the sundeck at 'Harbour Breeze' and you’ll have
//               the Arabian Sea and the Shivaji Park for company over a cocktail.
//               Yes, the sea is a close neighbour for residents of ‘Harbour Breeze’
//               – in fact it’s just about 350 meters away.
//             </p>
//             <p className="mt-8">
//               So, you can either choose to just gaze, or walk up to the
//               welcoming shore to feel the breeze in your face.
//             </p>
//             </div>
//           </div>
//         </div>

//         <div className="relative flex w-full justify-center px-2 py-1 border-t-4 border-b-4 border-[#d5b36b] bg-custom-blue-gradient flex-col md:flex-row gap-y-1 gap-x-[5rem] items-center md:items-start">
//           <div className="  mt-4 text-right hidden md:block w-[70%] md:w-[50%] h-[20rem] text-[#d2ac62] items-center justify-center">
//           <img data-aos="fade-left" src={light_leaf} className=" absolute w-[15rem] bottom-0 left-0 scale-x-[-1] z-10 opacity-60 -mb-[3rem]" alt="leaf"/>
// <div data-aos="fade-up">

//             <h2 className=" font-montserrat text-lg mt-10 ">Architect Speak</h2>
//             <p className="mt-2">
//               The landmark location makes ‘The Pavilion’ a marquee project. Our
//               core planning principle was to create a luxurious layout which
//               optimized the views of the park on the north and the ocean to the
//               west.
//             </p>
//             <p className="mt-4">
//               The experience begins with a grand covered porch for vehicle drop
//               off/pick up leading to a double-height lobby overlooking the park.
//               Each apartment has been designed as a seamless column-free space
//               adhering to principles of Vaastu. High ceilings with a flat slab
//               are designed to exude opulence and lend flexibility in planning to
//               the owners. Full-height windows maximize the natural light and
//               ventilation for the apartment.
//             </p>
//             <p className="mt-4">
//               The facade has been designed with classical architectural elements
//               to give a timeless and elegant character to the structure.
//             </p>
// </div>
//           </div>
//           <img data-aos="fade-left" className=" w-[60%] md:w-[30%]" src={Photo2} alt="photo2" />
//           <div className="text-left md:text-right block md:hidden w-[80%] md:w-[50%] h-auto p-4 ">
//           <img data-aos="fade-right" src={light_leaf} className=" absolute w-[15rem] bottom-0 left-0 scale-x-[-1] z-10 opacity-60 -mb-[3rem]" alt="leaf"/>
// <div data-aos="fade-up">

//             <h2 className=" font-montserrat text-lg ">Architect Speak</h2>
//             <p className="mt-4">
//               The landmark location makes ‘The Pavilion’ a marquee project. Our
//               core planning principle was to create a luxurious layout which
//               optimized the views of the park on the north and the ocean to the
//               west.
//             </p>
//             <p className="mt-4">
//               The experience begins with a grand covered porch for vehicle drop
//               off/pick up leading to a double-height lobby overlooking the park.
//               Each apartment has been designed as a seamless column-free space
//               adhering to principles of Vaastu. High ceilings with a flat slab
//               are designed to exude opulence and lend flexibility in planning to
//               the owners. Full-height windows maximize the natural light and
//               ventilation for the apartment.
//             </p>
//             <p className="mt-4">
//               The facade has been designed with classical architectural elements
//               to give a timeless and elegant character to the structure.
//             </p>
// </div>
//           </div>{" "}
//         </div>

//         {/* <div className=" flex w-full justify-center flex-col md:flex-row gap-y-1 gap-x-[5rem] items-center md:items-start">
//           <img data-aos="fade-right" className=" w-[60%] md:w-[30%]" src={Photo3} alt="photo3" />
//           <div data-aos="fade-left" className="bg-[#222222] rounded-2xl w-[80%] md:w-[50%] h-fit pb-0 md:pb-[10rem] p-4 text-white">
//             <div data-aos="fade-up">

//             <h2 className="text-lg font-semibold mt-4">
//               The Grand Lobby And Visitor’s Lounge That’s Designed To Dazzle
//             </h2>
//             <p className="mt-8">
//               The Grand Entrance Lobby at ‘The Pavilion’ welcomes you like a
//               star with its stunning décor.
//             </p>
//             <p className="mt-8">
//               From the ceiling that soars to a height of 11 ft., the resplendent
//               chandelier hanging down to create a dazzling display of light, the
//               luxurious loungers in the VISITOR’s LOUNGE, the gleaming Italian
//               marble flooring…everything screams of the highest degree of
//               opulence.
//             </p>
//             </div>
//           </div>
//         </div> */}

//         <div className="relative flex w-full justify-center border-t-4 border-b-4 border-[#d5b36b] bg-custom-blue-gradient flex-col md:flex-row-reverse gap-y-1 gap-x-[5rem] items-center md:items-start">
//           <img data-aos="fade-right" src={light_leaf} className=" absolute w-[15rem] bottom-0 left-0 scale-x-[-1] z-10 opacity-60 -mb-[3rem]" alt="leaf"/>
//           <div className="  mt-4 text-left  hidden md:block w-[70%] md:w-[50%] h-[20rem] text-white">
//             <div data-aos="fade-up">

//             <h2 className=" font-montserrat text-lg mt-10 text-[#d2ac62] ">Architect Speak</h2>
//             <p className="mt-4 text-[#d2ac62]">
//               The landmark location makes ‘The Pavilion’ a marquee project. Our
//               core planning principle was to create a luxurious layout which
//               optimized the views of the park on the north and the ocean to the
//               west.
//             </p>
//             <p className="mt-4 text-[#d2ac62]">
//               The experience begins with a grand covered porch for vehicle drop
//               off/pick up leading to a double-height lobby overlooking the park.
//               Each apartment has been designed as a seamless column-free space
//               adhering to principles of Vaastu. High ceilings with a flat slab
//               are designed to exude opulence and lend flexibility in planning to
//               the owners. Full-height windows maximize the natural light and
//               ventilation for the apartment.
//             </p>
//             <p className="mt-4 text-[#d2ac62]">
//               The facade has been designed with classical architectural elements
//               to give a timeless and elegant character to the structure.
//             </p>
//             </div>
//           </div>
//           <img data-aos="fade-left" className=" w-[80%] md:w-[40%]" src={Photo4} alt="photo4" />
//           <div className=" text-left md:text-right block md:hidden w-[80%] md:w-[50%] h-auto p-4 text-white">
//             <h2 className=" font-montserrat text-lg ">Architect Speak</h2>
//             <p className="mt-4">
//               The landmark location makes ‘The Pavilion’ a marquee project. Our
//               core planning principle was to create a luxurious layout which
//               optimized the views of the park on the north and the ocean to the
//               west.
//             </p>
//             <p className="mt-4">
//               The experience begins with a grand covered porch for vehicle drop
//               off/pick up leading to a double-height lobby overlooking the park.
//               Each apartment has been designed as a seamless column-free space
//               adhering to principles of Vaastu. High ceilings with a flat slab
//               are designed to exude opulence and lend flexibility in planning to
//               the owners. Full-height windows maximize the natural light and
//               ventilation for the apartment.
//             </p>
//             <p className="mt-4">
//               The facade has been designed with classical architectural elements
//               to give a timeless and elegant character to the structure.
//             </p>
//           <img data-aos="fade-right" src={light_leaf} className=" absolute w-[15rem] bottom-0 left-0 scale-x-[-1] z-10 opacity-0 -mb-[3rem]" alt="leaf"/>
//           </div>{" "}
//         </div>
//       </section>
//     </section>
//   );
// };

import React, { useEffect } from "react";
import Photo1 from "/Features/1.webp";
import Photo2 from "/Features/2.webp";
import Photo3 from "/Features/3.webp";
import Photo4 from "/Features/4.webp";
import leaf from "/Features/leaf.png";
import light_leaf from "/Features/Light_leaf.png";
import animation from "/Features/animation.webm";
import AOS from "aos";
import "aos/dist/aos.css";

export const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="w-full px-4 md:px-0 flex justify-start flex-col items-center text-blue-950">
      <div
        data-aos="fade-right"
        className="w-full text-center md:text-left pl-0 md:pl-24 mt-12"
      >
        <span className="text-2xl md:text-3xl text-[#d5b36b] border-b-[1px] border-[#d5b36b] font-trajan">
          Features of{" "}
        </span>
        <span className="text-2xl md:text-3xl ml-1 font-trajan">
          Harbour Breeze
        </span>
      </div>

      {/* Features Section */}
      <section className="py-6 flex flex-col gap-y-6 px-4 md:px-0">
        {/* Feature 1 */}
        <div className="flex w-full flex-col md:flex-row justify-center gap-y-4 gap-x-12 items-center">
          <img
            data-aos="fade-right"
            className="w-[80%] md:w-[30%]"
            src={Photo1}
            alt="photo1"
          />
          <div
            data-aos="fade-left"
            className="bg-[#1A3E5C] text-[#d2ac62] flex items-center justify-center mt-12 md:mt-24 rounded-2xl w-full md:w-[50%] text-base md:text-xl p-4"
          >
            <div data-aos="fade-up">
              <h2 className="text-lg md:text-xl font-semibold mt-4">
                A Jewel in the Heart of Mazgaon
              </h2>
              <p className="mt-6 md:mt-8">
                Harbour Breeze offers you a luxurious lifestyle in the heart of
                Mazgaon, a location already renowned for its historical
                significance and modern connectivity. The 20-storeyed building
                stands as a beacon of architectural brilliance, offering
                exclusive 1 & 2 BHK flats with 3 BHK Jodi flats available for
                those who desire extra space.
              </p>
              <p className="mt-6 md:mt-8">
                With an array of premium features like fully mechanized parking,
                a rooftop with state-of-the-art amenities, and retail spaces for
                convenience, Harbour Breeze provides the ultimate blend of
                luxury and functionality.
              </p>
            </div>
          </div>
        </div>

        {/* Architect Speak Section */}
        <div className="relative flex w-full justify-center px-2  border-t-4 border-b-4 border-[#d5b36b] bg-custom-blue-gradient flex-col md:flex-row gap-y-4 gap-x-12 items-center">
          <div className="mt-4 text-right hidden md:block w-[70%] md:w-[50%] text-[#d2ac62]">
            <img
              data-aos="fade-left"
              src={light_leaf}
              className="absolute w-[15rem] bottom-0 left-0 scale-x-[-1] z-10 opacity-60 -mb-[3rem]"
              alt="leaf"
            />
            <div data-aos="fade-up">
              <h2 className="font-montserrat text-lg mt-10">
                Timeless Design Meets Modern Comfort
              </h2>
              <p className="mt-2">
                The architecture of Harbour Breeze has been meticulously planned
                to optimize views of the serene Arabian Sea and the lush
                greenery of Shivaji Park. Every detail has been designed to
                exude luxury—from the grand entrance porch that leads to a
                double-height lobby to the seamless column-free apartments that
                maximize both space and natural light.
              </p>
              <p className="mt-4">
                The facade is a perfect fusion of classical elements and
                contemporary design, creating a timeless aesthetic that will
                remain elegant for years to come.
              </p>
            </div>
          </div>
          <img
            data-aos="fade-left"
            className="w-[80%] md:w-[30%]"
            src={Photo2}
            alt="photo2"
          />
          <div className="text-left md:text-right block md:hidden w-full md:w-[50%] p-4 text-[#d2ac62]">
            <div data-aos="fade-up">
              <h2 className="font-montserrat text-lg">
                Timeless Design Meets Modern Comfort
              </h2>
              <p className="mt-4">
                The architecture of Harbour Breeze has been meticulously planned
                to optimize views of the serene Arabian Sea and the lush
                greenery of Shivaji Park.
              </p>
              <p className="mt-4">
                Every detail has been designed to exude luxury—from the grand
                entrance porch to the seamless column-free apartments that
                maximize both space and natural light.
              </p>
            </div>
          </div>
        </div>

        {/* Third Section */}
        <div className="relative flex w-full justify-center border-t-4 border-b-4 border-[#d5b36b] bg-custom-blue-gradient flex-col md:flex-row-reverse gap-y-4 gap-x-12 items-center">
          <img
            data-aos="fade-left"
            src={light_leaf}
            className="absolute w-[15rem] bottom-0 right-0 scale-x-[-1] z-10 opacity-60 -mb-[3rem]"
            alt="leaf"
          />
          <div className="mt-4 text-left hidden md:block w-[70%] md:w-[50%] ">
            <div data-aos="fade-up">
              <h2 className="font-montserrat text-lg mt-10 text-[#d2ac62]">
                A Life of Wellness and Leisure
              </h2>
              <p className="mt-4 text-[#d2ac62]">
                At Harbour Breeze, residents are treated to a wellness-focused
                lifestyle that encompasses a fully equipped gymnasium, a yoga
                and meditation deck, and a rooftop filled with amenities
                designed to provide both relaxation and entertainment.
              </p>
              <p className="mt-4 text-[#d2ac62]">
                From the senior citizen’s corner to the barbeque deck and party
                lawn, Harbour Breeze creates a sense of community while ensuring
                the utmost in comfort and luxury.
              </p>
            </div>
          </div>
          <img
            data-aos="fade-left"
            className="w-[80%] md:w-[40%]"
            src={Photo4}
            alt="photo4"
          />
          <div className="text-left md:text-right block md:hidden w-full md:w-[50%] p-4 text-[#d2ac62]">
            <div data-aos="fade-up">
              <h2 className="font-montserrat text-lg">
                A Life of Wellness and Leisure
              </h2>
              <p className="mt-4">
                At Harbour Breeze, residents are treated to a wellness-focused
                lifestyle that encompasses a fully equipped gymnasium, a yoga
                and meditation deck, and a rooftop filled with amenities
                designed for relaxation and entertainment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
