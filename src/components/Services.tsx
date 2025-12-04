import { 
  Bell, 
  Shield, 
  Camera, 
  KeyRound, 
  Radio, 
  GitBranch 
} from "lucide-react";

const services = [
  {
    icon: Bell,
    title: "Fire Alarm Shop Drawings",
    description: "Permit-ready plans including device layouts, wiring, risers, battery calcs, and voltage drop calcs. Fully compliant with NFPA and AHJ requirements.",
  },
  {
    icon: Shield,
    title: "Security System Drawings",
    description: "Intrusion layouts, door contacts, motions, glass breaks, wiring paths, and clean system documentation.",
  },
  {
    icon: Camera,
    title: "CCTV Layout & Design",
    description: "Camera coverage layouts, lens recommendations, NVR placement, and cable route maps.",
  },
  {
    icon: KeyRound,
    title: "Access Control Drawings",
    description: "Door hardware layouts, power supplies, panel terminations, network diagrams, and device schedules.",
  },
  {
    icon: Radio,
    title: "Special Systems / Life Safety",
    description: "Mass notification, intercom, nurse call, emergency communication, and specialty low-voltage system drawings.",
  },
  {
    icon: GitBranch,
    title: "Riser Diagrams & Calculations",
    description: "Clear, organized risers and required system calculations for submittals and permitting.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Complete Low-Voltage Drawing Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional shop drawings for every system, delivered fast and permit-ready.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-lg border border-border bg-card hover:border-primary/30 hover:bg-secondary/30 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
