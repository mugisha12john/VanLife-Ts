import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function UserProfile() {
  const userId = 2;
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [count, setCount] = useState(0);

  const fetchUser = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
    );

    const data = await res.json();
    setUser(data);
  };

  useEffect(() => {
    fetchUser();
  }, [userId]);

  const handleDoubleClick = () => {
    setCount(prev => prev+2);
  };
  const goToNext = () => {
    navigate(`/user/${userId + 1}`);
  };

  console.log(user);
  return (
    <div>
      <h1>{user?.name}</h1>
      <p>Clicked: {count} times</p>
      <button onDoubleClick={handleDoubleClick}>+2</button>
      <button onClick={goToNext}>Next User</button>
    </div>
  );
}
