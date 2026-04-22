import { useEffect, useState } from "react";
import type { Van } from "../../../server";
import { Link } from "react-router-dom";
export default function HostVanDetail() {
  const [van, setVan] = useState<Van[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
    setLoading(false);
  }, []);
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-4xl">Your listed vans:</h1>
      {loading ? (
        <h2 className="font-semibold text-2xl">Loading... </h2>
      ) : (
        <div>
          {van.map((item) => {
            return (
              <Link to={`${item.id}`} className="flex gap-10 mt-3">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-25 rounded-xl"
                />
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p>${item.price}/day</p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
