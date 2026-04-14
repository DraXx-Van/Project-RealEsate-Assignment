import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Navbar, Hero, Overview, Amenities, Connectivity, Explore, FloorPlans, 
  VideoShowcase, Developer, FAQ, Footer
} from '../home';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiBase = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
        const res = await axios.get(`${apiBase}/content`);
        setData(res.data);
      } catch (err) {
        console.error("Failed to fetch data", err);
      }
    };
    fetchData();
  }, []);

  if (!data) return <div className="min-h-screen flex items-center justify-center font-headline italic text-3xl text-primary">Loading...</div>;

  return (
    <div className="w-full relative">
      <Navbar />
      <main>
          <Hero data={data} />
          <Overview data={data} />
          <Amenities data={data} />
          <Connectivity data={data} />
          <Explore />
          <FloorPlans />
          <VideoShowcase />
          <Developer data={data} />
          <FAQ data={data} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;