import CategoryBar from "../../components/CategoryBar";
import Header from "../../components/Header";
import { useProducts } from "../hooks/useProducts";

export default function VisitorProducts() {
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
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>${Number(product.price).toFixed(2)}</p>
            {product.image && (
              <img src={product.image} alt={product.name} width={100} />
            )}
            <p>{product.description}</p>
            <p>
              <em>Category: {product.category}</em>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
