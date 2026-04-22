// import Header from "./components/Header";
// import Vans from "./components/Vans";
// import "../server"; // make sure this runs before <App />
// import { BrowserRouter, Route, Routes } from "react-router-dom";

import { BrowserRouter, Route, Routes } from "react-router-dom";
// import UserProfile from "./components/UserProfile";
import Home from "./components/Task4/Home";
import PostDetail from "./components/Task4/PostDetail";
import NotFound from "./components/Task4/NotFound";

// // import Task1 from "./components/Task1";

// import Home from "./components/Home";
// import About from "./components/About";
// import VanDetail from "./components/VanDetail";
// import Dashboard from "./components/host/Dashboard";
// import Income from "./components/host/Income";
// import Review from "./components/host/Review";
// import HostLayout from "./components/host/HostLayout";
// import HostVan from "./components/host/HostVan";
// import HostVanDetail from "./components/host/HostVanDetail";
// import HostVanInfo from "./components/host/HostVanInfo";
// import HostVanPhoto from "./components/host/HostVanPhoto";
// import HostVanPricing from "./components/host/HostVanPricing";
function App() {
  return (
    <>
      {/* <BrowserRouter>
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
            <Route path="van" element={<HostVan />}></Route>
            <Route path="van/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />}></Route>
              <Route path="photo" element={<HostVanPhoto />}></Route>
              <Route path="pricing" element={<HostVanPricing />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter> */}

      {/* <Task1/> */}
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/post/:id" element={<PostDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
