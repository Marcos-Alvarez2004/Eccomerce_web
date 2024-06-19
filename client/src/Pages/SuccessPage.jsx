import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/main");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <h2>Compra Exitosa</h2>
      <p>
        Gracias por tu compra. Serás redirigido a la página principal en unos
        segundos...
      </p>
    </div>
  );
};

export default SuccessPage;
