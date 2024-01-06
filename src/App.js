import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Sponsors from "./Pages/Sponsors";
import Speakers from "./Pages/Speakers";
import Contact from "./Pages/Contact";


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />}  />
        <Route path="/program" element={<Home />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/contact" element={<Contact />} />  
      </Routes>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
