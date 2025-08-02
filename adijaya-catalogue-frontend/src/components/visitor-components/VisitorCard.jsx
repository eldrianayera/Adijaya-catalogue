import ProductsCards from "../shared-components/ProductsCard";

export default function VisitorCard(props) {
  return (
    <div className="grid grid-cols-6">
      {" "}
      {props.products.map((product) => (
        <div key={product.id} className="mx-auto rounded-lg">
          {" "}
          {/* Product card content */}
          <ProductsCards product={product} />
          {/* Admin action buttons */}
        </div>
      ))}
    </div>
  );
}
