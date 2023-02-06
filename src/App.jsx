import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from '../src/pages/Home'
import Drinks from '../src/pages/Drinks'
import SingleDrink from '../src/pages/SingleDrink'
import Contact from '../src/pages/Contact'
import Error from '../src/pages/Error'
import { useState } from 'react';


function App() {
 

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/drinks/:id" element={<SingleDrink />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
