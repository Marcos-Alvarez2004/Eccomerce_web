import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutImg from "/about.svg";

const AboutPage = () => {
  return (
    <>
      <section className="h-screen flex justify-center items-center w-1/2 mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold py-4">Acerca de la pagina</h1>
          <p className="text-left text-white/80">
            Hola! Si estas leyendo esto quiero decirte que esta pagina es un
            proyecto personal de mi trabajo como programador, si te intereso lo
            que estas viendo, podes contactarte conmigo en mis redes sociales en
            el pie de pagina o por medio del contacto. Si deseas ver más
            proyectos mios te dejo mi link de GitHub y mi link de linkedin por
            si quieres contactarme. <br /> <br />{" "}
            <span className="font-bold">GitHub:</span>{" "}
            <a
              className="underline text-red-500"
              href="https://github.com/Marcos-Alvarez2004"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/Marcos-Alvarez2004
            </a>{" "}
            <br /> <br /> <span className="font-bold">Linkdin:</span>{" "}
            <a
              className="underline text-red-500"
              href="https://www.linkedin.com/in/marcosalvarezmedero/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.linkedin.com/in/marcosalvarezmedero/
            </a>
          </p>
        </div>
        <div>
          <img width={"1500px"} src={AboutImg} alt="aboutImg" />
        </div>
      </section>
    </>
  );
};

export default AboutPage;
