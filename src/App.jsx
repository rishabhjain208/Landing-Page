import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
// import Freatures from "./Components/Freatures";
import Advatnages from "./Components/Advatnages";
import Fully from "./Components/Fully";
import Testimonial from "./Components/Testimonial";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";
import Ready from "./Components/Ready";
import Features from "./Components/Features";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <Features />
        <Advatnages />
        <Fully />
        <Testimonial />
        <Faq />
        <Ready />
        <Footer />
      </div>
    </>
  );
}

export default App;
