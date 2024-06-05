// REACT
import React, { useEffect, useState } from "react";
// ARCHIVOS
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import ButtonFilterCategory from "../components/ButtonFilterCategory";
import { Link } from "react-router-dom";
import Favorites from "./Favorites";

const jsonProducts = [
  {
    id: 1,
    name: "Mouse Logitech",
    img: "/assets/mouseLogitech.jpg",
    desc: "Mouse desc",
    price: 20,
    category: "Mouses",
  },
  {
    id: 2,
    name: "Mouse Redragon",
    img: "/assets/mouseRedragon.jpeg",
    desc: "Mouse desc",
    price: 25,
    category: "Mouses",
  },
  {
    id: 3,
    name: "Auriculares HyperX",
    img: "/assets/auricularesHyper.jpg",
    desc: "Auriculares desc",
    price: 40,
    category: "Auriculares",
  },
  {
    id: 4,
    name: "Auriculares Razer",
    img: "/assets/auricularesRazer.jpg",
    desc: "Auriculares desc",
    price: 45,
    category: "Auriculares",
  },
  {
    id: 5,
    name: "Teclado Logitech",
    img: "/assets/tecladoLogitech.webp",
    desc: "Teclado desc",
    price: 50,
    category: "Teclados",
  },
  {
    id: 6,
    name: "Teclado Redragon",
    img: "/assets/tecladoRedragon.jpeg",
    desc: "Teclado desc",
    price: 55,
    category: "Teclados",
  },
  {
    id: 7,
    name: "Monitor Samsung",
    img: "/assets/monitorSamsung.jpg",
    desc: "Monitor desc",
    price: 60,
    category: "Monitores",
  },
  {
    id: 8,
    name: "Monitor LG",
    img: "/assets/monitorLg.webp",
    desc: "montior desc",
    price: 65,
    category: "Monitores",
  },
];

const Products = () => {
  const [products, setProducts] = useState(jsonProducts);
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, isFavorite: !product.isFavorite }
          : product
      )
    );

    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((product) => product.id === id);
      if (isFavorite) {
        return prevFavorites.filter((product) => product.id !== id);
      } else {
        const newFavorite = products.find((product) => product.id === id);
        return [newFavorite, ...prevFavorites];
      }
    });
  };

  // DATA FILTER CATEGORY
  const allCategories = [
    "All",
    ...new Set(jsonProducts.map((e) => e.category)),
  ];
  const [categories, setCategories] = useState(allCategories);

  const filterCategory = (category) => {
    if (category === "All") {
      setProducts(jsonProducts);
      return;
    }

    const dataFiltered = jsonProducts.filter((e) => e.category === category);
    setProducts(dataFiltered);
  };
  return (
    <>
      <Navbar />
      <div className="text-center mt-20">
        <h1 className="text-4xl mb-20">Products</h1>
      </div>
      <div className="text-center mb-4">
        <ButtonFilterCategory
          categories={categories}
          filterCategory={filterCategory}
        />
      </div>
      <section className="flex justify-center items-center gap-4 flex-wrap mb-24">
        {products.map((product) => (
          <Card
            key={product.id}
            product={product}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </section>
      <Favorites favorites={favorites} toggleFavorite={toggleFavorite} />
      <Footer />
    </>
  );
};

export default Products;
