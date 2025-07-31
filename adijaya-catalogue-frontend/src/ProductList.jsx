import { useEffect } from "react";
import { useState } from "react";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <div>
      <h2>Product Catalogue</h2>
      {products.length === 0 && <p>No products found.</p>}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
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
};
