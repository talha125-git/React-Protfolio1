import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Companies from './components/companies';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className='bg-[#0e0c1e]'>
      <Navbar />
      <Hero />
      <About />
      <Experience /> {/* */}
      <Services />
      <Work />
      {/* <Companies />   */}
      <Contact />
      <Footer />    {/* */}
      
    </div>
  )
}

export default App
