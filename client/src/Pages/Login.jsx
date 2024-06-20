// REACT
import React, { useState } from "react";
// DEPENDECIAS
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// ARCHIVO
import fondo from "/fondo.jpg";
import { setLogin } from "../redux/state";

// http://localhost:4000/auth/login

const Login = () => {
  // useState
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // useDispatch
  const dispatch = useDispatch();
  // navigate
  const navigate = useNavigate();
  // HandleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // FETCH
      const res = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      // OBTENER DATA DESPUES DEL FETCH
      const loggedIn = await res.json();

      if (loggedIn) {
        dispatch(
          setLogin({
            user: loggedIn.user,
            token: loggedIn.token,
          })
        );
        navigate("/main");
      }
    } catch (err) {
      console.log("Error de ingreso", err.message);
    }
  };
  return (
    <div className="flex h-screen">
      {/* DERECHA */}
      <section className="w-[30vw] flex justify-center items-center flex-col gap-8">
        <h1 className="font-bold text-3xl text-indigo-500">INGRESO</h1>
        <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
          {/* EMAIL */}
          <label htmlFor="email" className="flex flex-col items-center gap-2">
            <h4 className="opacity-90 font-semibold">Email</h4>
            <input
              type="email"
              className="rounded border-2 border-zinc-400 p-2 bg-transparent"
              required
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Example@gmail.com"
            />
          </label>
          {/* CONTRASEÑA */}
          <label
            htmlFor="password"
            className="flex flex-col items-center gap-2"
          >
            <h4 className="opacity-90 font-semibold">Contraseña</h4>
            <input
              type="password"
              className="rounded border-2 border-zinc-400 p-2 bg-transparent"
              required
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength="4"
              maxLength="8"
              placeholder="Min 4 y Max 8 caracteres"
            />
          </label>
          <button
            type="submit"
            className="bg-indigo-700 p-2 rounded w-1/2 mx-auto"
          >
            Ingresar
          </button>
        </form>
        <h3 className="text-lg">
          Todavia no tenes cuenta?{" "}
          <Link
            to={"/register"}
            className="underline text-indigo-400 font-semibold"
          >
            Registro
          </Link>
        </h3>
      </section>
      {/* IZQUIERDA */}
      <section className="w-[70vw]">
        <img
          src={fondo}
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          alt="fondo"
        />
      </section>
    </div>
  );
};

export default Login;
