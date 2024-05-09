import Home from "./Home";
import Projects from "./components/Projects";
import Tearney from "./components/Tearney";
import CIBC from "./components/CIBC";
import URA from "./components/URA";
import BioTron from "./components/BioTron";
import { Routes, Route } from "react-router-dom";
import Explorations from "./components/Projects";
import IGEM from "./components/iGEM";
import Clinostat from "./components/Clinostat";
import Spaceflight from "./components/Spaceflight";
import Puzzle from "./components/Puzzle";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Explorations" element={<Projects />} />
        <Route path="/Tearney" element={<Tearney />} />
        <Route path="/CIBC" element={<CIBC />} />
        <Route path="/URA" element={<URA />}></Route>
        <Route path="/BioTron" element={<BioTron />}></Route>
        <Route path="/Explorations" element={<Explorations />}></Route>
        <Route path="/IGEM" element={<IGEM />}></Route>
        <Route path="/Clinostat" element={<Clinostat />}></Route>
        <Route path="/Spaceflight" element={<Spaceflight />}></Route>
        <Route path="/Puzzle" element={<Puzzle />}></Route>
      </Routes>
    </>
  );
}

export default App;
