import HostVansList from "./HostVansList";
import { useLoaderData } from "react-router-dom";
import type { VansData } from "../../../server";

export default function Dashboard() {
  const van: VansData = useLoaderData();

  return (
    <div>
      <div className="bg-[#FFEAD0]  w-137">
        <h1 className="text-4xl font-bold m-4">Welcome!</h1>
        <div className="text-lg m-4 flex justify-between">
          <p>
            Income last{" "}
            <u>
              <b>30 days</b>
            </u>
          </p>
          <p>Detail</p>
        </div>
        <h2 className="text-5xl font-black m-4">$ 2,230</h2>
        <div className="bg-[#FFDDB2] flex justify-around items-center">
          <h1 className="font-bold text-2xl mr-auto p-4">Review Score</h1>
          <div className="font-bold text-xl mx-auto">⭐ 5.0/5</div>
          <p className="font-medium text-lg ml-auto p-4">Detail</p>
        </div>
      </div>

      <div className="w-137 mt-10">
        <div className="flex justify-between">
          <h1 className="font-bold text-2xl">Your listed vans</h1>
          <button className="text-lg">view all</button>
        </div>
        <HostVansList vans={van.vans.slice(0, 3)} />
      </div>
    </div>
  );
}
