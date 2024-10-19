import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';

// import Kattadipara from './Pages/Kattadipara';
// import Pettimudi from './Pages/Pettimudi';
import Packages from './pages/Packages';
import Contact from './pages/Contact';
import Anakulam from './pages/Anakulam';
import Vattavada from './pages/Vattavada';
import Ponmudi from './pages/Ponmudi';
import Marayoor from './pages/Marayoor';
import Rooms from './pages/Rooms';
import Home from './pages/Home';


function App() {
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
          {/* <Route path="/kattadipara" element={<Kattadipara />} />
          <Route path="/pettimudi" element={<Pettimudi />} /> */}
          <Route path="/rooms" element={<Rooms/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
