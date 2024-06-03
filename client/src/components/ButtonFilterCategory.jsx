const ButtonFilterCategory = ({ categories, filterCategory }) => {
  return (
    <div>
      {categories.map((category) => (
        <button
          type="button"
          className="bg-indigo-500 text-white rounded p-2 mx-4"
          onClick={() => filterCategory(category)}
          key={category}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ButtonFilterCategory;
