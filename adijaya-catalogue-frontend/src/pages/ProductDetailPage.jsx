import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAdmin } from "../hooks/useAdmin";

export default function ProductDetailPage() {
  const { id } = useParams();
  const { isValidAdmin, productById, fetchProductsById } = useAdmin();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
    category: "",
    id: "",
  });

  useEffect(() => {
    fetchProductsById(id);
  }, [id]);

  useEffect(() => {
    if (productById) {
      setFormData({
        name: productById.name || "",
        price: productById.price || "",
        image: productById.image || "",
        description: productById.description || "",
        category: productById.category || "",
        id: productById.id || "",
      });
    }
  }, [productById]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (!productById) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="max-w-6xl border-2 mx-auto mt-10 flex">
      <div className="w-100 aspect-square overflow-hidden flex items-center justify-center bg-gray-100">
        {formData.image ? (
          <img
            src={formData.image}
            alt={formData.name}
            className="object-cover"
          />
        ) : (
          <div className="text-gray-400 text-sm">No image</div>
        )}
      </div>
      <div className="m-10 flex flex-col gap-5">
        <input
          className="text-4xl font-bold focus:outline-hidden"
          value={formData.name}
          name="name"
          onChange={isValidAdmin ? handleChange : undefined}
          readOnly={!isValidAdmin}
        />

        <input
          className="text-4xl font-bold focus:outline-hidden"
          value={`Rp${formData.price}`}
          name="price"
          readOnly={!isValidAdmin}
          onChange={isValidAdmin ? handleChange : undefined}
        />
        <input
          className="text-sm text-gray-600 focus:outline-hidden"
          value={formData.category}
          name="category"
          readOnly={!isValidAdmin}
          onChange={isValidAdmin ? handleChange : undefined}
        />
        <textarea
          type="text"
          value={formData.description}
          name="description"
          className="resize-none focus:outline-hidden"
          readOnly={!isValidAdmin}
          onChange={isValidAdmin ? handleChange : undefined}
        />
      </div>
    </div>
  );
}
