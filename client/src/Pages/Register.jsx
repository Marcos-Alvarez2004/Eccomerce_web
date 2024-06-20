// REACT
import { useState, useEffect } from "react";
// DEPENDENCIAS
import { Link, useNavigate } from "react-router-dom";
// ARCHIVOS
import fondo from "/fondo.jpg";
import notFound from "/not-found.png";

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
  // HandleRemove
  const handleRemove = () => {
    setFormData({
      ...formData,
      profileImage: null,
    });
  };
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
        navigate("/");
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
          <div className="flex gap-4">
            {/* NOMBRE */}
            <label htmlFor="name" className="flex flex-col items-center gap-2">
              Nombre
              <input
                type="text"
                className="rounded border-2 border-zinc-400 p-1 bg-transparent"
                required
                id="name"
                name="name"
                minLength="4"
                maxLength="8"
                value={formData.name}
                onChange={handleChange}
                placeholder="Min 4 y Max 8 caracteres"
              />
            </label>
            {/* EMAIL */}
            <label htmlFor="email" className="flex flex-col items-center gap-2">
              Email
              <input
                type="email"
                className="rounded border-2 border-zinc-400 p-1 bg-transparent"
                required
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
              />
            </label>
          </div>
          <div className="flex gap-4">
            {/* CONTRASEÑA */}
            <label
              htmlFor="password"
              className="flex flex-col items-center gap-2"
            >
              Contraseña
              <input
                type="password"
                className="rounded border-2 border-zinc-400 p-1 bg-transparent"
                required
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                minLength="4"
                maxLength="8"
                placeholder="Min 4 y Max 8 caracteres"
              />
            </label>
            {/* CONFIRMAR CONTRASEÑA */}
            <label
              htmlFor="confirmPassword"
              className="flex flex-col items-center gap-2"
            >
              Confirmar Contraseña
              <input
                type="password"
                className="rounded border-2 border-zinc-400 p-1 bg-transparent"
                required
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirmar contraseña"
              />
            </label>
          </div>
          {/* SUBIDA DE FOTO DE PERFIL */}

          <label
            htmlFor="image"
            className="flex flex-col gap-2 cursor-pointer w-max m-auto"
          >
            <div className="bg-indigo-700 p-2 rounded">
              Agregar/Cambiar foto de perfil
            </div>
            <input
              type="file"
              id="image"
              name="profileImage"
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleChange}
              required
            />
          </label>

          <div className="bg-notFound h-[250px] w-[250px] relative mx-auto border border-white">
            {formData.profileImage && (
              <div className="mx-auto bg-white w-full h-full">
                <button
                  onClick={handleRemove}
                  className="bg-red-600 absolute -top-6 -right-6 w-6 h-6 rounded-full flex justify-center items-center"
                >
                  <i class="bx bx-x font-semibold"></i>
                </button>
                <img
                  src={URL.createObjectURL(formData.profileImage)}
                  alt="Agregar foto"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="bg-indigo-700 p-2 rounded w-1/2 mx-auto"
            disabled={!passwordMatch}
          >
            Registro
          </button>
        </form>
        {/* LINK DE LOGIN */}
        <h3 className="text-lg">
          Tenes una cuenta creada?{" "}
          <Link to={"/"} className="underline text-indigo-400">
            Ingreso
          </Link>
        </h3>
      </section>
    </div>
  );
};

export default Register;
