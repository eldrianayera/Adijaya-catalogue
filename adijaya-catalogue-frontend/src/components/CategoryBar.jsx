import { useState } from "react";

export default function CategoryBar(props) {
  const [activeCateg, setActiveCateg] = useState("All");

  const handleActiveCateg = (categ) => {
    if (categ === "All") {
      props.fetchProducts();
    } else {
      props.fetchCategories(categ);
      setActiveCateg(categ);
    }
  };

  return (
    <div className="flex justify-center gap-4">
      {props.category.map((categ, key) => (
        <button
          key={key}
          onClick={() => handleActiveCateg(categ)}
          className="border-2 p-2"
        >
          {categ}
        </button>
      ))}
    </div>
  );
}
