import React from "react";
import type { Van } from "../server";
import { Link } from "react-router-dom";
export default function Vans() {
  const [vans, setVans] = React.useState<Van[]>([]);

  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);
  const vanElements = vans.map((van) => (
    <div key={van.id} className="van-tile ">
      <Link
        to={`/vans/${van.id}`}
        aria-label={`View details for ${van.name}, 
                             priced at $${van.price} per day`}
      >
        <img
          src={van.imageUrl}
          className="max-w-2/3 rounded-xl"
          alt={`Image of ${van.name}`}
        />
        <div className="flex font-semibold text-xl justify-between w-96 mt-2">
          <p>{van.name}</p>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>

        <button
          className={
            van.type === "simple"
              ? "bg-[#E17654] p-2 w-25 rounded-xl font-medium text-white mt-5"
              : van.type === "rugged"
                ? "bg-[#115E59] p-2 w-25 rounded-xl font-medium text-white mt-5"
                : "bg-black p-2 w-25 rounded-xl font-medium text-white mt-5"
          }
        >
          {van.type}
        </button>
      </Link>
    </div>
  ));
  return (
    <div className="van-list-container  p-20">
      <h1>Explore our van options</h1>
      <div className="van-list grid grid-cols-2  gap-30 justify-items-center  mt-20">
        {vanElements}
      </div>
    </div>
  );
}
