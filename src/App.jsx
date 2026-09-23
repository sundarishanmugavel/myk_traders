import React from 'react';
import Navbar from './components/Navbar';
import MagazineHero from './components/hero/MagazineHero';
import About from './components/About';
import Categories from './components/Categories';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 font-sans selection:bg-blue-600 selection:text-white">

      <Navbar />
      <main>
        <MagazineHero />
        <About />
        <Categories />
        <Services />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
