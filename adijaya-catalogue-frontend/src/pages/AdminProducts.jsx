import { useProducts } from "../hooks/useProducts";

export default function AdminProducts() {
  const [products, loading] = useProducts();
  if (loading) return <p>Loading...</p>;

  const handleAdd = () => {
    console.log("Add a new product");
  };
  const handleUpdate = (id) => {
    console.log("Update product", id);
  };
  const handleDelete = (id) => {
    console.log("Delete product", id);
  };

  return (
    <div>
      <h2>Admin View</h2>
      <button onClick={handleAdd}>Add Product</button>
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
