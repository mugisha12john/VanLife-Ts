import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header className="flex justify-around mt-10">
        <Link
          to="/"
          className="font-black text-2xl hover:underline cursor-pointer"
        >
          #VANLIFE
        </Link>
        <div className="flex gap-10">
                  <Link
            to="/host"
            className="hover:underline cursor-pointer hover:text-black font-semibold text-gray-700"
          >
            Host
          </Link>
          <Link
            to="/about"
            className="hover:underline cursor-pointer hover:text-black font-semibold text-gray-700"
          >
            About
          </Link>
          <Link
            to="/vans"
            className="hover:underline cursor-pointer hover:text-black font-semibold text-gray-700"
          >
            Vans
          </Link>
        </div>
      </header>
    </div>
  );
}
