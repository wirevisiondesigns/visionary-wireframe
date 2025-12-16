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

  const uploadFile = async (): Promise<string | null> => {
    if (!file) return null;

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("https://file.io/?expires=1w", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (!data.success) {
      throw new Error("File upload failed");
    }

    return data.link;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      let attachmentLink = "No file attached";

      if (file) {
        attachmentLink = await uploadFile();
      }

      await emailjs.send(
        "service_ox87hbr",
        "template_l3lk4o3",
        {
          name,
          company,
          email,
          phone,
          details,
          attachments: attachmentLink,
        },
        "mD1dBY0Dq0EPMZEam"
      );

      setSuccess("Your request has been sent successfully.");
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
    <section id="contact" className="scroll-mt-24 py-24">
      <div className="max-w-xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold text-white">Request a Quote</h2>
        <p className="text-gray-400 mt-2">
          Share your project details and we’ll get back to you within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 rounded bg-gray-900 text-white border border-gray-700"
        />

        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full p-3 rounded bg-gray-900 text-white border border-gray-700"
        />

        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded bg-gray-900 text-white border border-gray-700"
        />

        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-3 rounded bg-gray-900 text-white border border-gray-700"
        />

        <textarea
          placeholder="Project Details"
          required
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className="w-full p-3 rounded bg-gray-900 text-white border border-gray-700 min-h-[140px]"
        />

        <input
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="text-white"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded font-semibold"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {success && <p className="text-green-500 text-center">{success}</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}
      </form>
    </section>
  );
};

export default ContactForm;

};

export default ContactForm;
