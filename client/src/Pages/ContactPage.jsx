import React from "react";

const ContactPage = () => {
  return (
    <>
      <section className="flex justify-center items-center h-screen flex-col">
        <form
          className="flex flex-col gap-8 bg-white/5 p-4 rounded-lg"
          action="https://formsubmit.co/20398d6c370c1176d9cdf1986fb0e085"
          method="POST"
        >
          <h1 className="text-3xl font-bold my-2 text-center">Contacto</h1>
          <p className="text-white/60">
            Cualquier consulta que tengas, rellena todos los campos.
          </p>
          <div className="flex gap-4">
            <input
              className="p-2 text-black rounded-sm"
              type="text"
              placeholder="Su nombre"
              name="name"
              required
            />
            <input
              className="p-2 text-black rounded-sm"
              type="email"
              placeholder="Email"
              name="email"
              required
            />
          </div>
          <textarea
            className="p-2 text-black rounded-sm resize-none h-52"
            placeholder="Mensaje"
            name="message"
            required
          ></textarea>
          <button
            type="submit"
            className="cursor-pointer transition-all bg-indigo-500 text-white font-medium px-6 py-2 rounded-lg border-indigo-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
          >
            Enviar
          </button>
          <input
            type="hidden"
            name="_next"
            value="http://localhost:5173/contact"
          />
          <input type="hidden" name="_captcha" value="false" />
        </form>
      </section>
    </>
  );
};

export default ContactPage;
