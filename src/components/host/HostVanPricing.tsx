import { useOutletContext } from "react-router-dom";
import type { Van } from "../../../server";
export default function HostVanPricing() {
  const van = useOutletContext<Van[]>();
  return (
    <div className="mt-5 flex justify-center items-center">
      <h3 className="text-2xl font-semibold">${van[0].price}</h3>
      <p>/day</p>
    </div>
  );
}
