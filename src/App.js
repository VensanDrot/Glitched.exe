import "./App.css";
import { useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";

function App() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<MainPage width={windowSize.current[0]} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
