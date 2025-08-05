import { useEffect, useState } from "react";
import cn from "../../lib/utils";
import { LocateFixed } from "lucide-react";

export default function EditProductWindow(props) {
  const product = props.product;
  const [editOrAdd, setEditOrAdd] = useState("edit");
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: null,
    imagePreview: "",
    description: "",
    category: "",
    id: "",
  });

  useEffect(() => {
    if (!product || Object.keys(product).length === 0) {
      setEditOrAdd("add");
      console.log("Add new product");
    }
    if (product) {
      setFormData({
        name: product.name || "",
        price: product.price || "",
        image: product.image || null,
        imagePreview: typeof product.image === "string" ? product.image : "",
        description: product.description || "",
        category: product.category || "",
        id: product.id || "",
      });
    }
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [product]);

  const handleUpdate = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClickAdd = (formData) => {
    if (!formData.name || !formData.price) {
      alert("Name and Price can't be empty");
      return;
    }
    props.handleAdd(formData);
  };

  return (
    <div
      className={cn(
        // positioning
        "fixed left-1/2 top-[calc(50%+2.5rem)] -translate-x-1/2 -translate-y-1/2",
        // appearance
        "z-50 w-[90%] h-[90%] bg-white rounded-xl shadow-2xl p-6 flex flex-col justify-between overflow-auto"
      )}
    >
      {/* Product form fields */}
      <div className="grid grid-cols-[3fr_2fr] gap-8">
        <div className="space-y-5">
          {/* Product Name */}
          <div>
            <label className="block font-semibold mb-1">Product Name</label>
            <input
              type="text"
              value={formData.name}
              name="name"
              placeholder="Enter product name..."
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
              required
              onChange={handleUpdate}
            />
          </div>

          {/* Price */}
          <div>
            <label className="block font-semibold mb-1">Price</label>
            <input
              type="text"
              value={formData.price}
              name="price"
              placeholder="Enter product price..."
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
              required
              onChange={handleUpdate}
            />
          </div>

          {/* Category */}
          <div>
            <label className="block font-semibold mb-1">Category</label>
            <div className="flex gap-3">
              <select
                onChange={handleUpdate}
                name="category"
                value={formData.category}
                className="flex-grow p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
              >
                <option value="" disabled>
                  -- Select category --
                </option>
                {props.category
                  .filter((categ) => categ !== "All")
                  .map((categ, key) => (
                    <option key={key} value={categ}>
                      {categ}
                    </option>
                  ))}
                {formData.category &&
                  !props.category.includes(formData.category) && (
                    <option value={formData.category}>
                      {formData.category}
                    </option>
                  )}
              </select>
              <input
                type="text"
                placeholder="New category..."
                className="p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    category: e.target.value,
                  }))
                }
              />
            </div>
          </div>

          {/* Image */}
          <div>
            <label className="block font-semibold mb-1">Product Image</label>
            <input
              type="file"
              accept="image/*"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
              onChange={(e) => {
                const file = e.target.files[0];
                console.log(file);
                if (file) {
                  setFormData((prev) => ({
                    ...prev,
                    image: file,
                    imagePreview: URL.createObjectURL(file),
                  }));
                }
              }}
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-semibold mb-1">Description</label>
            <textarea
              value={formData.description}
              name="description"
              placeholder="Enter product description..."
              rows="3"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
              onChange={handleUpdate}
            ></textarea>
          </div>
        </div>

        {/* Product Image Preview */}
        <div className="flex items-center justify-center border rounded-lg overflow-hidden">
          {formData.imagePreview ? (
            <img
              src={formData.imagePreview}
              alt={formData.name}
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500">
              No image
            </div>
          )}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex justify-end gap-4 mt-6">
        <button
          onClick={() => props.setIsEditing(false)}
          className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
        >
          Cancel
        </button>
        {editOrAdd === "edit" ? (
          <button
            onClick={() => props.handleSaveEdit(formData)}
            className="px-5 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => handleClickAdd(formData)}
            className="px-5 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
}
