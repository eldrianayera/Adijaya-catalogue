export default function CategoryBar(props) {
  return (
    <div className="flex justify-center gap-4">
      {props.category.map((categ, key) => (
        <button
          key={key}
          onClick={() =>
            categ !== "All"
              ? props.fetchCategories(categ)
              : props.fetchProducts()
          }
          className="border-2 p-2"
        >
          {categ}
        </button>
      ))}
    </div>
  );
}
