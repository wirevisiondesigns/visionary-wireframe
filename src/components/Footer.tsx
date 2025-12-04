import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          {/* Logo & Description */}
          <div className="max-w-md">
            <img
              src="/wire_vision_logo_white.png"
              alt="Wire Vision Designs LLC"
              className="h-10 w-auto mb-4"
            />
            <p className="text-muted-foreground">
              Professional shop drawings for fire alarm, security, CCTV, access control, and life-safety systems. NICET-compliant designs with fast turnaround.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <a
              href="mailto:wirevisiondesignsllc@gmail.com"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm">wirevisiondesignsllc@gmail.com</span>
            </a>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm">Serving North Carolina & Nationwide</span>
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
