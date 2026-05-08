import { Link } from "react-router-dom";
import type { VansData } from "../../../server";

export default function HostVansList({ vans }: { vans: VansData["vans"] }) {
  return (
    <div className="w-full space-y-4">
      {vans.map((item) => {
        return (
          <Link
            key={item.id}
            to={`/host/van/${item.id}`}
            className="flex flex-col sm:flex-row gap-6 sm:gap-10 mt-4 bg-white p-4 sm:p-6 rounded-2xl items-center shadow-sm w-full"
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-[100px] h-[100px] object-cover rounded-xl shrink-0"
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
