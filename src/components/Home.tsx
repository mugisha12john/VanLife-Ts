import React from "react";
import { Link } from "react-router-dom";
import bg from "../assets/home.png";

export default function Home() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="max-w-[90vw] ml-20  h-[85vh] bg-cover bg-center flex flex-col items-center justify-center   mt-10"
      >
        <h1 className="max-w-125 text-white font-bold text-4xl">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="font-medium text-xl text-white mt-10 w-140">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link
          to="/vans"
          className="bg-[#FF8C38] text-white font-bold text-lg w-125 mt-4 p-2 text-center rounded-2xl"
        >
          Find your van
        </Link>
      </div>
      <div className=" bg-[#252525] max-w-[90vw] ml-20 flex justify-center p-2 mb-5">
        <p className="text-[#AAAAAA] ">Ⓒ 2022 #VANLIFE</p>
      </div>
    </>
  );
}
