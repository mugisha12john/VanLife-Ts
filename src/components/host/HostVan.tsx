import { Link, useLoaderData } from "react-router-dom";
import type {VansData } from "../../../server";
export default function HostVan() {
  const van:VansData = useLoaderData();

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-4xl">Your listed vans:</h1>

      <div>
        {van.vans.map((item) => {
          return (
            <Link key={item.id} to={`${item.id}`} className="flex gap-10 mt-3">
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
    </div>
  );
}
