import { NavLink, Outlet } from "react-router-dom";

export default function Dashboard() {
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
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Income
        </NavLink>
        <NavLink
          to="review"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Review
        </NavLink>
      </div>
      <h1>Dashboard goes here</h1>
      <Outlet />
    </div>
  );
}
