export default function ProductsCards({ product }) {
  return (
    <div className="border rounded-lg shadow-sm hover:shadow-md transition duration-200 flex flex-col">
      {/* Image container */}
      <div className="h-48 w-full border-b overflow-hidden flex items-center justify-center bg-gray-100">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="text-gray-400 text-sm">No image</div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold truncate">{product.name}</h3>
        <p className="text-gray-700 font-medium">
          ${Number(product.price).toFixed(2)}
        </p>
      </div>
    </div>
  );
}
