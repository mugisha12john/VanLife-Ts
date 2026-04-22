import { useNavigate } from "react-router-dom";

export default function Home() {
  const arr = [
    { id: 1, title: "welcome" },
    { id: 2, title: "user info" },
  ];
  const navigate = useNavigate();
  return (
    <div className="m-4">
      {arr.map((item) => {
        return (
          <div key={item.id} className="flex gap-10">
            <p>{item.title}</p>
            <button
              onClick={() =>
                navigate(`/post/${item.id}`, { state: { ...item } })
              }
              className="bg-blue-400 "
            >
              Read more
            </button>
            <br />
          </div>
        );
      })}
    </div>
  );
}
