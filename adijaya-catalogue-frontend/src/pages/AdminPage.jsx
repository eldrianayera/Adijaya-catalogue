import { useAdmin } from "../hooks/useAdmin";
import AdminLogin from "./AdminLogin";
import CategoryBar from "../components/CategoryBar";
import Header from "../components/Header";
import AdminProductsCards from "../components/AdminProductsCard";
import { useState } from "react";
import EditProductWindow from "../components/EditProductWindow";

export default function AdminPage() {
  const {
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
  } = useAdmin();

  if (isValidating) return <p>Checking Authentication...</p>;
  if (!isValidAdmin) return <AdminLogin />;

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {isEditing && (
        <EditProductWindow
          product={isEditing}
          setIsEditing={setIsEditing}
          handleSaveEdit={handleSaveEdit}
          category={category}
        />
      )}
      <Header page={"admin"} handleLogOut={handleLogOut} />
      <CategoryBar
        category={category}
        fetchCategories={fetchProductsByCategory}
        fetchProducts={fetchProducts}
      />
      <button onClick={handleAdd} className="border-2 w-30">
        Add Product
      </button>
      <AdminProductsCards
        products={products}
        handleAdd={handleAdd}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
}
