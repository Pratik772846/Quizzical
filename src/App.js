import React from "react";
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/homepage/homepage.jsx';
import Questions from "./components/questions/questions.jsx";
import Final from "./components/final/final.jsx";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/questions" element={<Questions/>} />
      <Route path="/final" element={<Final/>} />
    </Routes>
    </>
  );
}

export default App;
