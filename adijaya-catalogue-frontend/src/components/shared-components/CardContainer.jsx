import ProductsCards from "./ProductsCard";

export default function CardContainer(props) {
  return (
    <div className="flex flex-wrap">
      {" "}
      {props.products.map((product) => (
        <div key={product.id} className="mx-auto rounded-lg">
          {" "}
          {/* Product card content */}
          <ProductsCards product={product} />
          {/* Admin action buttons */}
          {props.isValidAdmin && (
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
          )}
        </div>
      ))}
    </div>
  );
}
