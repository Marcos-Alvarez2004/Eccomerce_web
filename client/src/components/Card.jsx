// REACT
import React from "react";

const Card = ({ id, name, img, desc, price }) => {
  return (
    <div
      className="max-w-sm rounded overflow-hidden mx-4 relative border-animation flex justify-center items-center flex-col"
      key={id}
    >
      <main className="z-10 w-full p-1">
        <img src={img} alt={name} className="w-full rounded-t h-64 bg-white" />
        <div className="border-2 border-white rounded-b">
          <div className="px-6 py-4 h-32">
            <div className="font-bold text-xl mb-2">{name}</div>
            <p className="text-base">{desc}</p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-indigo-500 mr-2">
              ${price}
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Card;
