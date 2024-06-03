// REACT
import React, { useEffect, useState } from "react";
// ARCHIVOS
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import data from "../data.json";
import Footer from "../components/Footer";
import ButtonFilterCategory from "../components/ButtonFilterCategory";

const Products = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    setCard(data);
  }, []);

  // DATA FILTER CATEGORY
  const allCategories = ["All", ...new Set(data.map((e) => e.category))];
  const [categories, setCategories] = useState(allCategories);

  const filterCategory = (category) => {
    if (category === "All") {
      setCard(data);
      return;
    }

    const dataFiltered = data.filter((e) => e.category === category);
    setCard(dataFiltered);
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
        {card.map((card) => (
          <Card
            key={card.id}
            name={card.name}
            price={card.price}
            img={card.img}
          />
        ))}
      </section>
      <Footer />
    </>
  );
};

export default Products;
