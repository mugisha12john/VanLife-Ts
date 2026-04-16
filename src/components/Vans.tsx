import React from "react";
import type { Van } from "../server";
export default function Vans() {
  const [vans, setVans] = React.useState<Van[]>([]);

  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  return (
    <div>
      <h1>Vans</h1>
      <ul>
        {vans.map((van) => (
          <li key={van.id}>
            <img src={van.imageUrl} alt={van.name} width={100} />
            <p>
              {van.name} – ${van.price}/day
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
