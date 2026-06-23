import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Cursor from './components/Cursor';
import Spotlight from './components/Spotlight';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collection from './components/Collection';
import Story from './components/Story';
import FragranceNotes from './components/FragranceNotes';

import Craftsmanship from './components/Craftsmanship';
import VideoSection from './components/VideoSection';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import MuteButton from './components/MuteButton';
import ScrollProgress from './components/ScrollProgress';
import AmbientParticles from './components/AmbientParticles';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Global intersection observer for .fade-up elements
    const globalObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Observe all fade elements after a short delay
    const timer = setTimeout(() => {
      document.querySelectorAll('.fade-up, .fade-in').forEach(el => {
        globalObserver.observe(el);
      });
    }, 2000);

    return () => {
      clearTimeout(timer);
      globalObserver.disconnect();
    };
  }, [loaded]);

  // Smooth scrolling with native browser API
  useEffect(() => {
    if (loaded) {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
  }, [loaded]);

  return (
    <>
      {/* Global grain overlay */}
      <div className="grain-overlay" />

      {/* Scroll progress */}
      <ScrollProgress />

      {/* Ambient particles */}
      <AmbientParticles />

      {/* Custom Cursor */}
      <Cursor />

      {/* Spotlight */}
      <Spotlight />

      {/* Loader */}
      <Loader onComplete={() => setLoaded(true)} />

      {/* Main site */}
      <div style={{
        opacity: loaded ? 1 : 0,
        transition: 'opacity 0.5s ease',
      }}>
        <Navbar />

        <main>
          <Hero />
          <Collection />
          <Story />
          <FragranceNotes />
          <Craftsmanship />
          <VideoSection />
          <Testimonials />
          <Gallery />
          <Newsletter />
        </main>

        <Footer />

        <MuteButton />
      </div>
    </>
  );
}
