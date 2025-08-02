export default function Header(props) {
  return (
    <header className="flex border-2 justify-center items-center relative h-20">
      <a href="/" className="font-bold text-5xl">
        {props.admin ? "Adijaya Admin" : "Adijaya Catalogue"}
      </a>
      {props.admin && (
        <div className="absolute right-5 flex gap-4">
          <button onClick={props.handleLogOut} className="border-2 p-1">
            Log out
          </button>
        </div>
      )}
    </header>
  );
}
