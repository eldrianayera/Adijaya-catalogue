export default function ProductsCards({ product }) {
  return (
    <a
      href={`/product-detail/${product.id}`}
      className="group rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col w-64 bg-white"
    >
      {/* Image container */}
      <div className="relative w-full h-48 bg-gray-100 flex items-center justify-center">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="text-gray-400 text-sm">No image</div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold truncate group-hover:text-primary transition-colors duration-200">
          {product.name}
        </h3>
        <p className="text-gray-700 font-medium mt-1">
          Rp{Number(product.price).toLocaleString()}
        </p>
      </div>
    </a>
  );
}
