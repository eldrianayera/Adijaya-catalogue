import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAdmin } from "../../hooks/useAdmin";
import { Home, HomeIcon } from "lucide-react";

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
  const canEdit = isValidAdmin && isEditingSingleProduct;

  useEffect(() => {
    fetchProductsById(id);
  }, [id]);

  useEffect(() => {
    if (productById) {
      setFormData({
        name: productById.name ?? "",
        price: productById.price ?? "",
        image: productById.image ?? "",
        description: productById.description ?? "",
        category: productById.category ?? "",
        id: productById.id ?? "",
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
    <div className="max-w-6xl mx-auto border-4 rounded-lg overflow-hidden bg-white shadow-lg m-10">
      <div className="p-4 border-b bg-white ">
        <a
          href="/"
          className="
      inline-block
      border-2 border-primary
      text-primary font-semibold
      px-4 py-1 rounded-md
      hover:bg-primary hover:text-white
      transition-colors duration-200
      focus:outline-none focus:ring-2 focus:ring-primary
    "
        >
          <Home />
        </a>
      </div>

      <div className="flex flex-col md:flex-row gap-10 p-10">
        {/* Image Container */}
        <div className="flex-shrink-0 w-full md:w-96 h-72 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
          {formData.image ? (
            <img
              src={formData.image}
              alt={formData.name}
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="text-gray-400 text-sm">No image</div>
          )}
        </div>

        {/* Details Form */}
        <div className="flex flex-col flex-grow gap-6">
          <input
            className="text-4xl font-bold border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary rounded-sm p-1"
            value={formData.name}
            placeholder="Product..."
            name="name"
            onChange={canEdit ? handleChange : undefined}
            readOnly={!canEdit}
          />

          <div className="flex items-center gap-2">
            <label className="text-4xl font-bold select-none" htmlFor="price">
              Rp
            </label>
            <input
              id="price"
              className="text-4xl font-bold border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary rounded-sm p-1 flex-grow"
              value={formData.price}
              placeholder="Price..."
              name="price"
              readOnly={!canEdit}
              onChange={canEdit ? handleChange : undefined}
              type="number"
              min="0"
            />
          </div>

          <input
            className="text-sm text-gray-600 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary rounded-sm p-1"
            value={formData.category}
            placeholder="Category..."
            name="category"
            readOnly={!canEdit}
            onChange={canEdit ? handleChange : undefined}
          />

          <input type="file"  />


          <textarea
            value={formData.description}
            name="description"
            placeholder="Product description ..."
            className="resize-none border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary min-h-[80px]"
            readOnly={!canEdit}
            onChange={canEdit ? handleChange : undefined}
          />

          {isValidAdmin && (
            <div className="self-end flex gap-4 mt-4">
              <button
                onClick={() => handleDelete(id)}
                className="border-2 border-red-500 text-red-500 px-4 py-1 rounded-md hover:bg-red-500 hover:text-white transition-colors"
              >
                Delete
              </button>
              {isEditingSingleProduct ? (
                <button
                  onClick={handleClickSave}
                  className="border-2 border-primary text-primary px-4 py-1 rounded-md hover:bg-primary hover:text-white transition-colors"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => setIsEditingSingleProduct(true)}
                  className="border-2 border-primary text-primary px-4 py-1 rounded-md hover:bg-primary hover:text-white transition-colors"
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
