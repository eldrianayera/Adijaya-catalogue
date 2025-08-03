export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="h-20 bg-foreground text-background mt-15 flex items-center justify-center">
      <h1>Copyright {year} EldriTech</h1>
    </div>
  );
}
