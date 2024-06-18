import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = ({ totalItems }) => {
  return (
    <>
      <section className="flex justify-center items-center h-screen flex-col">
        <form className="flex flex-col gap-8 bg-white/5 p-4 rounded-lg">
          <h1 className="text-3xl font-bold my-2 text-center">Contacto</h1>
          <p className="text-white/60">
            Cualquier consulta que tengas, rellena todos los campos.
          </p>
          <div className="flex gap-4">
            <input
              className="p-2 text-black rounded-sm"
              type="text"
              placeholder="Su nombre"
            />
            <input
              className="p-2 text-black rounded-sm"
              type="email"
              placeholder="Email"
            />
          </div>
          <textarea
            className="p-2 text-black rounded-sm resize-none h-52"
            placeholder="Mensaje"
          ></textarea>
          <button className="cursor-pointer transition-all bg-indigo-500 text-white font-medium px-6 py-2 rounded-lg border-indigo-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
            Enviar
          </button>
        </form>
      </section>
    </>
  );
};

export default ContactPage;
