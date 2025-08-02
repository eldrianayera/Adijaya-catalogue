import ProductsCards from "./ProductsCard";

export default function AdminCard(props) {
  return (
    <div className="grid grid-cols-5 gap-6">
      {" "}
      {props.products.map((product) => (
        <div key={product.id} className="border-2">
          {" "}
          {/* Product card content */}
          <ProductsCards product={product} />
          {/* Admin action buttons */}
          <div className="mt-auto flex gap-2 justify-center border-t">
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
