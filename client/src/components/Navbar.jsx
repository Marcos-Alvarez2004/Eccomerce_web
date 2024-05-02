// REACT
import React from "react";
// DEPENDENCIAS
import { Link } from "react-router-dom";
import { PiBag } from "react-icons/pi";
import { useSelector, useDispatch } from "react-redux";
// ARCHIVOS
import { setLogout } from "../redux/state";
const Navbar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <header className="fixed w-full flex justify-between items-center p-8 bg-black/80 border-b border-white">
      {/* LOGO */}
      <div>
        <h1 className="text-4xl">Logo</h1>
      </div>
      {/* MENU */}
      <nav className="flex gap-x-8 menu">
        <Link className="link">
          <span className="text-xl font-normal">Home</span>
        </Link>
        <Link className="link">
          <span className="text-xl font-normal">Acerca de</span>
        </Link>
        <Link className="link">
          <span className="text-xl font-normal">Productos</span>
        </Link>
        <Link className="link">
          <span className="text-xl font-normal">Contacto</span>
        </Link>
      </nav>

      {/* USER */}
      <section className="flex gap-x-4">
        <div className="text-4xl">
          <PiBag />
        </div>
        <div>
          Hola usuario <b className="text-red-500">{user.name}</b> !
        </div>
        <div>
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
    </header>
  );
};

export default Navbar;
