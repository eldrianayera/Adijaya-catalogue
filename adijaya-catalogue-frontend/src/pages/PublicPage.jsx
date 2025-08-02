import CategoryBar from "../components/shared-components/CategoryBar";
import Header from "../components/shared-components/Header";
import CardContainer from "../components/shared-components/CardContainer";
import { useAdmin } from "../hooks/useAdmin";
import ProductsCards from "../components/shared-components/ProductsCard";

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
      <CategoryBar
        category={category}
        fetchCategories={fetchProductsByCategory}
        fetchProducts={fetchProducts}
      />
      <main>
        <CardContainer products={products} isValidAdmin={isValidAdmin} />
      </main>
    </div>
  );
}
