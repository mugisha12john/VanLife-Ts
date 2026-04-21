import Header from "./components/Header";
import Vans from "./components/Vans";
import "../server"; // make sure this runs before <App />
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Task1 from "./components/Task1";

import Home from "./components/Home";
import About from "./components/About";
import VanDetail from "./components/VanDetail";
import Dashboard   from "./components/host/Dashboard";
import Income from "./components/host/Income";
import Review from "./components/host/Review";
import HostLayout from "./components/host/HostLayout";
import HostVan from "./components/host/HostVan";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/vans" element={<Vans />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/vans/:id" element={<VanDetail />}></Route>
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />}></Route>
            <Route path="income" element={<Income />}></Route>
            <Route path="review" element={<Review />}></Route>
            <Route path="van" element={<HostVan/>}></Route>
            <Route path="van/:id" element={<HostVan/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <Task1/> */}
    </>
  );
}

export default App;
