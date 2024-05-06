// REACT
import React from "react";

const Card = ({ id, name, img, desc, price }) => {
  return (
    <article className="mx-4" key={id}>
      <h1>{name}</h1>
      <img src={img} alt={name} />
      <p>{desc}</p>
      <h4>{price}</h4>
    </article>
  );
};

export default Card;
