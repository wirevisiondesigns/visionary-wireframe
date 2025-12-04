const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img
              src="/wire_vision_logo_white.png"
              alt="Wire Vision Designs LLC"
              className="h-10 md:h-12 w-auto"
            />
          </a>

          {/* CTA Button */}
          <a
            href="#contact"
            className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:bg-primary/90 transition-all duration-300"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
