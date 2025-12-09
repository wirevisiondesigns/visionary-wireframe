import { useState } from "react";
import { Send, Upload, X } from "lucide-react";

const ContactForm = () => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

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

        {/* REAL submission using FormSubmit */}
        <form
          action="https://formsubmit.co/wirevisiondesignsllc@gmail.com"
          method="POST"
          encType="multipart/form-data"
          className="max-w-2xl mx-auto"
        >
          {/* FormSubmit settings */}
          <input type="hidden" name="_subject" value="New Quote Request from Website" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="https://wirevisiondesigns.com/thank-you" />

          <div className="space-y-6">

            {/* Name */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card placeholder:text-muted-foreground focus:ring-2 focus:ring-primary transition"
                  placeholder="Your name"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card placeholder:text-muted-foreground focus:ring-2 focus:ring-primary transition"
                  placeholder="Your company"
                />
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card placeholder:text-muted-foreground focus:ring-2 focus:ring-primary transition"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card placeholder:text-muted-foreground focus:ring-2 focus:ring-primary transition"
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
                className="w-full px-4 py-3 rounded-lg border border-border bg-card placeholder:text-muted-foreground focus:ring-2 focus:ring-primary transition resize-none"
                placeholder="Describe your project..."
              />
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Attach Files <span className="text-muted-foreground text-xs">(PDF, DWG, DXF, JPG, PNG)</span>
              </label>

              <input
                type="file"
                name="attachments"
                multiple
                accept=".pdf,.dwg,.dxf,.png,.jpg,.jpeg"
                onChange={handleFileChange}
                className="hidden"
                id="files"
              />

              <label
                htmlFor="files"
                className="block border-2 border-dashed border-border rounded-lg p-6 text-center cursor-pointer hover:border-primary transition"
              >
                <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">
                  <span className="text-primary font-medium">Click to upload</span> or drag and drop
                </p>
              </label>

              {files.length > 0 && (
                <div className="mt-4 space-y-2">
                  {files.map((file, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between px-4 py-2 border rounded-lg bg-card"
                    >
                      <span className="text-sm truncate max-w-[200px]">{file.name}</span>
                      <button type="button" onClick={() => removeFile(i)}>
                        <X className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition flex items-center justify-center gap-2"
            >
              Request a Quote
              <Send className="w-5 h-5" />
            </button>

          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
