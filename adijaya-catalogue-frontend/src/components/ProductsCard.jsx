export default function ProductsCards(props) {
  return (
    <div>
      {" "}
      <div className="grid grid-cols-3 gap-4">
        <div key={props.product.id} className="border-2 p-5">
          <h3>{props.product.name}</h3>
          <p>${Number(props.product.price).toFixed(2)}</p>
          {props.product.image && (
            <img
              src={props.product.image}
              alt={props.product.name}
              width={100}
            />
          )}
          <p>{props.product.description}</p>
          <p>
            <em>Category: {props.product.category}</em>
          </p>
        </div>
      </div>
    </div>
  );
}
