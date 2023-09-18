import Home from "./Home";
import CIBC from "./components/CIBC";
import URA from "./components/URA";
import BioTron from "./components/BioTron";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CIBC" element={<CIBC />} />
        <Route path="/URA" element={<URA />}></Route>
        <Route path="/BioTron" element={<BioTron />}></Route>
      </Routes>
    </>
  );
}

export default App;
