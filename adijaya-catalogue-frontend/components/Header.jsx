export default function Header(props) {
  return (
    <header className="flex border-2 justify-center items-center relative h-20">
      <h1 className="font-bold text-5xl">
        {props.page === "admin" ? "Adijaya Admin" : "Adijaya Catalogue"}
      </h1>
      <a
        href={props.page === "admin" ? "/" : "/admin/products"}
        className="absolute right-5 border-2 p-2"
      >
        {props.page === "admin" ? "Catalogue" : "admin"}
      </a>
    </header>
  );
}
