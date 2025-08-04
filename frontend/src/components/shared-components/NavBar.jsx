export default function NavBar() {
  const navItem = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Product", href: "#product" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="flex gap-3 text-foreground md-only">
      {navItem.map((item, key) => (
        <a key={key} className="hover:text-primary" href={item.href}>
          {item.name}
        </a>
      ))}
    </nav>
  );
}
