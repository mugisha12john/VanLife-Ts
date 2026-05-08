
import type { VansData } from "../../server";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";

export default function Vans() {

  const [search, setSearch] = useSearchParams();
  const filter = search.get("type");
  const data:VansData  = useLoaderData();
  const filtedVans = filter
    ? data.vans.filter((item) => item.type === filter)
    : data.vans;
  const vanElements = filtedVans.map((van) => (
    <div key={van.id}>
      <Link
        to={`/vans/${van.id}`}
        aria-label={`View details for ${van.name}, 
                             priced at $${van.price} per day`}
      >
        <img
          src={van.imageUrl}
          className="w-full max-w-[400px] rounded-xl aspect-square object-cover"
          alt={`Image of ${van.name}`}
        />
        <div className="flex font-semibold text-lg md:text-xl justify-between w-full max-w-[400px] mt-4 mb-2">
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
  function handleFilterChange(key: string, value: string | null) {
    setSearch((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }
  return (
    <div className="van-list-container px-6 py-10 md:p-20 max-w-7xl mx-auto">
      <h1 className="font-bold text-3xl">Explore our van options</h1>
      <div className="flex gap-5 mt-10">
        <button
          onClick={() => handleFilterChange("type", "simple")}
          className="bg-[#FFEAD0] text-[#4D4D4D] text-sm p-2 rounded-xl font-medium w-20 hover:cursor-pointer"
        >
          Simple
        </button>
        <button
          onClick={() => handleFilterChange("type", "luxury")}
          className="bg-[#FFEAD0] text-[#4D4D4D] text-sm p-2 rounded-xl font-medium w-20 hover:cursor-pointer"
        >
          Luxury
        </button>
        <button
          onClick={() => handleFilterChange("type", "rugged")}
          className="bg-[#FFEAD0] text-[#4D4D4D] text-sm p-2 rounded-xl font-medium w-20 hover:cursor-pointer"
        >
          Rugged
        </button>
        <button
          onClick={() => handleFilterChange("type", null)}
          className="underline text-sm text-[#4D4D4D] font-medium hover:cursor-pointer"
        >
          Clear filters
        </button>
      </div>
      <div className="van-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center mt-10 w-full">
        {vanElements}
      </div>
    </div>
  );
}
