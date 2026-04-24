import Vans, { loaderAllVans } from "./components/Vans";
import "../server"; // make sure this runs before <App />
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import VanDetail from "./components/VanDetail";
import Dashboard from "./components/host/Dashboard";
import Income from "./components/host/Income";
import Review from "./components/host/Review";
import HostLayout from "./components/host/HostLayout";
import HostVan from "./components/host/HostVan";
import HostVanDetail from "./components/host/HostVanDetail";
import HostVanInfo from "./components/host/HostVanInfo";
import HostVanPhoto from "./components/host/HostVanPhoto";
import HostVanPricing from "./components/host/HostVanPricing";
import Layout from "./components/Layout";
import Error from "./components/Error";
import { vanDetailLoader } from "./components/api/handleApi";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path="vans" element={<Vans />} loader={loaderAllVans} />
        <Route path="about" element={<About />} />
        <Route
          path="vans/:id"
          element={<VanDetail />}
          loader={vanDetailLoader}
        />

        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="review" element={<Review />} />
          <Route path="van" element={<HostVan />} />
          <Route path="van/:id" element={<HostVanDetail />}>
            <Route index element={<HostVanInfo />} />
            <Route path="photo" element={<HostVanPhoto />} />
            <Route path="pricing" element={<HostVanPricing />} />
          </Route>
        </Route>
      </Route>,
    ),
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
