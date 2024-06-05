import React from "react";

const Favorites = ({ favorites, toggleFavorite }) => {
  return (
    <>
      <section className="flex justify-center items-center my-8 flex-col">
        <h1 className="text-4xl">Favoritos</h1>
        <div>
          {favorites.length === 0 ? (
            <p>No tienes productos favoritos.</p>
          ) : (
            <div className="flex gap-4">
              {favorites.map((product) => (
                <div key={product.id} className="favorite-product">
                  <img src={product.img} alt={product.name} />
                  <h3>{product.name}</h3>
                  <button
                    className="bg-red-500"
                    onClick={() => toggleFavorite(product.id)}
                  >
                    Eliminar de favoritos
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Favorites;
