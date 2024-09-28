// import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import floorPlan from "/assets/floorPlan.png"
const FloorPlan = () => {
  const images = [
    {
      original: '/assets/Typical_floor.png',
      thumbnail: '/assets/Typical_floor.png',
    },
    {
      original: '/assets/3D_Flat_01.png',
      thumbnail: '/assets/3D_Flat_01.png',
    },
    {
      original: '/assets/3D_Flat_02.png',
      thumbnail: '/assets/3D_Flat_02.png',
    },
    {
      original: '/assets/3D_Flat_03.png',
      thumbnail: '/assets/3D_Flat_01.png',
    },
   
  ];

  return (
    <div className='flex flex-col items-center mb-[30px] py-[50px]'>
      <p className='font-trajan text-[1.8rem] font-bold ' data-aos="fade-down">Typical Floor Plan</p>
      <img className='self-start w-[300px] ml-[20px]' src={floorPlan} ></img>
    <div className='hidden lg:block w-[60%]'>
      <ImageGallery data-aos="fade-down" items={images} showPlayButton={false}   thumbnailPosition="right" />
    </div>
    
    <div className='lg:hidden block'>
      <ImageGallery data-aos="fade-down" items={images} showPlayButton={false}   thumbnailPosition="bottom" />
    </div>

    </div>
  );
}

export default FloorPlan;
