import React from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import About2 from "./components/About2";
import Projects from "./components/Projects";
import URA from "./components/URA";
import CIBC from "./components/CIBC";
import BioTron from "./components/BioTron";
import IGEM from "./components/iGEM";
import { Route } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <About2 />
      {/* <About /> */}
      <Projects></Projects>
      <BioTron></BioTron>
      <IGEM></IGEM>
    </div>
  );
};

export default Home;
