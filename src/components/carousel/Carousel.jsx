import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Carousel.css';

const options = {
  loop: true,
  margin: 10,
  nav: true,
  items: 1,
  autoplay: true,
};

const ParallaxOwlCarousel = () => {
  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll('.parallax-bg');
      items.forEach((item) => {
        const scrollPosition = window.pageYOffset;
        // Increase multiplier to make the parallax more noticeable
        item.style.transform = `translateY(${scrollPosition * 0.8}px)`; // Stronger parallax effect
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const images = [
    '/assets/Gym.webp',
    '/assets/yoga.webp',
    '/assets/mazgaon.webp',
  ];

  return (
    <div className="parallax-owl-carousel">
      <OwlCarousel className="owl-theme" {...options}>
        {images.map((image, index) => (
          <div key={index} className="item">
            {/* Background image container */}
            <div
              className="parallax-bg"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default ParallaxOwlCarousel;
