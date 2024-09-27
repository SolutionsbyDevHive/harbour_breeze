// import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

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
    <div >
      <ImageGallery items={images} showPlayButton={false} lazyLoad  thumbnailPosition="right" />
    </div>
  );
}

export default FloorPlan;
