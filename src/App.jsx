import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';;
import Packages from './pages/Packages';
import Contact from './pages/Contact';
import Anakulam from './pages/Anakulam';
import Vattavada from './pages/Vattavada';
import Ponmudi from './pages/Ponmudi';
import Marayoor from './pages/Marayoor';
import Home from './pages/Home';
import Kattadipara from './pages/Kattadipara';
import Offroad from './pages/Offroad';
import Footer from './Components/Footter';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Rooms from './pages/Rooms';



function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-out-cubic",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router> {/* Ensure the app is wrapped in BrowserRouter */}
      <div>
        <Header /> {/* Your header component */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/packages" element={<Packages/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/anakulam" element={<Anakulam/>} />
          <Route path="/vattavada" element={<Vattavada/>} />
          <Route path="/ponmudi" element={<Ponmudi/>} />
          <Route path="/marayoor" element={<Marayoor/>} />
          <Route path="/kattadipara" element={<Kattadipara/>} />
          <Route path="/offroad" element={<Offroad/>} />
          <Route path="/rooms" element={<Rooms/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
