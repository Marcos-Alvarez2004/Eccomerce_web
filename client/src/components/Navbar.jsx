// REACT
import React, { useState } from "react";
// DEPENDENCIAS
import { Link } from "react-router-dom";
import { PiBag } from "react-icons/pi";
import { CiUser, CiMenuKebab } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
// ARCHIVOS
import { setLogout } from "../redux/state";
const Navbar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [dropMenu, setDropMenu] = useState(false);

  return (
    <header className="flex justify-between items-center p-8 bg-black/80 border-b border-white">
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
        {/* CARRO */}
        <div className="text-4xl cursor-pointer">
          <PiBag />
        </div>
        {/* MENU */}
        <div className="flex justify-center items-center gap-4 text-3xl">
          <CiMenuKebab
            className="cursor-pointer"
            onClick={() => setDropMenu(!dropMenu)}
          />
          {!user ? (
            <CiUser className="text-red-500 bg-black" />
          ) : (
            <CiUser className="text-green-500 bg-black" />
          )}
        </div>

        {dropMenu && !user && (
          <div className="flex flex-col gap-4 absolute top-28 bg-black border border-white p-4 rounded-xl menu">
            <Link className="link" to={"/login"}>
              {" "}
              <span className="text-xl font-normal">Ingresar</span>
            </Link>
            <Link className="link" to={"/register"}>
              {" "}
              <span className="text-xl font-normal">Registrarse</span>
            </Link>
          </div>
        )}

        {dropMenu && user && (
          <div className="flex flex-col gap-4 absolute top-28 bg-black border border-white p-4 rounded-xl menu">
            <h4 className="font-semibold text-md">
              Usario: <b className="text-fuchsia-500">{user.name}</b>
            </h4>
            <Link className="link">
              <span className="text-md font-normal">Favoritos</span>
            </Link>
            <Link className="link">
              <span className="text-md font-normal">Vender producto</span>
            </Link>
            <Link
              to={"/login"}
              onClick={() => {
                dispatch(setLogout());
              }}
            >
              <button className="bg-indigo-600 p-2 rounded">
                Cerrar Sesion
              </button>
            </Link>
          </div>
        )}
      </section>
    </header>
  );
};

export default Navbar;
