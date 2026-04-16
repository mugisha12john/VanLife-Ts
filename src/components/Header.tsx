import { BrowserRouter, Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <BrowserRouter>
        <header className="flex justify-around mt-10">
          <h1 className="font-black text-2xl">#VANLIFE</h1>
          <div className="flex gap-10">
            <Link to="/about">About</Link>
            <Link to="/vans">Vans</Link>
          </div>
        </header>
      </BrowserRouter>
    </div>
  );
}
