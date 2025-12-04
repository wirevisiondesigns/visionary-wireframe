import { useState } from "react";
import { Send, Upload, X, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    details: "",
  });
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Quote Request Submitted!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: "", company: "", email: "", phone: "", details: "" });
    setFiles([]);
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
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
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="space-y-6">
            {/* Name and Company */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="Your company"
                />
              </div>
            </div>

            {/* Email and Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            {/* Project Details */}
            <div>
              <label htmlFor="details" className="block text-sm font-medium mb-2">
                Project Details <span className="text-primary">*</span>
              </label>
              <textarea
                id="details"
                name="details"
                value={formData.details}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                placeholder="Describe your project, system types, and any specific requirements..."
              />
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Attach Files <span className="text-muted-foreground text-xs">(Plans, PDFs, DWGs)</span>
              </label>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                <input
                  type="file"
                  id="files"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".pdf,.dwg,.dxf,.png,.jpg,.jpeg"
                />
                <label htmlFor="files" className="cursor-pointer">
                  <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">
                    <span className="text-primary font-medium">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground/70 mt-1">
                    PDF, DWG, DXF, PNG, JPG
                  </p>
                </label>
              </div>

              {/* File list */}
              {files.length > 0 && (
                <div className="mt-4 space-y-2">
                  {files.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between px-4 py-2 rounded-lg bg-card border border-border"
                    >
                      <span className="text-sm text-muted-foreground truncate max-w-[200px]">
                        {file.name}
                      </span>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 glow-accent flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Request a Quote
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
