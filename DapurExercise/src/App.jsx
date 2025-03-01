/* eslint-disable no-unused-vars */
import React from "react";
import Footer from "./Components/Footer";
import RecipeBrowse from "./Components/RecipeBrowse";
import CategoryCard from "./Components/CategoryCard";
import About from "./Components/About";
import { BrowserRouter, Route, Routes } from "react-router"

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<RecipeBrowse />} />
          <Route path="/browse" element={<RecipeBrowse />} />
          <Route path="/about" element={<About />} /> 
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
