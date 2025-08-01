import { useEffect, useState } from "react";
import cn from "../lib/utils";

export default function EditProductWindow(props) {
  const productToBeEdited = props.product;
  const [formData, setFormData] = useState({
    name: product.name || "",
    price: product.price || "",
    image: product.image || "",
    description: product.description || "",
    category: product.category || "",
  });

  useEffect(() => {
    if (productToBeEdited) {
    }
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className={cn(
        // position
        "top-1/2 -translate-y-1/2  left-1/2 -translate-x-1/2",
        // classname
        "z-50 fixed border-2"
      )}
    >
      <div key={productToBeEdited.id} className="border-2 p-5">
        <h3>{productToBeEdited.name}</h3>
        <p>${Number(productToBeEdited.price).toFixed(2)}</p>
        <p>{productToBeEdited.description}</p>
        <p>
          <em>Category: {productToBeEdited.category}</em>
        </p>
        <button className="m-3 border-2 p-2">Save</button>
        <button
          onClick={() => props.setIsEditing(false)}
          className="m-3 border-2 p-2"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
