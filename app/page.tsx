'use client';

import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Marquee from './sections/Marquee';
import About from './sections/About';
import Services from './sections/Services';
import Work from './sections/Work';
import Stats from './sections/Stats';
import Certifications from './sections/Certifications';
import WhyMe from './sections/WhyMe';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function Home() {
  return (
    <>
      <Loader />
      <CustomCursor />
      <SmoothScroll />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Work />
        <Stats />
        <Certifications />
        <WhyMe />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
