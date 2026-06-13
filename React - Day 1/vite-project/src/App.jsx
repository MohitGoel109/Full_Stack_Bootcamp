import React from 'react'
import Home from './Home';
import NavBar from './NavBar';
import HeroSection from './HeroSection';
import Services from './Services';
import Footer from './Footer';

const App = () => {
  return (
    <div>
    <div>App</div>
      <h1>This is a heading tag</h1>
      <NavBar />
      <HeroSection />
      <Home />
      <Services />
      <Footer />
    </div>
  );
};

export default App