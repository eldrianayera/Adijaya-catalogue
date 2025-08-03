import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAdmin } from "../../hooks/useAdmin";

export default function SingleProductDetail() {
  const { id } = useParams();
  const {
    isValidAdmin,
    productById,
    fetchProductsById,
    handleSaveEdit,
    handleDelete,
  } = useAdmin();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
    category: "",
    id: "",
  });

  const [isEditingSingleProduct, setIsEditingSingleProduct] = useState(false);

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

  const handleClickSave = () => {
    handleSaveEdit(formData);
    setIsEditingSingleProduct(false);
  };

  if (!productById) {
    return <h1>Product not found</h1>;
  }

  return (
    <div className="max-w-6xl flex flex-col mx-auto border-8 mt-30">
      <div className="">
        <a href="/" className="border-2">
          Home
        </a>
      </div>
      <div className="flex">
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
            readOnly={!isValidAdmin || !isEditingSingleProduct}
          />
          <div>
            <label className="text-4xl font-bold " htmlFor="price">
              Rp
            </label>
            <input
              className="text-4xl font-bold focus:outline-hidden"
              value={formData.price}
              name="price"
              readOnly={!isValidAdmin || !isEditingSingleProduct}
              onChange={isValidAdmin ? handleChange : undefined}
            />
          </div>
          <input
            className="text-sm text-gray-600 focus:outline-hidden"
            value={formData.category}
            name="category"
            readOnly={!isValidAdmin || !isEditingSingleProduct}
            onChange={isValidAdmin ? handleChange : undefined}
          />
          <textarea
            value={formData.description}
            name="description"
            className="resize-none focus:outline-hidden w-160"
            readOnly={!isValidAdmin || !isEditingSingleProduct}
            onChange={isValidAdmin ? handleChange : undefined}
            style={{
              fieldSizing: "content",
              minHeight: "2.5rem",
            }}
          />

          {isValidAdmin && (
            <div className="self-end gap-4 flex">
              <button
                onClick={() => {
                  handleDelete(id);
                }}
                className="border-2 p-1"
              >
                Delete
              </button>
              {isEditingSingleProduct ? (
                <button onClick={handleClickSave} className="border-2 p-1">
                  Save
                </button>
              ) : (
                <button
                  onClick={() => setIsEditingSingleProduct(true)}
                  className="border-2 p-1"
                >
                  Edit
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
