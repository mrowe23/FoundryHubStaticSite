
export function Footer() {
  return (
    <footer className="bg-theme-dark py-6">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-wrap justify-center space-x-4 mb-2 text-sm">
          <a
            href="#"
            className="text-theme-muted hover:text-theme-primary transition-colors"
          >
            Privacy &amp; cookies
          </a>
          <span className="text-theme-muted">|</span>
          <a
            href="#"
            className="text-theme-muted hover:text-theme-primary transition-colors"
          >
            Terms &amp; conditions
          </a>
          <span className="text-theme-muted">|</span>
          <a
            href="#"
            className="text-theme-muted hover:text-theme-primary transition-colors"
          >
            Trademarks
          </a>
        </div>
        <div className="text-theme-secondary text-sm">© Microsoft 2025</div>
      </div>
    </footer>
  );
}
