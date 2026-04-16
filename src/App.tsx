import Header from "./components/Header";
import Vans from "./components/Vans";
import "../server"; // make sure this runs before <App />
function App() {
  return (
    <>
      <Header />
      <Vans/>
    </>
  );
}

export default App;
