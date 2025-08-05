import ProductsCards from "./ProductsCard";

export default function CardContainer(props) {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {props.products.map((product) => (
        <div
          key={product.id}
          className="rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white p-2"
        >
          {/* Product card */}
          <ProductsCards product={product} />

          {/* Admin action buttons */}
          {props.isValidAdmin && (
            <div className="mt-3 flex gap-3 justify-center">
              <button
                onClick={() => props.handleDelete(product.id)}
                className="px-3 py-1 text-sm font-semibold rounded-lg border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-200"
              >
                🗑️ Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
