import { useLoaderData } from "react-router-dom";

export default function VanDetail() {

  const van = useLoaderData();

  return (
    <div className="van-detail-container flex justify-center items-center flex-col mx-auto px-6 py-10 max-w-3xl">
      {van ? (
        <div className="van-detail flex flex-col items-start w-full">
          <img src={van.vans.imageUrl} className="w-full md:w-3/4 max-w-xl rounded-xl object-cover self-center" />
          <i className="bg-[#E17654] p-2 w-25 rounded-xl font-medium text-white mt-5">
            {van.vans.type}
          </i>
          <h2 className="text-3xl font-bold">{van.vans.name}</h2>
          <p className="w-full mt-2 text-xl">
            <span className=" font-semibold text-xl">${van.vans.price}</span>
            /day
          </p>
          <p className="font-normal text-md md:text-lg w-full max-w-2xl mt-4 leading-relaxed">{van.vans.description}</p>
          <button className="bg-[#FF8C38] text-white font-bold text-lg w-full mt-8 p-4 text-center rounded-xl shadow-md transition-all hover:bg-orange-500">
            Rent this van
          </button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
