import { useLocation, useNavigate } from "react-router-dom";

export default function PostDetail() {
  const data = useLocation();
  const navigate = useNavigate();
  console.log(data.state);
  return (
    <div>
      <button className="bg-red-400 p-2" onClick={() => navigate(-1)}>
        back to home
      </button>
      <h1 className="text-bold text-2xl">
        <b>Your title:</b> {data.state.title}
      </h1>
    </div>
  );
}
