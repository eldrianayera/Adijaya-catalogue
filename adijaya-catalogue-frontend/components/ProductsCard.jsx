export default function ProductsCards(props) {
  return (
    <div>
      {" "}
      <button onClick={props.handleAdd} className="border-2 w-30">
        Add Product
      </button>
      <div className="grid grid-cols-3 gap-4">
        {props.products.map((product) => (
          <div key={product.id} className="border-2 p-5">
            <h3>{product.name}</h3>
            <p>${Number(product.price).toFixed(2)}</p>
            {product.image && (
              <img src={product.image} alt={product.name} width={100} />
            )}
            <p>{product.description}</p>
            <p>
              <em>Category: {product.category}</em>
            </p>
            <button
              onClick={() => props.handleEdit(product.id)}
              className="border-2 p-2 m-3"
            >
              Edit
            </button>
            <button
              onClick={() => props.handleDelete(product.id)}
              className="border-2 p-2 m-3"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
