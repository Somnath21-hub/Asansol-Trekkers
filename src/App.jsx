import React from 'react';
import PopularDestinations from './Section/PopularDestinations';
import Hero from './Section/Hero';
import Nav from './Components/Nav';
import About from './Section/About';
import Gallery from './Section/Gallery';

const App = () => {
  return (
    <>
    <Nav />
    <Hero />
    <About />
    <PopularDestinations />
    <Gallery />
    </>
  );
};

export default App;