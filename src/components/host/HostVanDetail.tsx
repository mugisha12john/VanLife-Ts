import type { VansData } from "../../../server";
import { Link, Outlet, NavLink, useLoaderData } from "react-router-dom";
export default function HostVanDetail() {
  const van:VansData = useLoaderData();

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <div className="flex flex-col items-start sm:items-center w-full max-w-4xl mx-auto px-4 mt-6 overflow-hidden">
      <Link to=".." relative="path" className="font-medium  underline">
        ← Back to all vans
      </Link>

      <div>
        {van.vans.map((item) => {
          return (
            <div key={item.id} className="flex flex-col sm:flex-row gap-6 sm:gap-10 mt-6 sm:items-center">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full max-w-sm sm:w-40 rounded-xl object-cover shrink-0"
              />
              <div>
                <button
                  className={
                    item.type === "simple"
                      ? "bg-[#E17654] p-2 w-20 rounded-xl font-medium text-white mt-5"
                      : item.type === "rugged"
                        ? "bg-[#115E59] p-2 w-20 rounded-xl font-medium text-white mt-5"
                        : "bg-black p-2 w-20 rounded-xl font-medium text-white mt-5"
                  }
                >
                  {item.type}
                </button>
                <p className="font-bold">{item.name}</p>
                <p>${item.price}/day</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex gap-5 mt-5">
        <NavLink
          to="."
          relative="path"
          end
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          Detail
        </NavLink>
        <NavLink
          to="pricing"
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          Pricing
        </NavLink>
        <NavLink
          to="photo"
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          Photo
        </NavLink>
      </div>
      <Outlet context={van.vans} />
    </div>
  );
}
