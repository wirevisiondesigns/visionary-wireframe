import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Subtle red glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-8 opacity-0 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Professional CAD Services</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 opacity-0 animate-fade-up animate-delay-100">
            Precision Shop Drawings for{" "}
            <span className="text-accent-gradient">Fire Alarm</span> &{" "}
            <span className="text-accent-gradient">Low-Voltage</span> Systems
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up animate-delay-200">
            Accurate, code-compliant, permit-ready drawings delivered fast.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up animate-delay-300">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-all duration-300 glow-accent"
            >
              Request a Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-md hover:bg-secondary transition-all duration-300"
            >
              View Services
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-border/50 opacity-0 animate-fade-up animate-delay-400">
            <p className="text-sm text-muted-foreground mb-4">Trusted by contractors nationwide</p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground/60">
              <span className="text-sm font-medium">NICET-Compliant</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
              <span className="text-sm font-medium">Fast Turnaround</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
              <span className="text-sm font-medium">CAD + PDF Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
