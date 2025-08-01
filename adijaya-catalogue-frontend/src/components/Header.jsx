export default function Header(props) {
  return (
    <header className="flex border-2 justify-center items-center relative h-20">
      <h1 className="font-bold text-5xl">
        {props.page === "admin" ? "Adijaya Admin" : "Adijaya Catalogue"}
      </h1>
      {props.page === "admin" ? (
        <div className="absolute right-5 flex gap-4">
          <a className="border-2 p-1" href="/">
            Catalogue
          </a>
          <button onClick={props.handleLogOut} className="border-2 p-1">
            Log out
          </button>
        </div>
      ) : (
        <div className="absolute right-5">
          <a className="border-2 p-1" href="/admin/products">
            Admin
          </a>
        </div>
      )}
    </header>
  );
}
