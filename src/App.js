import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserDetails from './pages/UserDetails';
function App() {
  return (
    <div className="App">
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/userdetails/:username" element={<UserDetails />} />
      </Routes>
      </div>
  );
}

export default App;
