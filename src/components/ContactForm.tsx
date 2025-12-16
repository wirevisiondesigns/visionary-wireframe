import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Upload file to file.io (external link only)
  const uploadFileToFileIO = async (): Promise<string | null> => {
    if (!file) return null;

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("https://file.io/?expires=1w", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (!data.success) {
      throw new Error("File upload failed");
    }

    return data.link;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      let attachmentLink = "No file attached";

      if (file) {
        attachmentLink = (await uploadFileToFileIO()) || attachmentLink;
      }

      await emailjs.send(
        "service_iukubsk",
        "template_bx8il2j",
        {
          name,
          company,
          email,
          phone,
          details,
          attachments: attachmentLink,
        },
        "X4K1XZNFxV9Xe6V4T"
      );

      setSuccess("Quote request sent successfully!");
      setName("");
      setCompany("");
      setEmail("");
      setPhone("");
      setDetails("");
      setFile(null);
    } catch (err) {
      console.error(err);
      setError("Submission failed. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative py-32 bg-background text-foreground z-10"
    >
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Request a Quote
        </h2>
        <p className="text-muted-foreground text-center mb-10">
          Share your project details and we’ll get back to you within 24 hours.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Name *"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground"
          />

          <input
            type="text"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground"
          />

          <input
            type="email"
            placeholder="Email *"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground"
          />

          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground"
          />

          <textarea
            placeholder="Project Details *"
            required
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            rows={5}
            className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground"
          />

          <input
            type="file"
            onChange={(e) =>
              setFile(e.target.files ? e.target.files[0] : null)
            }
            className="w-full text-sm text-muted-foreground"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-lg bg-primary text-white font-semibold hover:opacity-90 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-500 text-center font-medium">
              {success}
            </p>
          )}
          {error && (
            <p className="text-red-500 text-center font-medium">
              {error}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
