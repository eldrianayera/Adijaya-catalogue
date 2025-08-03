import CategoryBar from "../components/shared-components/CategoryBar";
import CardContainer from "../components/shared-components/CardContainer";
import { useAdmin } from "../hooks/useAdmin";
import EditProductWindow from "../components/admin-components/EditProductWindow";
import HeroContainer from "../components/shared-components/HeroContainer";
import Footer from "../components/shared-components/Footer";
import Header from "../components/shared-components/Header";

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
    handleLogOut,
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

      <Header admin={isValidAdmin} handleLogOut={handleLogOut} />

      <main className="px-9 flex flex-col gap-12 pt-30">
        <HeroContainer />
        <HeroContainer />
        <CategoryBar
          category={category}
          fetchCategories={fetchProductsByCategory}
          fetchProducts={fetchProducts}
        />
        {isValidAdmin && (
          <div>
            {" "}
            <button onClick={handleAdd} className="border-2 px-1">
              Add a New Product
            </button>
          </div>
        )}
        <CardContainer
          products={products}
          handleAdd={handleAdd}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          isValidAdmin={isValidAdmin}
        />
      </main>
      <Footer />
    </div>
  );
}
