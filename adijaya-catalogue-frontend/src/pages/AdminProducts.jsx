import { useProducts } from "../hooks/useProducts";
import { API_BASE_URL, imgLink } from "../config";

export default function AdminProducts() {
  const [products, setProducts, loading, fetchProducts] = useProducts();
  const token = localStorage.getItem("token");


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

  return (
    <div>
      <h2>Admin View</h2>
      <button onClick={handleAdd}>Add Product</button>
      <div className="grid grid-cols-3 gap-4 p-5">
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
            <button onClick={() => handleEdit(product.id)}>Edit</button>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
