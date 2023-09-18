import Home from "./Home";
import CIBC from "./components/CIBC";
import URA from "./components/URA";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CIBC" element={<CIBC />} />
        <Route path="/URA" element={<URA />}></Route>
      </Routes>
    </>
  );
}

export default App;
