import React from "react";
import Photo1 from "/Features/1.webp";
import Photo2 from "/Features/2.webp";
import Photo3 from "/Features/3.webp";
import Photo4 from "/Features/4.webp";
import AOS from "aos";
import "aos/dist/aos.css";
export const Features = () => {
  return (
    <section className=" w-full mt-12 px-[1rem] md:px-[0rem] flex justify-start flex-col items-center text-blue-950">
      <div className=" w-full text-center md:text-left pl-[0rem] md:pl-[6rem]">
        <span className=" text-3xl text-[#d5b36b] font-montserrat border-b-[1px] border-[#d5b36b]">
          Features of{" "}
        </span>{" "}
        <span className=" text-3xl ml-1 font-montserrat">Pavillion</span>
      </div>
      <section className=" py-6 flex flex-col gap-y-6  px-[1rem] md:px-[3rem]">
        <div className=" flex w-full flex-col md:flex-row justify-center gap-y-1 gap-x-[5rem] items-center md:items-start ">
          <img className=" w-[60%] md:w-[30%]" src={Photo1} alt="photo1" />
          <div className="bg-[#222222] w-[80%] md:w-[50%] h-[20rem] p-4 text-white">
            <h2 className="text-lg font-semibold mt-4">
              6 Ft. By 32 Ft. Sundeck to take in the Sea and Sunshine.
            </h2>
            <p className="mt-4">
              Throw your gaze from the sundeck at ‘The Pavilion’ and you’ll have
              the Arabian Sea and the Shivaji Park for company over a cocktail.
              Yes, the sea is a close neighbour for residents of ‘The Pavilion’
              – in fact it’s just about 350 meters away.
            </p>
            <p className="mt-6">
              So, you can either choose to just gaze, or walk up to the
              welcoming shore to feel the breeze in your face.
            </p>
          </div>
        </div>

        <div className=" flex w-full justify-center px-2 py-1 bg-custom-blue-gradient flex-col md:flex-row gap-y-1 gap-x-[5rem] items-center md:items-start">
          <div className="  mt-4 text-right hidden md:block w-[70%] md:w-[50%] h-[20rem] ">
            <h2 className=" font-serif text-lg ">Architect Speak</h2>
            <p className="mt-8">
              The landmark location makes ‘The Pavilion’ a marquee project. Our
              core planning principle was to create a luxurious layout which
              optimized the views of the park on the north and the ocean to the
              west.
            </p>
            <p className="mt-8">
              The experience begins with a grand covered porch for vehicle drop
              off/pick up leading to a double-height lobby overlooking the park.
              Each apartment has been designed as a seamless column-free space
              adhering to principles of Vaastu. High ceilings with a flat slab
              are designed to exude opulence and lend flexibility in planning to
              the owners. Full-height windows maximize the natural light and
              ventilation for the apartment.
            </p>
            <p className="mt-8">
              The facade has been designed with classical architectural elements
              to give a timeless and elegant character to the structure.
            </p>
          </div>
          <img className=" w-[60%] md:w-[30%]" src={Photo2} alt="photo2" />
          <div className="text-left md:text-right block md:hidden w-[80%] md:w-[50%] h-auto p-4 ">
            <h2 className=" font-serif text-lg ">Architect Speak</h2>
            <p className="mt-4">
              The landmark location makes ‘The Pavilion’ a marquee project. Our
              core planning principle was to create a luxurious layout which
              optimized the views of the park on the north and the ocean to the
              west.
            </p>
            <p className="mt-4">
              The experience begins with a grand covered porch for vehicle drop
              off/pick up leading to a double-height lobby overlooking the park.
              Each apartment has been designed as a seamless column-free space
              adhering to principles of Vaastu. High ceilings with a flat slab
              are designed to exude opulence and lend flexibility in planning to
              the owners. Full-height windows maximize the natural light and
              ventilation for the apartment.
            </p>
            <p className="mt-4">
              The facade has been designed with classical architectural elements
              to give a timeless and elegant character to the structure.
            </p>
          </div>{" "}
        </div>

        <div className=" flex w-full justify-center flex-col md:flex-row gap-y-1 gap-x-[5rem] items-center md:items-start">
          <img className=" w-[60%] md:w-[30%]" src={Photo3} alt="photo3" />
          <div className="bg-[#222222] w-[80%] md:w-[50%] h-[20rem] p-4 text-white">
            <h2 className="text-lg font-semibold mt-4">
              The Grand Lobby And Visitor’s Lounge That’s Designed To Dazzle
            </h2>
            <p className="mt-4">
              The Grand Entrance Lobby at ‘The Pavilion’ welcomes you like a
              star with its stunning décor.
            </p>
            <p className="mt-6">
              From the ceiling that soars to a height of 11 ft., the resplendent
              chandelier hanging down to create a dazzling display of light, the
              luxurious loungers in the VISITOR’s LOUNGE, the gleaming Italian
              marble flooring…everything screams of the highest degree of
              opulence.
            </p>
          </div>
        </div>

        <div className=" flex w-full justify-center bg-custom-blue-gradient flex-col md:flex-row gap-y-1 gap-x-[5rem] items-center md:items-start">
          <div className="  mt-4 text-right hidden md:block w-[70%] md:w-[50%] h-[20rem] ">
            <h2 className=" font-serif text-lg ">Architect Speak</h2>
            <p className="mt-4">
              The landmark location makes ‘The Pavilion’ a marquee project. Our
              core planning principle was to create a luxurious layout which
              optimized the views of the park on the north and the ocean to the
              west.
            </p>
            <p className="mt-4">
              The experience begins with a grand covered porch for vehicle drop
              off/pick up leading to a double-height lobby overlooking the park.
              Each apartment has been designed as a seamless column-free space
              adhering to principles of Vaastu. High ceilings with a flat slab
              are designed to exude opulence and lend flexibility in planning to
              the owners. Full-height windows maximize the natural light and
              ventilation for the apartment.
            </p>
            <p className="mt-4">
              The facade has been designed with classical architectural elements
              to give a timeless and elegant character to the structure.
            </p>
          </div>
          <img className=" w-[80%] md:w-[40%]" src={Photo4} alt="photo4" />
          <div className=" text-left md:text-right block md:hidden w-[80%] md:w-[50%] h-auto p-4 ">
            <h2 className=" font-serif text-lg ">Architect Speak</h2>
            <p className="mt-4">
              The landmark location makes ‘The Pavilion’ a marquee project. Our
              core planning principle was to create a luxurious layout which
              optimized the views of the park on the north and the ocean to the
              west.
            </p>
            <p className="mt-4">
              The experience begins with a grand covered porch for vehicle drop
              off/pick up leading to a double-height lobby overlooking the park.
              Each apartment has been designed as a seamless column-free space
              adhering to principles of Vaastu. High ceilings with a flat slab
              are designed to exude opulence and lend flexibility in planning to
              the owners. Full-height windows maximize the natural light and
              ventilation for the apartment.
            </p>
            <p className="mt-4">
              The facade has been designed with classical architectural elements
              to give a timeless and elegant character to the structure.
            </p>
          </div>{" "}
        </div>
      </section>
    </section>
  );
};
