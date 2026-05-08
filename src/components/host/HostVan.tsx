import { useLoaderData } from "react-router-dom";
import type { VansData } from "../../../server";
import HostVansList from "./HostVansList";

export default function HostVan() {
  const van: VansData = useLoaderData();

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto px-4">
      <h1 className="font-bold text-3xl md:text-4xl text-left self-start mt-6 mb-4">Your listed vans:</h1>
      <HostVansList vans={van.vans} />
    </div>
  );
}
