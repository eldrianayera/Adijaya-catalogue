import CategoryBar from "../components/shared-components/CategoryBar";
import Header from "../components/shared-components/Header";
import { useProducts } from "../hooks/useProducts";
import VisitorCard from "../components/visitor-components/VisitorCard";

export default function VisitorPage() {
  const [
    products,
    ,
    loading,
    fetchProducts,
    fetchProductsByCategory,
    category,
  ] = useProducts();
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
        <VisitorCard products={products} />
      </main>
    </div>
  );
}
