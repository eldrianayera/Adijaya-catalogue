export default function Header() {
  return (
    <header className="flex border-2 justify-center items-center relative h-20">
      <h1 className="font-bold text-5xl">Adijaya Catalogue</h1>
      <a href="/admin/products" className="absolute right-5 border-2 p-2">
        Admin
      </a>
    </header>
  );
}
