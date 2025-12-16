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

  // Upload file to file.io (free workaround)
  const uploadFile = async () => {
    if (!file) return "No file attached";

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
    setSuccess(null);
    setError(null);

    try {
      const attachmentLink = await uploadFile();

      await emailjs.send(
        "service_ox87hbr",        // ✅ CORRECT
        "template_l3lk4o3",       // ✅ CORRECT
        {
          name,
          company,
          email,
          phone,
          details,
          attachments: attachmentLink,
        },
        "mD1dBY0Dq0EPMZEam"        // ✅ CORRECT
      );

      setSuccess("Message sent successfully!");
      setName("");
      setCompany("");
      setEmail("");
      setPhone("");
      setDetails("");
      setFile(null);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Submission failed. Please try again.");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Name *"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-3 rounded bg-black border border-gray-700 text-white"
      />

      <input
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="w-full p-3 rounded bg-black border border-gray-700 text-white"
      />

      <input
        type="email"
        placeholder="Email *"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 rounded bg-black border border-gray-700 text-white"
      />

      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full p-3 rounded bg-black border border-gray-700 text-white"
      />

      <textarea
        placeholder="Project Details *"
        required
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        className="w-full p-3 rounded bg-black border border-gray-700 text-white min-h-[120px]"
      />

      <input
        type="file"
        onChange={(e) =>
          setFile(e.target.files ? e.target.files[0] : null)
        }
        className="text-white"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {success && <p className="text-green-500">{success}</p>}
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default ContactForm;
