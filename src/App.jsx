import React, { useEffect, useState } from "react";
import PopularDestinations from "./Section/PopularDestinations";
import Hero from "./Section/Hero";
import Nav from "./Components/Nav";
import About from "./Section/About";
import Gallery from "./Components/Gallery/Gallery.jsx";
import TourAndTraver from "./Section/TourAndTraver";
import TopDestinations from "./Section/TopDestinations";
import UpcomingEvent from "./Section/UpcomingEvent";
import Footer from "./Components/Footer";
import Team from "./Section/Team";
import Contact from "./Section/Contact";
import Testimonials from "./Section/Testimonials.jsx";
import Loader from "./Components/Loader.jsx";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <PopularDestinations />
      <TopDestinations />
      {/* <TourAndTraver /> */}
      <Gallery />
      <Team />
      <UpcomingEvent />
      <Testimonials />
      <Contact />
      <Footer />

      {/* <div className="h-screen w-screen bg-red-400"></div> */}
    </>
  );
};

export default App;
