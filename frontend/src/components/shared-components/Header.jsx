import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

export default function Header(props) {
  return (
    <header
      className="
        fixed top-0 w-full h-20 z-50 flex items-center justify-between
        bg-background px-8 shadow-md
      "
      role="banner"
    >
      <a
        href="/"
        className="font-extrabold text-4xl text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded"
        tabIndex={0}
      >
        {props.admin ? "FitWear Admin" : "FitWear"}
      </a>

      <nav className="flex-1 mx-12">
        <NavBar />
      </nav>

      <SearchBar />

      {props.admin && (
        <div className="ml-6">
          <button
            onClick={props.handleLogOut}
            className="
              border-2 border-primary px-4 py-1 rounded-md text-primary
              font-semibold hover:bg-primary hover:text-white transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-primary
            "
            aria-label="Log out"
          >
            Log out
          </button>
        </div>
      )}
    </header>
  );
}
