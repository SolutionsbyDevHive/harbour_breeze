// Preloader.js
import React, { useState, useEffect } from 'react';
import './Preloader.css';
import logo from "/assets/logoWithTitle.png"
const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(interval);
          setTimeout(() => setShowPreloader(false), 500); // Wait before hiding the preloader for slide-up effect
          return oldProgress;
        }
        return Math.min(oldProgress + 10, 100);
      });
    }, 300);
  }, []);

  return (
    <div className={`preloader ${showPreloader ? 'slide-up-in' : 'slide-up-out'}`}>
      <div className="preloader-content flex flex-col ">
        <img src={logo} className="w-[80%] self-center"></img>
        <div className='flex flex-col mt-[20rem] px-5'>
            <div className="progress-bar w-[100%] ">
            <div
                className="progress w-[100%] "
                style={{ width: `${progress}%`, backgroundColor: '#D6B575' }}
            ></div>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Preloader;
// <p className="progress-text">{progress}%</p>