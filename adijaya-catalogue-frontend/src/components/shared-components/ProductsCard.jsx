export default function ProductsCards({ product }) {
  return (
    <div className="rounded-lg shadow-sm hover:shadow-md transition duration-200 flex flex-col w-60 h-80">
      {/* Image container */}
      <div className="w-full aspect-square overflow-hidden flex items-center justify-center bg-gray-100">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="object-cover"
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
