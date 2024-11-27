import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Layout from './Components/Layout/layout';
import Home from './Components/Layout/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Skill from './Components/Skill';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="skills" element={<Skill />} />  
      </Route>
    </Routes>
  );
}

export default App;
