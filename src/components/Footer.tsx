import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <img
              src="/wire_vision_logo_white.png"
              alt="Wire Vision Designs LLC"
              className="h-10 w-auto mb-4"
            />
            <p className="text-muted-foreground max-w-md mb-6">
              Professional shop drawings for fire alarm, security, CCTV, access control, and life-safety systems. NICET-compliant designs with fast turnaround.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-3">
              {[
                { label: "Services", href: "#services" },
                { label: "Why Us", href: "#why-us" },
                { label: "Process", href: "#process" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-4">
              <a
                href="mailto:wirevisiondesignsllc@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm break-all">wirevisiondesignsllc@gmail.com</span>
              </a>
              <a
                href="tel:919-796-7821"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">919-796-7821</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">Serving North Carolina & Nationwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Wire Vision Designs LLC — All Rights Reserved
          </p>
          <p className="text-sm text-muted-foreground">
            Professional Low-Voltage & Fire Alarm Shop Drawings
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
