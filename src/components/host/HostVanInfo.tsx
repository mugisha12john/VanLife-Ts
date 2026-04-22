import { useOutletContext } from "react-router-dom";
import type { Van } from "../../../server";
export default function HostVanInfo() {
  const van = useOutletContext<Van[]>();
  console.log(van);
  return (
    <div className="flex items-start flex-col mt-5">
      <h4>
        <b>Name: </b>
        {van[0].name}
      </h4>
      <h4>
        <b>Category:</b> {van[0].type}
      </h4>
      <h4 className="max-w-80 ">
        <b>Description: </b>Description: {van[0].description}
      </h4>
      <h4>
        <b>Visibility:</b> Public
      </h4>
    </div>
  );
}
