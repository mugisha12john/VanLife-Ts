import { useOutletContext } from "react-router-dom";
import type { Van } from "../../../server";
export default function HostVanPhoto() {
  const van = useOutletContext<Van[]>();
  if (!van || van.length === 0) {
    return <p>Loading van info...</p>;
  }
  return (
    <div>
      <img
        src={van[0].imageUrl || ""}
        alt={van[0].name}
        className="w-full max-w-[200px] mt-4 rounded-2xl object-cover"
      />
    </div>
  );
}
