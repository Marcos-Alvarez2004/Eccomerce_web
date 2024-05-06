// REACT
import React from "react";

// ARCHIVOS
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Carrusel from "../components/Carrusel";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <section>
      <main
        className={`h-screen bg-cover bg-center bg-no-repeat bg-[url("/fondoHome.jpg")]`}
      >
        <Navbar />
        <Main />
      </main>
      <h1 className="text-5xl font-bold text-center mt-24">
        Ultimas Novedades
      </h1>
      <Carrusel />
      <Footer />
    </section>
  );
};

export default Home;
