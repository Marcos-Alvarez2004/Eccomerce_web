// REACT
import React, { useEffect, useState } from "react";
// DEPENDENCIAS
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// ARCHIVOS
import Card from "./Card";
import data from "../data.json";

const Carrusel = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(data);
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <section className="relative h-[70vh]">
      <div className="absolute inset-0 w-1/2 mx-auto flex flex-col justify-center">
        <Slider {...settings}>
          {cards.map((card) => (
            <Card
              key={card.id}
              name={card.name}
              img={card.img}
              desc={card.desc}
              price={card.price}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Carrusel;
