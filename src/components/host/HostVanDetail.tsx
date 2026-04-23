import { useEffect, useState } from "react";
import type { Van } from "../../../server";
import { Link, Outlet, useParams, NavLink } from "react-router-dom";
export default function HostVanDetail() {
  const [van, setVan] = useState<Van[]>([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    async function fetchApi() {
      fetch(`/api/host/vans/${id}`)
        .then((res) => res.json())
        .then((data) => setVan(data.vans));
      setLoading(false);
    }
    fetchApi();
  }, [id]);
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <div className="flex flex-col items-center">
      <Link to=".." relative="path" className="font-medium  underline">
        ← Back to all vans
      </Link>
      {loading ? (
        <h2 className="font-semibold text-2xl">Loading... </h2>
      ) : (
        <div>
          {van.map((item) => {
            return (
              <div key={item.id} className="flex gap-10 mt-3">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-40 rounded-xl"
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
      )}
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
      <Outlet context={van} />
    </div>
  );
}
