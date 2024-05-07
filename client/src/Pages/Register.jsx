// REACT
import { useState, useEffect } from "react";
// DEPENDENCIAS
import { Link, useNavigate } from "react-router-dom";
// ARCHIVOS
import fondo from "/fondo.jpg";
import upload from "/upload.png";

// <a href="https://www.freepik.es/foto-gratis/vista-configuracion-controlador-teclado-juegos-neon-iluminado_29342308.htm#fromView=search&page=1&position=51&uuid=bdc21462-0c78-4377-a971-6e64b7c56bf3">Imagen de freepik</a>

const Register = () => {
  // useNavigate
  const navigate = useNavigate();
  // useState
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: null,
  });
  // HandleChange
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      [name]: name === "profileImage" ? files[0] : value,
    });
  };
  // useEffect
  useEffect(() => {
    setPasswordMatch(
      formData.password === formData.confirmPassword ||
        formData.confirmPassword === ""
    );
  });
  // HandleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const register_form = new FormData();

      for (var key in formData) {
        register_form.append(key, formData[key]);
      }
      // FETCH
      const res = await fetch("http://localhost:4000/auth/register", {
        method: "POST",
        body: register_form,
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
            value={formData.name}
            onChange={handleChange}
            placeholder="Nombre"
          />
          {/* EMAIL */}
          <input
            type="email"
            className="rounded border-2 border-zinc-400 p-1 bg-transparent"
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          {/* CONTRASEÑA */}
          <input
            type="password"
            className="rounded border-2 border-zinc-400 p-1 bg-transparent"
            required
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Contraseña"
          />
          {/* CONFIRMAR CONTRASEÑA */}
          <input
            type="password"
            className="rounded border-2 border-zinc-400 p-1 bg-transparent"
            required
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirmar contraseña"
          />
          {!passwordMatch && (
            <div className="text-red-500">La contraseñas no son iguales!</div>
          )}
          {/* SUBIDA DE FOTO DE PERFIL */}
          <input
            type="file"
            id="image"
            name="profileImage"
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleChange}
            required
          />
          <label
            htmlFor="image"
            className="flex flex-col justify-center gap-2 cursor-pointer text-white text-sm"
          >
            <div className="bg-red-500 p-2 text-center rounded">
              AGREGAR SU FOTO DE PERFIL
            </div>
          </label>
          {formData.profileImage && (
            <div className="mx-auto bg-white border-2 border-white w-40 h-40">
              <img
                src={URL.createObjectURL(formData.profileImage)}
                alt="Agregar foto"
                className="w-full h-full object-cover"
              />
            </div>
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
