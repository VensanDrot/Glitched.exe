import "./App.css";
import { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Redirect as redirect } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SwiperRes from "./components/Swiper";
//Pages
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFound";

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
          <Route path="/NotFound" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <SwiperRes width={windowSize[0]}></SwiperRes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
