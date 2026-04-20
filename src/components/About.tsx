import img from "../assets/image 54.png";

export default function About() {
  return (
    <div className="flex justify-center mt-10 flex-col items-center">
      <img src={img} alt="" className="w-125" />
      <div className="">
        <h1 className="text-3xl font-bold mt-10 w-125.5">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p className="w-125.5  p-2 mt-10 text-xl">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉) <br />
          <br />
          <br /> Our team is full of vanlife enthusiasts who know firsthand the
          magic of touring the world on 4 wheels.
        </p>
      </div>
      <div className="bg-[#FFCC8D] w-125 p-2 mt-10">
        <p className="font-bold text-2xl max-w-80  m-10 ">
          Your destination is waiting. Your van is ready.
        </p>
        <button className="bg-black text-white p-2 rounded-xl font-semibold m-10 mt-0 mb-4">
          Explore our vans
        </button>
      </div>
      <div className="mt-5 bg-[#252525] w-125 flex justify-center p-2 mb-5">
        <p className="text-[#AAAAAA]">Ⓒ 2022 #VANLIFE</p>
      </div>
    </div>
  );
}
