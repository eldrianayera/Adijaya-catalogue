import { useProducts } from "./useProducts";
import { useEffect, useState } from "react";
import AdminLogin from "../pages/AdminLogin";
import { API_BASE_URL, imgLink } from "../config";

export const useAdmin = () => {
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
  const [isEditing, setIsEditing] = useState(false);

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

  // Log out
  const handleLogOut = () => {
    console.log("Log out");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsValidAdmin(false);
  };

  // Add new product
  const handleAdd = async (newProduct) => {
    console.log("Add a new product", newProduct);

    try {
      const res = await fetch(`${API_BASE_URL}/admin/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newProduct),
      });

      let data;
      try {
        data = await res.json();
      } catch {
        data = null; // fallback if not JSON
      }

      if (!res.ok) {
        const errorText = data?.message;
        throw new Error(`Failed to add product: ${errorText}`);
      }

      // Instant update
      setProducts((prev) => [...prev, data]);

      // Re-fetch in background
      fetchProducts();
      setIsEditing(false);
    } catch (err) {
      console.error(err);
    }
  };

  // Edit a product
  const handleEdit = (product) => {
    setIsEditing(product);
    return product;
  };

  // handleSaveEdit
  const handleSaveEdit = async (editedProduct) => {
    console.log(editedProduct);
    try {
      const res = await fetch(
        `${API_BASE_URL}/admin/products/${editedProduct.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(editedProduct),
        }
      );

      let data;
      try {
        data = await res.json();
      } catch {
        data = null; // fallback if not JSON
      }

      if (!res.ok) {
        const errorText = data?.message;
        throw new Error(`Failed to edit product: ${errorText}`);
      }

      // Instant update
      setProducts((prev) =>
        prev.map((p) => (p.id === editedProduct.id ? data : p))
      );

      // Re-fetch in background
      fetchProducts();

      setIsEditing(false);
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

  return {
    products,
    setProducts,
    loading,
    fetchProducts,
    fetchProductsByCategory,
    category,
    handleAdd,
    handleDelete,
    handleEdit,
    handleSaveEdit,
    handleLogOut,
    isValidAdmin,
    isValidating,
    isEditing,
    setIsEditing,
  };
};
