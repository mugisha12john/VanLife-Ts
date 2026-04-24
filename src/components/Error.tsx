import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.log(error)
  return (
    <div>
      <h1 className="text-6xl text-red-400">Error occured  </h1>
    </div>
  );
}
