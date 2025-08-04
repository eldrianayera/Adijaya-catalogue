export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="h-20 bg-foreground text-background mt-16 flex items-center justify-center px-6">
      <p className="text-sm font-medium">
        &copy; {year} EldriTech. All rights reserved.
      </p>
    </footer>
  );
}
