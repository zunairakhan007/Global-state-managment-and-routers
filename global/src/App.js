//Set Up Routes
import React from "react";
import { Routes, Route,Router } from "react-router-dom";
import './App.css';
import SmileysPage from "./pages/SmileysPage";
import AnimalsPage from "./pages/AnimalsPage";
import FoodPage from "./pages/FoodPage";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
     
      
        <Routes>
       <Route path="/" element={<Home />} />
         <Route path="/Smileys" element={<SmileysPage />} />
      <Route path="/Animals" element={<AnimalsPage />} />
        <Route path="/Food" element={<FoodPage />} />   
        <Route path="*" element={<NotFound />} />
        </Routes>
    
    </div>
  );
};

export default App;
