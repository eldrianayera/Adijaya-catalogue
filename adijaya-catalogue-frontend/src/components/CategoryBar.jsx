import { useEffect, useState } from "react";
import cn from "../lib/utils";

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
    <div className="flex justify-center gap-4">
      {props.category.map((categ, key) => (
        <button
          key={key}
          onClick={() => handleActiveCateg(categ)}
          className={cn(
            "border-2 p-2",
            categ === activeCateg ? "bg-amber-500" : ""
          )}
        >
          {categ}
        </button>
      ))}
    </div>
  );
}
