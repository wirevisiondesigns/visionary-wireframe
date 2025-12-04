const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Wire Vision Designs LLC
            </h2>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="p-8 md:p-12 rounded-lg border border-border bg-card/50">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Wire Vision Designs LLC provides professional shop drawings for fire alarm, security, CCTV, access control, and other life-safety systems. We focus on accuracy, clean design, compliant documentation, and fast turnaround for contractors who need dependable submittals.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                All drawings are NICET-compliant, and an engineer is available to stamp design-build projects requiring sealed drawings.
              </p>
              <p className="text-foreground text-xl font-medium">
                Our goal is simple: deliver clean, code-compliant drawings that keep your projects moving.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { value: "NICET", label: "Compliant" },
              { value: "24-48hr", label: "Turnaround" },
              { value: "CAD+PDF", label: "Deliverables" },
              { value: "100%", label: "Permit-Ready" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-lg border border-border bg-card/30">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
