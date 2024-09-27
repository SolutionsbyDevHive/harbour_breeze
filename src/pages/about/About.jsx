// import React from 'react'
// import Aos from "aos"
import { useEffect } from "react";
import building from "/assets/edit.webp"
import logo from "/assets/logoWithTitle.png"
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with options
  }, []);
  return (
    <div className=' w-[100%] flex  md:flex-row my-[1rem] bg-[#1A3E5C] md:py-[50px] py-[30px] px-[15px]  flex-col items-center justify-around '>
      <img data-aos="fade-down" src={building} className='h-[100%] md:w-[38%] '></img>
      <div className='flex flex-col gap-[12px] md:w-[42rem]   md:p-[3rem] p-[1rem] justify-between rounded-2xl'>
        <img data-aos="fade-down" src={logo} className="w-[380px] self-center"></img>
        <div className="w-auto " data-aos="fade-down">
        <p className='text-[1rem] w-[100%] text-[#D6B575] '>
            Harbour Breeze is the newest feather in the cap of Chheda Group (Premji 
            Vershi Venture), a renowned conglomerate with over 5 decades of cumulative 
            experience, specialization and leadership in real estate, infrastructure and 
            warehousing. Till date the Group has developed more than 1 million sq. . of 
            land, and nurtures the dream of being a major contributor to construction 
            industry and infrastructure growth.
          </p>
          <br></br>
          <p className='text-[1rem] w-[100%] text-[#D6B575]'>
            Besides real estate, infrastructure and warehousing, Chheda Group also 
            provids logistical support through its logistical arm Globicon Terminals. The 
            company offers end-to-end logistical solutions including container freight 
            stations.
          </p>
          <br></br>
          <p className='text-[1rem] w-[100%] text-[#D6B575]'>
            The potential of the land bank of the Group is more than 7 million sq. . which 
            it aims to develop in line with its commitment to quality construction, timely 
            possession, and transparency in dealings – virtues that have earned Chheda 
            reputation par excellence. At Chheda, we constantly and consistently 
            endeavour to exceed customers' expectations, and uphold the values of trust 
            and client satisfaction.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
