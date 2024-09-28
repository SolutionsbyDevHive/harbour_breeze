import React, { useEffect, useState } from "react";
import Preloader from "../../components/PreLoader/PreLoader";
import About from "../../components/about/About";
import Section1 from "../../components/section1/section1";
import FloorPlan from "../../components/flootPlan/FloorPlan";
import { Features } from "../../components/Home/Features";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Home() {
  const [loading, setLoading] = useState(true);

  // Simulate a fake data load with a timeout
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 4 seconds load time
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <Navbar />
          <div className="pt-24">
            <Section1 />
              <FloorPlan />
            <About />
            <Features />
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
