import { Link } from "react-router-dom";
import bg from "../assets/home.png";

export default function Home() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="w-[90%] max-w-5xl mx-auto min-h-[85vh] h-full bg-cover bg-center flex flex-col items-center justify-center rounded-xl p-6 my-10"
      >
        <h1 className="max-w-2xl text-center text-white font-bold text-3xl md:text-5xl">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="font-light text-lg md:text-xl text-center text-white mt-10 px-4 w-full">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link
          to="/vans"
          className="bg-[#FF8C38] text-white font-bold text-lg w-[90%] max-w-md mt-10 py-3 px-6 text-center rounded-lg shadow-md transition-all hover:bg-orange-500"
        >
          Find your van
        </Link>
      </div>
    </>
  );
}
