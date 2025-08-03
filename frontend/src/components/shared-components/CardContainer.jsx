import ProductsCards from "./ProductsCard";

export default function CardContainer(props) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {" "}
      {props.products.map((product) => (
        <div key={product.id} className="rounded-lg border-4 card-hover ">
          {" "}
          {/* Product card content */}
          <ProductsCards product={product} />
          {/* Admin action buttons */}
          {props.isValidAdmin && (
            <div className="mt-2 flex gap-2 justify-center">
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
