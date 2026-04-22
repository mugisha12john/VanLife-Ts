import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <div>
      <div className="font-semibold px-6 flex gap-10 justify-center mt-10">
        <NavLink
          to="/host"
          end
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          Income
        </NavLink>
                <NavLink
          to="van"
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          Van
        </NavLink>
        <NavLink
          to="review"
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          Review
        </NavLink>
      </div>
      <h1 className="text-2xl">Nested routes here using outlet</h1>
      <Outlet />
    </div>
  );
}
