import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Vans } from "../../server";
export default function VanDetail() {
  const params = useParams();
  const [van, setVans] = useState<Vans>();
  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVans(data));
  }, [params.id]);

  return (
    <div className="van-detail-container flex justify-center items-center flex-col ml-[30%] mt-10">
      {van ? (
        <div className="van-detail flex  items-start flex-col">
          <img src={van.vans.imageUrl} className="w-1/2 rounded-xl" />
          <i className="bg-[#E17654] p-2 w-25 rounded-xl font-medium text-white mt-5">
            {van.vans.type}
          </i>
          <h2 className="text-3xl font-bold">{van.vans.name}</h2>
          <p className="  w-96 mt-2">
            <span className=" font-semibold text-xl">${van.vans.price}</span>
            /day
          </p>
          <p className=" font-400 text-lg w-125">{van.vans.description}</p>
          <button className="bg-[#FF8C38] text-white font-bold text-lg w-125 mt-4 p-2 text-center rounded-2xl">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
