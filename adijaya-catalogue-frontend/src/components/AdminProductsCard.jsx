import ProductsCards from "./ProductsCard";

export default function AdminProductsCards(props) {
  return (
    <div>
      {" "}
      {props.products.map((product) => (
        <div key={product.id}>
          {" "}
          <ProductsCards product={product} />
          <button
            onClick={() => props.handleEdit(product.id)}
            className="border-2 p-2 m-3"
          >
            Edit
          </button>
          <button
            onClick={() => props.handleDelete(product.id)}
            className="border-2 p-2 m-3"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
