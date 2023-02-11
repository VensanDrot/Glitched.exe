import "./App.css";
import { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import Footer from "./components/Footer";
import SwiperRes from "./components/Swiper";

function App() {
  const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
        <SwiperRes width={windowSize[0]}></SwiperRes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
