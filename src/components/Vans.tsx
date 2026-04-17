import React from "react";
import type { Van } from "../server";
export default function Vans() {
  const [vans, setVans] = React.useState<Van[]>([]);

  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);
  const vanElements = vans.map((van) => (
    <div key={van.id} className="van-tile ">
      <img src={van.imageUrl} className="max-w-2/3 rounded-xl" />
      <div className="van-info">
        <h3>{van.name}</h3>
        <p>
          ${van.price}
          <span>/day</span>
        </p>
      </div>
      <i className={`van-type ${van.type} selected`}>{van.type}</i>
    </div>
  ));
  return (
    <div className="van-list-container  p-20">
      <h1>Explore our van options</h1>
      <div className="van-list grid grid-cols-2  gap-30 justify-items-center  mt-20">{vanElements}</div>
    </div>
  );
}
