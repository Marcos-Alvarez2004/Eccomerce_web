// REACT
import React from "react";
// DEPENDENCIAS
import { useSelector, useDispatch } from "react-redux";
// ARCHIVOS
import { setLogout } from "../redux/state";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <section
      className={`h-screen bg-cover bg-center bg-no-repeat bg-[url("/fondoHome.jpg")]`}
    >
      <Navbar />
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="flex gap-2">
          Hola <p className="text-red-500">{user.name}</p>!
        </h1>
        <Link
          className="bg-indigo-500 p-2 rounded-md"
          to={"/login"}
          onClick={() => {
            dispatch(setLogout());
          }}
        >
          Log Out
        </Link>
      </div>
    </section>
  );
};

export default Home;
