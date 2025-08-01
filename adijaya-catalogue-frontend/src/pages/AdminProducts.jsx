import { useProducts } from "../hooks/useProducts";
import { API_BASE_URL, imgLink } from "../config";
import AdminLogin from "./AdminLogin";

export default function AdminProducts() {
  const [
    products,
    setProducts,
    loading,
    fetchProducts,
    fetchProductsByCategory,
  ] = useProducts();

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token || role !== "admin") return <AdminLogin />;

  // Add new product
  const handleAdd = async () => {
    console.log("Add a new product");
    const newProduct = {
      name: "New Product",
      price: 12000,
      image: imgLink,
      description: "Sample description",
      category: "Sample Category",
    };

    try {
      const res = await fetch(`${API_BASE_URL}/admin/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newProduct),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Failed to edit product: ${errorText}`);
      }

      const data = await res.json();

      // Instant update
      setProducts((prev) => [...prev, data]);

      // Re-fetch in background
      fetchProducts();
    } catch (err) {
      console.error(err);
    }
  };

  // Edit a product
  const handleEdit = async (id) => {
    console.log("Update product", id);
    const editedProduct = {
      name: "Edit this Product",
      price: 198000,
      image: imgLink,
      description: "change this product",
      category: "edit the Category",
    };

    try {
      const res = await fetch(`${API_BASE_URL}/admin/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(editedProduct),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Failed to edit product: ${errorText}`);
      }

      const data = await res.json();

      // Instant update
      setProducts((prev) => prev.map((p) => (p.id === id ? data : p)));

      // Re-fetch in background
      fetchProducts();
    } catch (err) {
      console.error(err);
    }
  };

  // Delete a product
  const handleDelete = async (id) => {
    console.log("Delete product", id);
    try {
      const res = await fetch(`${API_BASE_URL}/admin/products/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Failed to edit product: ${errorText}`);
      }

      // Instant Update
      setProducts((prev) => prev.filter((p) => p.id !== id));

      // Re-fetch in background
      fetchProducts();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Loading...</p>;

  const categorySet = new Set(products.map((p) => p.category));
  const category = [...categorySet];

  return (
    <div className="flex flex-col gap-4 p-4">
      <h2>Admin View</h2>
      <div className="flex justify-center gap-4">
        {category.map((categ, key) => (
          <button
            key={key}
            onClick={() => fetchProductsByCategory(categ)}
            className="border-2 p-2"
          >
            {categ}
          </button>
        ))}
      </div>
      <button onClick={handleAdd} className="border-2 w-30">
        Add Product
      </button>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border-2 p-5">
            <h3>{product.name}</h3>
            <p>${Number(product.price).toFixed(2)}</p>
            {product.image && (
              <img src={product.image} alt={product.name} width={100} />
            )}
            <p>{product.description}</p>
            <p>
              <em>Category: {product.category}</em>
            </p>
            <button
              onClick={() => handleEdit(product.id)}
              className="border-2 p-2 m-3"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(product.id)}
              className="border-2 p-2 m-3"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
