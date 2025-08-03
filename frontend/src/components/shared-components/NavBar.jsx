export default function NavBar() {
  const navItem = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Product", href: "#product" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="flex gap-3 text-background lg-only">
      {navItem.map((item) => (
        <a className="hover:text-primary" href={item.href}>
          {item.name}
        </a>
      ))}
    </nav>
  );
}
