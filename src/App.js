import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Abhome from './components/Abhome/Abhome';
import Cards from './components/card/Cards';
import List from './components/List/List';
import Footer from './components/footer/Footer';
import AboutMe from './components/aboutme/aboutme';
import Works from './routes/Works';
import ContactPage from './routes/ContactPage';

function MainContent() {
  return (
    <>
      <Navbar />
      <AboutMe />
      <Abhome />
      <List />
      <Cards />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainContent />} />
      <Route path="/SITE" element={<MainContent />} />
      <Route path="/AboutMe" element={<AboutMe />} />
      <Route path="/Works" element={<Works />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;