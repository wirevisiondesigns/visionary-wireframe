import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "service_ox87hbr",          // ✅ Your Service ID
        "template_l3lk4o3",         // ✅ Your Template ID
        formRef.current,
        "mD1dBY0Dq0EPMZEam"         // ✅ Your Public Key
      );

      toast({
        title: "Quote Request Submitted!",
        description: "Thank you! We'll get back to you within 24 hours.",
      });

      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Submission Failed",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4">
            Get Started
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Request a Quote
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Share your project details and we'll provide a fast, competitive quote.
          </p>
        </div>

        {/* Form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="max-w-2xl mx-auto space-y-6"
        >
          {/* Name & Company */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Name <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                autoComplete="name"
                className="w-full px-4 py-3 rounded-lg border border-border bg-card"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Company
              </label>
              <input
                type="text"
                name="company"
                autoComplete="organization"
                className="w-full px-4 py-3 rounded-lg border border-border bg-card"
                placeholder="Your company"
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Email <span className="text-primary">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                className="w-full px-4 py-3 rounded-lg border border-border bg-card"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                className="w-full px-4 py-3 rounded-lg border border-border bg-card"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          {/* Project Details */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Project Details <span className="text-primary">*</span>
            </label>
            <textarea
              name="details"
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-border bg-card resize-none"
              placeholder="Describe your project, system types, and requirements..."
            />
          </div>

          {/* Attachment Notice */}
          <div className="text-sm text-muted-foreground bg-secondary/20 border border-border rounded-lg p-4">
            <strong>Attachments:</strong> After submitting, we’ll reply with a secure
            upload link — or you may email files directly to{" "}
            <a
              href="mailto:wirevisiondesignsllc@gmail.com"
              className="text-primary underline"
            >
              wirevisiondesignsllc@gmail.com
            </a>
            .
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {isSubmitting ? "Submitting..." : "Request a Quote"}
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
