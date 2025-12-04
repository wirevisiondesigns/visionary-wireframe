import { Check } from "lucide-react";

const benefits = [
  "NICET-compliant drawings",
  "Fast turnaround times",
  "Permit-ready CAD + PDF deliverables",
  "Clean revisions and easy communication",
  "Engineer available to stamp design-build drawings when required",
  "Trusted by electrical contractors & low-voltage integrators",
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Quality Drawings,{" "}
              <span className="text-muted-foreground">Delivered Right</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We focus on accuracy, clean design, and fast turnaround so your projects stay on schedule.
            </p>
          </div>

          {/* Benefits list */}
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-lg border border-border bg-card/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
