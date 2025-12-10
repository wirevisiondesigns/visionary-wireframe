import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, Upload, X } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // ⭐ DIAGNOSTIC LINE — SHOULD APPEAR IN BROWSER CONSOLE
    console.log("FORM SUBMITTED");

    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "service_ox87hbr",      // Your EmailJS Service ID
        "template_l3lk4o3",     // Your EmailJS Template ID
        formRef.current,        // Form Reference
        "mD1dBY0Dq0EPMZEam"     // Your Public Key
      );

      toast({
        title: "Quote Request Submitted!",
        description: "Thank you! We'll get back to you within 24 hours.",
      });

      formRef.current.reset();
      setFiles([]);

    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 relative z-10">

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

        {/* EMAILJS FORM */}
        <form ref={formRef} onSubmit={sendEmail} className="max-w-2xl mx-auto">
          <div className="space-y-6">

            {/* Name + Company */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 border rounded-lg"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  className="w-full px-4 py-3 border rounded-lg"
                  placeholder="Your company"
                />
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border rounded-lg"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="block mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-3 border rounded-lg"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            {/* Project Details */}
            <div>
              <label className="block mb-2">Project Details *</label>
              <textarea
                name="details"
                required
                rows={5}
                className="w-full px-4 py-3 border rounded-lg"
                placeholder="Describe your project..."
              />
            </div>

            {/* Attachments */}
            <div>
              <label className="block mb-2">Attach File</label>
              <input
                type="file"
                name="attachment"
                multiple
                className="hidden"
                id="fileUpload"
                onChange={handleFileChange}
              />

              <label
                htmlFor="fileUpload"
                className="block border p-6 text-center rounded-lg cursor-pointer hover:border-primary"
              >
                <Upload className="w-8 h-8 mx-auto mb-3" />
                <p>Click to upload or drag and drop</p>
              </label>

              {files.length > 0 && (
                <div className="mt-4 space-y-2">
                  {files.map((file, index) => (
                    <div key={index} className="flex justify-between border p-2 rounded">
                      <span>{file.name}</span>
                      <button type="button" onClick={() => removeFile(index)}>
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-primary text-white rounded-lg"
            >
              {isSubmitting ? "Sending..." : "Request a Quote"}
              <Send className="w-5 h-5 ml-2" />
            </button>

          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

export default ContactForm;


