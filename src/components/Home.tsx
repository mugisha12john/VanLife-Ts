import React from "react";
import { Link } from "react-router-dom";
import bg from "../assets/home.png";

export default function Home() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="max-w-[90vw] ml-20  h-[85vh] bg-cover bg-center   flex justify-center items-center flex-col mt-10"
      >
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link to="/vans">Find your van</Link>
      </div>
      <div className=" bg-[#252525] max-w-[90vw] ml-20 flex justify-center p-2 mb-5">
        <p className="text-[#AAAAAA]">Ⓒ 2022 #VANLIFE</p>
      </div>
    </>
  );
}
