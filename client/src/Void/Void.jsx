import React from "react";
import { Link } from "react-router-dom";

const Void = () => {
  return (
    <div>
      <Link to={"/login"}>Ingreso</Link>
      <br />
      <Link to={"/register"}>Registro</Link>
    </div>
  );
};

export default Void;
