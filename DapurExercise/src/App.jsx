/* eslint-disable no-unused-vars */
import React from "react";
import Footer from "./Components/Footer";
import RecipeBrowse from "./Components/RecipeBrowse";
import CategoryCard from "./Components/CategoryCard";
import About from "./Components/About";
import CategoryRecipeList from "./Components/CategoryRecipeList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<RecipeBrowse />} />
          <Route path="/browse" element={<RecipeBrowse />} />
          <Route path="/about" element={<About />} />
          <Route path="/category/:category" element={<CategoryRecipeList />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
