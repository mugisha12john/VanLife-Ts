import { Link } from "react-router-dom";
import type { VansData } from "../../../server";

export default function HostVansList({ vans }: { vans: VansData["vans"] }) {
  return (
    <div className="w-full">
      {vans.map((item) => {
        return (
          <Link
            key={item.id}
            to={`/host/van/${item.id}`}
            className="flex gap-10 mt-3 bg-white p-4 rounded-xl items-center"
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-25 rounded-xl"
            />
            <div>
              <p className="font-bold">{item.name}</p>
              <p className="text-gray-600">${item.price}/day</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
