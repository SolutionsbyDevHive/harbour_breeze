import { useEffect, useState } from 'react'
import Preloader from '../../components/PreLoader/PreLoader';
import logo from "/assets/logoWithTitle.png"
import About from '../about/About';
import Section1 from '../../components/section1/section1';
import FloorPlan from '../../components/flootPlan/FloorPlan';

function Home() {
  const [loading, setLoading] = useState(true);

  // Simulate a fake data load with a timeout
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000); // 4 seconds load time
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
    {loading ? (
      <Preloader />
    ) : (
      <div>
        <Section1/>
        <About/>
        <FloorPlan/>
      </div>
      
    )}

    </div>
  )
}

export default Home
