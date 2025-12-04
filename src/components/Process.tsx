import { Send, PenTool, MessageSquare, FileCheck } from "lucide-react";

const steps = [
  {
    icon: Send,
    number: "01",
    title: "Send Your Plans or Scope",
    description: "Share your project details, plans, or scope of work.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "We Draft Your Drawings",
    description: "Our team creates accurate, code-compliant drawings.",
  },
  {
    icon: MessageSquare,
    number: "03",
    title: "You Review & Request Edits",
    description: "Review the drafts and request any revisions needed.",
  },
  {
    icon: FileCheck,
    number: "04",
    title: "Final Delivery: CAD + PDF",
    description: "Receive your permit-ready files, ready for submission.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4">
            Our Process
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Simple. Fast. Professional.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From scope to delivery in four straightforward steps.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-px bg-gradient-to-r from-border to-transparent" />
              )}
              
              <div className="text-center">
                {/* Icon */}
                <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full border border-border bg-card mb-6">
                  <step.icon className="w-8 h-8 text-primary" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
