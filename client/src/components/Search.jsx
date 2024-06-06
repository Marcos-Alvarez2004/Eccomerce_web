import React, { useEffect, useState } from "react";
import { jsonProducts } from "../Pages/Products";

const Search = () => {
  const [search, setSearch] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    const lowerCase = e.target.search.value.toLowerCase();
    const res = jsonProducts.filter((data) => data.name.includes(lowerCase));
    setSearch(res);
  };

  const handleChange = (e) => {
    if (e.target.value == 0) {
      setSearch(jsonProducts);
    }
  };

  useEffect(() => {
    setSearch(jsonProducts);
  }, []);

  return (
    <>
      <div className="m-10">
        <form onSubmit={(e) => handleSearch(e)}>
          <input
            className="bg-slate-500"
            onChange={(e) => handleChange(e)}
            name="search"
            placeholder="Buscqueda de productos"
          />
          <button>🔍</button>
        </form>
        <div className="bg-red-400">
          {search.map((elem, i) => (
            <h5 key={i} className="first-letter:uppercase">
              {elem.name}
            </h5>
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
