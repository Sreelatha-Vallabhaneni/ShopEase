export default function Footer() {
  return (
    <footer className="border-t py-12 mt-8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
        <p className="font-semibold text-foreground">
          <a href="/">
            Shop<span className="text-primary">Ease</span>
          </a>
        </p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          <a href="/contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>
        <p>&copy; {new Date().getFullYear()} ShopEase</p>
      </div>
    </footer>
  );
}
