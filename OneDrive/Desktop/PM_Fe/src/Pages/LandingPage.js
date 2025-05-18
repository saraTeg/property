import { useEffect } from 'react';
import Navbar from '../Components/Landing/Navbar';
import Hero from '../Components/Landing/Hero';
import Features from '../Components/Landing/Features';
import HowItWorks from '../Components/Landing/HowItWorks';
import Testimonials from '../Components/Landing/Testimonials';
import Contact from '../Components/Landing/Contact';
import Footer from '../Components/Landing/Footer';

function LandingPage() {
  useEffect(() => {
    document.title = 'PropEase - Simplify Property Management';
  }, []);

  return (
    <div className="font-sans text-secondary-800">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default LandingPage;