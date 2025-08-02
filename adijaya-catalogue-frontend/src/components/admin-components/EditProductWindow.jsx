import { useEffect, useState } from "react";
import cn from "../../lib/utils";

export default function EditProductWindow(props) {
  const product = props.product;
  const [editOrAdd, setEditOrAdd] = useState("edit");
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
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
        image: product.image || "",
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

  return (
    <div
      className={cn(
        // position
        "top-1/2 -translate-y-1/2  left-1/2 -translate-x-1/2 ",
        // classname
        "z-50 fixed border-2 flex flex-col w-[90%] h-[90%] justify-evenly p-3 bg-white"
      )}
    >
      <div className="grid grid-cols-[3fr_2fr] px-5">
        <div className="flex flex-col ">
          <div className="flex gap-3 items-center">
            {" "}
            <label htmlFor="name">Product name : </label>
            <input
              type="text"
              value={formData.name}
              name="name"
              placeholder="Product name..."
              className="p-2 border-2 grow"
              required
              onChange={(e) => {
                handleUpdate(e);
              }}
            />
          </div>
          <div className="flex gap-3 items-center">
            {" "}
            <label htmlFor="name"> price : </label>
            <input
              type="text"
              value={formData.price}
              name="price"
              placeholder="Product price..."
              className="p-2 border-2 grow"
              required
              onChange={(e) => {
                handleUpdate(e);
              }}
            />
          </div>
          <div className="flex gap-3 items-center ">
            {" "}
            <label htmlFor="name">Category : </label>
            <select
              onChange={handleUpdate}
              name="category"
              id="category"
              value={formData.category}
              className="h-12 border-2 grow"
            >
              <option value="" disabled hidden>
                -- Select category --
              </option>
              {props.category.map((categ, key) => {
                return (
                  <option key={key} value={categ}>
                    {categ}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="flex gap-3 items-center">
            {" "}
            <label htmlFor="name">Image : </label>
            <input
              type="text"
              value={formData.image}
              name="image"
              placeholder="Product image..."
              className="p-2 border-2 grow"
              onChange={(e) => {
                handleUpdate(e);
              }}
            />
          </div>

          <div className="flex gap-3 items-center">
            {" "}
            <label htmlFor="name">Description : </label>
            <input
              type="text"
              value={formData.description}
              name="description"
              placeholder="escription..."
              className="p-2 border-2 grow"
              onChange={(e) => {
                handleUpdate(e);
              }}
            />
          </div>
        </div>

        <div className="border-2 mx-auto">
          {formData.image ? (
            <img src={formData.image} alt={formData.name} width={400} />
          ) : (
            <div className="w-[400px] h-[300px] flex items-center justify-center bg-gray-100 text-gray-500">
              No image
            </div>
          )}
        </div>
      </div>
      <div className="self-end">
        {" "}
        <button
          onClick={() => props.setIsEditing(false)}
          className="m-3 border-2 p-2"
        >
          Cancel
        </button>
        {editOrAdd === "edit" ? (
          <button
            onClick={() => props.handleSaveEdit(formData)}
            className="m-3 border-2 p-2"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => props.handleAdd(formData)}
            className="m-3 border-2 p-2"
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
}
