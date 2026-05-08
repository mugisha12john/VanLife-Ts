import { useLoaderData } from "react-router-dom";
import type { VansData } from "../../../server";
import HostVansList from "./HostVansList";

export default function HostVan() {
  const van: VansData = useLoaderData();

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-4xl">Your listed vans:</h1>
      <HostVansList vans={van.vans} />
    </div>
  );
}
