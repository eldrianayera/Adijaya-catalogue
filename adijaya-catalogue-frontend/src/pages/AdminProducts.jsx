import { useProducts } from "../hooks/useProducts";
import { API_BASE_URL, imgLink } from "../config";
import AdminLogin from "./AdminLogin";
import CategoryBar from "../components/CategoryBar";
import Header from "../components/Header";
import ProductsCards from "../components/ProductsCard";
import { useEffect, useState } from "react";

export default function AdminProducts() {
  const [
    products,
    setProducts,
    loading,
    fetchProducts,
    fetchProductsByCategory,
    category,
  ] = useProducts();

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const [isValidating, setIsValidating] = useState(true);
  const [isValidAdmin, setIsValidAdmin] = useState(false);

  // Token and Role Authentication
  useEffect(() => {
    const validateToken = async () => {
      if (!token || role !== "admin") {
        setIsValidAdmin(false);
        setIsValidating(false);
        return;
      }
      try {
        const res = await fetch(`${API_BASE_URL}/auth/validate`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) {
          const errorText = await res.text();
          console.error("Failed to Validate :", errorText);

          localStorage.removeItem("token");
          localStorage.removeItem("role");

          setIsValidating(false);
          setIsValidAdmin(false);

          return;
        }

        setIsValidAdmin(true);
        setIsValidating(false);
      } catch (error) {
        console.error("Authentication failed:", error);
        setIsValidating(false);
      }
    };

    validateToken();
  }, [token, role]);

  if (isValidating) return <p>Checking Authentication...</p>;
  if (!isValidAdmin) return <AdminLogin />;

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
      <Header page={"admin"} />
      <CategoryBar
        category={category}
        fetchCategories={fetchProductsByCategory}
        fetchProducts={fetchProducts}
      />
      <ProductsCards
        products={products}
        handleAdd={handleAdd}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
}
