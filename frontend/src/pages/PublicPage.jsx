import CategoryBar from "../components/index-page-components/CategoryBar";
import CardContainer from "../components/shared-components/CardContainer";
import { useAdmin } from "../hooks/useAdmin";
import EditProductWindow from "../components/admin-components/EditProductWindow";
import HeroContainer1 from "../components/index-page-components/HeroContainer1";
import HeroContainer2 from "../components/index-page-components/HeroContainer2";
import Footer from "../components/shared-components/Footer";
import Header from "../components/shared-components/Header";
import About from "../components/index-page-components/About";
import Contact from "../components/index-page-components/Contact";

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

      <main className="page">
        <HeroContainer1 />
        <HeroContainer2 />
        <About />
        <CategoryBar
          category={category}
          fetchCategories={fetchProductsByCategory}
          fetchProducts={fetchProducts}
        />
        {isValidAdmin && (
          <div>
            {" "}
            <button onClick={() => handleEdit({})} className="border-2 px-1 ">
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
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
