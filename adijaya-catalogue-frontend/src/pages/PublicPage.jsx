import CategoryBar from "../components/shared-components/CategoryBar";
import CardContainer from "../components/shared-components/CardContainer";
import { useAdmin } from "../hooks/useAdmin";
import EditProductWindow from "../components/admin-components/EditProductWindow";

export default function PublicPage() {
  const {
    products,
    loading,
    fetchProducts,
    fetchProductsByCategory,
    category,
    isValidAdmin,
    handleAdd,
    handleDelete,
    handleEdit,
    handleSaveEdit,
    isEditing,
    setIsEditing,
  } = useAdmin();
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
      <main>
        <CardContainer
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
