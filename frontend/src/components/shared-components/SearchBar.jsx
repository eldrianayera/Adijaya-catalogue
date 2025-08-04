import { Search } from "lucide-react";
import { useState } from "react";
import { axiosInstance } from "../../api/axiosInstance";
import { useProducts } from "../../hooks/useProducts";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const handleClickSearch = async (e) => {
    window.location.href = `/search/${search}`;
  };

  return (
    <form
      className="flex items-center border-2 rounded-lg pr-2"
      onSubmit={(e) => handleClickSearch(e)}
    >
      {" "}
      <input
        className="w-55 px-4 py-1 bg-background rounded-xl focus:outline-hidden"
        placeholder="Search..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      ></input>
      <button type="submit">
        <Search className="text-foreground" />
      </button>
    </form>
  );
}
