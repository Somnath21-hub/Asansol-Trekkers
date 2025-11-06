import React from 'react';
import PopularDestinations from './Section/PopularDestinations';
import Hero from './Section/Hero';
import Nav from './Components/Nav';
import About from './Section/About';
import Gallery from './Section/Gallery';
import TourAndTraver from './Section/TourAndTraver';
import TopDestinations from './Section/TopDestinations';
import UpcomingEvent from './Section/UpcomingEvent';

const App = () => {
  return (
    <>
    <Nav />
    <Hero />
    <About />
    <PopularDestinations />
    <TopDestinations />
    {/* <TourAndTraver /> */}
    <Gallery />
    <UpcomingEvent />
    <div className="h-screen w-screen bg-red-400"></div>
    </>
  );
};

export default App;