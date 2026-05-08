import img from "../assets/image 54.png";

export default function About() {
  return (
    <div className="flex justify-center mt-10 flex-col items-center">
      <img src={img} alt="" className="w-full max-w-xl object-cover" />
      <div className="">
        <h1 className="text-3xl font-bold mt-10 w-[90%] max-w-xl">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p className="w-[90%] max-w-xl p-2 mt-6 text-lg md:text-xl">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉) <br />
          <br />
          <br /> Our team is full of vanlife enthusiasts who know firsthand the
          magic of touring the world on 4 wheels.
        </p>
      </div>
      <div className="bg-[#FFCC8D] w-[90%] max-w-xl p-8 mt-10 mb-10 rounded-xl">
        <p className="font-bold text-2xl mb-6">
          Your destination is waiting. Your van is ready.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-xl font-semibold inline-block">
          Explore our vans
        </button>
      </div>
    </div>
  );
}
