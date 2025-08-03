import cn from "../../lib/utils";
import NavBar from "./NavBar";

export default function Header(props) {
  return (
    <header className="flex border-2 items-center h-20 mb-12 fixed w-full text-background bg-foreground justify-evenly top-0">
      <a href="/" className="font-bold text-5xl ">
        {props.admin ? "FitWear Admin" : "FitWear"}
      </a>
      <NavBar />
      <div
        className={cn("absolute right-5 flex gap-4", !props.admin && "hidden")}
      >
        <button onClick={props.handleLogOut} className="border-2 p-1">
          Log out
        </button>
      </div>
    </header>
  );
}
