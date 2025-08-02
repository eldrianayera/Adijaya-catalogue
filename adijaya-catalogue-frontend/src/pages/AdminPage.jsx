import { useAdmin } from "../hooks/useAdmin";
import AdminLogin from "./AdminLogin";
import CategoryBar from "../components/shared-components/CategoryBar";
import Header from "../components/shared-components/Header";
import AdminCard from "../components/shared-components/CardContainer";
import { useState } from "react";
import EditProductWindow from "../components/admin-components/EditProductWindow";

export default function AdminPage() {
  const {
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
          handleAdd={handleAdd}
        />
      )}
      <CategoryBar
        category={category}
        fetchCategories={fetchProductsByCategory}
        fetchProducts={fetchProducts}
      />
      <button onClick={() => setIsEditing({})} className="border-2 w-30">
        Add Product
      </button>
      <main>
        <AdminCard
          products={products}
          handleAdd={handleAdd}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          isValidAdmin={isValidAdmin}
        />
      </main>
    </div>
  );
}
