// REACT
import React, { useState } from "react";
// DEPENDECIAS
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// ARCHIVO
import fondo from "../../public/fondo.jpg";
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
        navigate("/");
      }
    } catch (err) {
      console.log("Error de ingreso", err.message);
    }
  };
  return (
    <div className="flex h-screen">
      {/* DERECHA */}
      <section className="w-[30vw] flex justify-center items-center flex-col gap-8">
        <h1 className="text-4xl">Login</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* EMAIL */}
          <input
            type="email"
            className="rounded border-2 border-zinc-400 p-1 bg-transparent"
            required
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          {/* CONTRASEÑA */}
          <input
            type="password"
            className="rounded border-2 border-zinc-400 p-1 bg-transparent"
            required
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
          />
          <button type="submit" className="bg-indigo-500 p-2 rounded">
            Ingresar
          </button>
        </form>
        <h3 className="text-lg">
          Todavia no tenes cuenta?{" "}
          <Link to={"/register"} className="underline text-indigo-500">
            Registro
          </Link>
        </h3>
      </section>
      {/* IZQUIERDA */}
      <section className="w-[70vw]">
        <img src={fondo} className="h-full w-full bg-cover" alt="fondo" />
      </section>
    </div>
  );
};

export default Login;
