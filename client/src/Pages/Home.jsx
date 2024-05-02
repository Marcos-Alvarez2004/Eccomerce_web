// REACT
import React from "react";

// ARCHIVOS
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <section>
      <main
        className={`h-screen bg-cover bg-center bg-no-repeat bg-[url("/fondoHome.jpg")]`}
      >
        <Navbar />
      </main>
    </section>
  );
};

export default Home;
