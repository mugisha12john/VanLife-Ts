import Header from "./components/Header";
import Vans from "./components/Vans";
import "../server"; // make sure this runs before <App />
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Task1 from "./components/Task1";

import Home from "./components/Home";
import About from "./components/About";
import VanDetail from "./components/VanDetail";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/vans" element={<Vans />}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/vans/:id" element={<VanDetail/>}></Route>

        </Routes>
      </BrowserRouter>

      {/* <Task1/> */}
    </>
  );
}

export default App;
