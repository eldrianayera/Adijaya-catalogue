import ProductsCards from "../shared-components/ProductsCard";

export default function AdminCard(props) {
  return (
    <div className="grid grid-cols-6">
      {" "}
      {props.products.map((product) => (
        <div key={product.id} className="mx-auto rounded-lg">
          {" "}
          {/* Product card content */}
          <ProductsCards product={product} />
          {/* Admin action buttons */}
          <div className="mt-auto flex gap-2 justify-center">
            {" "}
            <button
              onClick={() => props.handleEdit(product)}
              className="border-2 px-1"
            >
              Edit
            </button>
            <button
              onClick={() => props.handleDelete(product.id)}
              className="border-2 px-1"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
