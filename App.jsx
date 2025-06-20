import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CardSection from './components/CardsSection';
import Middle from './components/Middle';
import Footer from './components/Footer';

const App = () => {
  
  return (
    <div>
   <Navbar></Navbar>
    <HeroSection/>
     
     
     <CardSection></CardSection>
     <Middle></Middle>
      <Footer></Footer>
    </div>
  );
};

export default App;