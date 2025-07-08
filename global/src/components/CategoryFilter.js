//Use Router Link
import React from "react";
import { Link } from "react-router-dom";



const CategoryFilter = () => {
  const categories = ["Smileys", "Animals", "Food"];

  return (
    <div className="filter-buttons">
      {categories.map((cat) => (
        <Link key={cat} to={`/${cat}`}>
          <button>{cat}</button>
        </Link>
      ))}
    </div>
  );
};

export default CategoryFilter;
