import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Phimbo from "./Pages/Phimbo";
import Phimle from "./Pages/Phimle";
import Phimhot from "./Pages/Phimhot";
import Phimmoi from "./Pages/Phimmoi";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phimbo" element={<Phimbo />} />
        <Route path="/phimhot" element={<Phimhot />} />
        <Route path="/phimle" element={<Phimle />} />
        <Route path="/phimmoi" element={<Phimmoi />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
