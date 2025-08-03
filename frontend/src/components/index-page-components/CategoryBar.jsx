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
      className="flex justify-center gap-4 flex-wrap scroll-mt-30"
      id="product"
    >
      {" "}
      {props.category.map((categ, key) => (
        <button
          key={key}
          onClick={() => handleActiveCateg(categ)}
          className={cn(
            "p-2 primary-button bg-background border-4",
            categ === activeCateg ? "bg-primary/70 " : ""
          )}
        >
          {categ}
        </button>
      ))}
    </div>
  );
}
