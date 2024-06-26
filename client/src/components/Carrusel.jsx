// REACT
import React, { useEffect, useState } from "react";
// DEPENDENCIAS
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// ARCHIVOS
import data from "../data.json";
import CardProduct from "./CardProduct";

const Carrusel = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(data);
  }, []);

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 w-10/12 mx-auto flex flex-col justify-center">
        <Slider {...settings}>
          {cards.map((card) => (
            <CardProduct
              key={card.id}
              name={card.name}
              img={card.img}
              price={card.price}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Carrusel;
