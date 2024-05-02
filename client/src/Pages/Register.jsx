// REACT
import { useState, useEffect } from "react";
// DEPENDENCIAS
import { Link, useNavigate } from "react-router-dom";
// ARCHIVOS
import fondo from "/fondo.jpg";

// <a href="https://www.freepik.es/foto-gratis/vista-configuracion-controlador-teclado-juegos-neon-iluminado_29342308.htm#fromView=search&page=1&position=51&uuid=bdc21462-0c78-4377-a971-6e64b7c56bf3">Imagen de freepik</a>

const Register = () => {
  // useState
  const navigate = useNavigate();
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // useEffect
  useEffect(() => {
    setPasswordMatch(password === confirmPassword || confirmPassword === "");
  });
  // HandleSubmit
  const handleSubmit = async (e) => {
    const data = {
      name: name,
      email: email,
      password: password,
      confirmPassword: password,
    };

    e.preventDefault();
    try {
      // FETCH
      const res = await fetch("http://localhost:4000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        navigate("/login");
      }
    } catch (err) {
      console.log("Registro salio mal!", err.message);
    }
  };
  return (
    <div className="flex h-screen">
      {/* DERECHA */}
      <section className="w-[70vw]">
        <img
          src={fondo}
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          alt="fondo"
        />
      </section>
      {/* IZQUIERDA */}
      <section className="w-[30vw] flex justify-center items-center flex-col gap-8">
        <h1 className="text-4xl">Registro</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* NOMBRE */}
          <input
            type="text"
            className="rounded border-2 border-zinc-400 p-1 bg-transparent"
            required
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Nombre"
          />
          {/* EMAIL */}
          <input
            type="email"
            className="rounded border-2 border-zinc-400 p-1 bg-transparent"
            required
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />
          {/* CONTRASEÑA */}
          <input
            type="password"
            className="rounded border-2 border-zinc-400 p-1 bg-transparent"
            required
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Contraseña"
          />
          {/* CONFIRMAR CONTRASEÑA */}
          <input
            type="password"
            className="rounded border-2 border-zinc-400 p-1 bg-transparent"
            required
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            placeholder="Confirmar contraseña"
          />
          {!passwordMatch && (
            <p className="text-red-500">La contraseñas no son iguales!</p>
          )}
          <button
            type="submit"
            className="bg-indigo-500 p-2 rounded"
            disabled={!passwordMatch}
          >
            Registro
          </button>
        </form>
        {/* LINK DE LOGIN */}
        <h3 className="text-lg">
          Tenes una cuenta creada?{" "}
          <Link to={"/login"} className="underline text-indigo-500">
            Ingreso
          </Link>
        </h3>
      </section>
    </div>
  );
};

export default Register;
