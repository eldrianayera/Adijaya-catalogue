import { useProducts } from "./useProducts";
import { useEffect, useState } from "react";
import { axiosInstance } from "../api/axiosInstance";

export const useAdmin = () => {
  const [
    products,
    setProducts,
    loading,
    fetchProducts,
    fetchProductsByCategory,
    category,
    setCategory,
    fetchProductsById,
    productById,
    setProductById,
  ] = useProducts();

  const token = localStorage.getItem("token");

  const [isValidating, setIsValidating] = useState(true);
  const [isValidAdmin, setIsValidAdmin] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  ////////////////// Token and Role Authentication ///////////////////////////////////////////////////////////////
  useEffect(() => {
    const validateToken = async () => {
      if (!token || localStorage.getItem("role") !== "admin") {
        setIsValidAdmin(false);
        setIsValidating(false);
        return;
      }
      try {
        const res = await axiosInstance.get("/auth/validate");
        // If status is not 2xx, axios will throw and jump to catch

        setIsValidAdmin(true);
      } catch (error) {
        console.error(
          "Authentication failed:",
          error.response?.data || error.message
        );
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        setIsValidAdmin(false);
      } finally {
        setIsValidating(false);
      }
    };
    validateToken();
  }, [token]);

  //////// Log out /////////////////////////////////////////////////////////////////////////////////////
  const handleLogOut = () => {
    console.log("Log out");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsValidAdmin(false);
    window.location.href = "/admin/login";
  };

  //////////////////// Add new product ///////////////////////////////////////////////////////////////////////
  const handleAdd = async (newProduct) => {
    try {
      const res = await axiosInstance.post("/admin/products", newProduct);

      // Instant update
      setProducts((prev) => [...prev, res.data]);

      // Re-fetch in background
      fetchProducts();
      setIsEditing(false);
    } catch (err) {
      console.error(
        "Failed to add product:",
        err.response?.data || err.message
      );
    }
  };

  /////////////////////////// change Editing state ////////////////////////////////////////////////////
  const handleEdit = (product) => {
    console.log("hai");
    setIsEditing(product);
    return product;
  };

  ///////////////////////// Save edited product //////////////////////////////////////////////////////
  const handleSaveEdit = async (editedProduct) => {
    alert("Product has been Saved");
    try {
      const res = await axiosInstance.put(
        `/admin/products/${editedProduct.id}`,
        editedProduct
      );

      // Instant update
      setProducts((prev) =>
        prev.map((p) => (p.id === editedProduct.id ? res.data : p))
      );

      // Re-fetch in background
      fetchProducts();

      setIsEditing(false);
    } catch (err) {
      console.error(
        "Failed to edit product:",
        err.response?.data || err.message
      );
    }
  };

  /////////// Delete a product ////////////////////////////////////////////////////////////////////////
  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/admin/products/${id}`);

      // Instant Update
      setProducts((prev) => prev.filter((p) => p.id !== id));

      // Re-fetch in background
      fetchProducts();
    } catch (err) {
      console.error(
        "Failed to delete product:",
        err.response?.data || err.message
      );
    }
  };

  return {
    products,
    setProducts,
    loading,
    fetchProducts,
    fetchProductsByCategory,
    category,
    setCategory,
    handleAdd,
    handleDelete,
    handleEdit,
    handleSaveEdit,
    handleLogOut,
    isValidAdmin,
    isValidating,
    isEditing,
    setIsEditing,
    fetchProductsById,
    productById,
    setProductById,
  };
};
