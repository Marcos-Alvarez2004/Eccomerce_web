// REACT
import React from "react";
// DEPENDENCIAS
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.user);
  return (
    <div>
      <h1 className="flex justify-center items-center gap-2">
        Hola <p className="text-red-500">{user.name}</p>!
      </h1>
      <button></button>
    </div>
  );
};

export default Home;
