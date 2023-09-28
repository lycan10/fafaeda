import React from 'react';

import HomeCauses from '../../components/causes/HomeCauses';
import CTA from '../../components/cta/CTA'
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import HomeAbout from '../../components/homeAbout.jsx/HomeAbout';
import HomeGallery from '../../components/homegallery/HomeGallery';
import JoinUs from '../../components/joinUs/JoinUs';
import Navbar from '../../components/navbar/Navbar';
import Testimonial from '../../components/testimonial/Testimonial';

function Home() {
  return (
    <div className="App">
      <Navbar />
     <Header />
     <HomeAbout />
     <HomeCauses />
     <JoinUs />
     <HomeGallery />
     <Testimonial />
     <CTA />
     <Footer />
    </div>
  );
}

export default Home;
