import { useEffect, useState } from "react";
import cn from "../../lib/utils";

export default function CategoryBar(props) {
  const [activeCateg, setActiveCateg] = useState("All");

  const handleActiveCateg = (categ) => {
    categ === "All" ? setActiveCateg("All") : setActiveCateg(categ);
  };

  useEffect(() => {
    if (activeCateg === "All") {
      props.fetchProducts();
    } else {
      props.fetchCategories(activeCateg);
    }
  }, [activeCateg, props]);

  return (
    <div
      className="flex justify-center gap-4 flex-wrap scroll-mt-30 py-6"
      id="product"
    >
      {props.category.map((categ, key) => (
        <button
          key={key}
          onClick={() => handleActiveCateg(categ)}
          className={cn(
            "px-6 py-2 rounded-full border-2 font-semibold transition-all duration-300 ease-in-out shadow-sm hover:shadow-md",
            categ === activeCateg
              ? "bg-primary text-white border-primary scale-105"
              : "bg-white text-gray-700 border-gray-300 hover:bg-primary/10"
          )}
        >
          {categ}
        </button>
      ))}
    </div>
  );
}
