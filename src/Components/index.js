import React from 'react';
import Navbar from './navbar';
import Hero from './hero';
import Mission from './mission'
import Feature from './features'
import Testemonials from './testemonials'
import Pricing from './pricing'
import Contact from './contact'
import Footer from './footer'

function index() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {/*<Mission />*/}
      <Feature />
      <Testemonials />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default index;