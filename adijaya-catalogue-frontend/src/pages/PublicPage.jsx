import CategoryBar from "../components/shared-components/CategoryBar";
import Header from "../components/shared-components/Header";
import AdminCard from "../components/shared-components/CardContainer";
import { useAdmin } from "../hooks/useAdmin";

export default function PublicPage() {
  const {
    products,
    loading,
    fetchProducts,
    fetchProductsByCategory,
    category,
    isValidAdmin,
  } = useAdmin();
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <Header />
      <CategoryBar
        category={category}
        fetchCategories={fetchProductsByCategory}
        fetchProducts={fetchProducts}
      />
      <main>
        <AdminCard products={products} isValidAdmin={isValidAdmin} />
      </main>
    </div>
  );
}
