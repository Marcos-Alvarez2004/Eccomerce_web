// REACT
import React, { useState } from "react";
// DEPENDENCIAS
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// ARCHIVOS
import { setLogout } from "../redux/state";
import Search from "./Search";
import CartIcon from "./CartIcon";
const Navbar = ({ totalItems }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [dropMenu, setDropMenu] = useState(false);

  return (
    <header className="flex justify-between items-center p-8 bg-black/80 border-b border-white">
      {/* LOGO */}
      <div>
        <Link to={"/"}>
          <h1 className="text-4xl">Logo</h1>
        </Link>
      </div>
      {/* MENU */}
      <nav className="flex gap-x-8 menu">
        <Link to={"/main"} className="link">
          <span className="text-xl font-normal">Home</span>
        </Link>
        <Link to={"/about"} className="link">
          <span className="text-xl font-normal">Acerca de</span>
        </Link>
        <Link to={"/products"} className="link">
          <span className="text-xl font-normal">Productos</span>
        </Link>
        <Link to={"/contact"} className="link">
          <span className="text-xl font-normal">Contacto</span>
        </Link>
      </nav>

      {/* USER */}
      <section className="flex items-center gap-x-4">
        {/* SEARCH */}
        {/* <div>
          <Search />
        </div> */}
        {/* CARRO */}
        <div className="text-4xl cursor-pointer">
          <Link to={"/cart"}>
            <CartIcon totalItems={totalItems} />
          </Link>
        </div>
        {/* MENU */}
        <div className="flex justify-center items-center gap-4 text-3xl">
          <div className="cursor-pointer bg-indigo-600 p-1 rounded">
            <i
              onClick={() => setDropMenu(!dropMenu)}
              className="bx bx-user"
            ></i>
          </div>
        </div>

        <div
          className={`${
            !dropMenu && "hidden"
          } h-screen w-full fixed top-0 left-0 right-0 z-10`}
          onClick={() => setDropMenu(false)}
        ></div>
        <div
          className={`${
            dropMenu ? "w-60" : "w-0"
          } bg-gray-800 h-full absolute top-0 transition-all -right-0 duration-300 overflow-hidden menu z-10`}
        >
          <div
            className={`${
              !dropMenu && "hidden"
            } flex flex-col items-center gap-y-4 p-4`}
          >
            <i
              className="bx bx-x ml-auto text-white mb-14 cursor-pointer text-3xl"
              onClick={() => setDropMenu(false)}
            ></i>

            <h4 className="font-semibold text-md">
              <b className="text-fuchsia-500">{user.name}</b>
            </h4>

            <Link to={"/create-product"} className="link w-[150px] mb-4">
              <span className="text-md font-semibold">Crear producto</span>
            </Link>
            <Link to={"/my-products"} className="link w-[150px] mb-4">
              <span className="text-md font-semibold mb-4">
                Mis publicaciones
              </span>
            </Link>
            <Link to={"/favorites"} className="link w-[150px] mb-4">
              <span className="text-md font-semibold">Favoritos</span>
            </Link>

            <Link
              className="absolute bottom-0 mb-4"
              to={"/"}
              onClick={() => {
                dispatch(setLogout());
              }}
            >
              <button className="bg-red-600 p-2 rounded hover:bg-red-700">
                Cerrar Sesion
              </button>
            </Link>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
