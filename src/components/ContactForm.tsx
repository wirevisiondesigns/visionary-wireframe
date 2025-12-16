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

  // Upload file to File.io
  const uploadFileToFileIO = async () => {
    if (!file) return null;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("https://file.io/?expires=1w", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        return data.link; // URL of uploaded file
      } else {
        throw new Error("File upload failed");
      }
    } catch (err) {
      console.error("File upload error:", err);
      throw err;
    }
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      let attachmentURL = null;

      if (file) {
        attachmentURL = await uploadFileToFileIO();
      }

      const templateParams = {
        name,
        company,
        email,
        phone,
        details,
        attachments: attachmentURL || "No files attached",
      };

      await emailjs.send(
        "service_iukubsk", // your service ID
        "template_bx8il2j", // your template ID
        templateParams,
        "X4K1XZNFxV9Xe6V4T" // your public key
      );

      setSuccess("Message sent successfully!");
      setName("");
      setCompany("");
      setEmail("");
      setPhone("");
      setDetails("");
      setFile(null);
    } catch (err) {
      console.error(err);
      setError("Submission failed. Try again.");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input"
      />

      <input
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="input"
      />

      <input
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input"
      />

      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="input"
      />

      <textarea
        placeholder="Project Details"
        required
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        className="textarea"
      />

      <input
        type="file"
        onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
        className="input"
      />

      <button type="submit" disabled={loading} className="btn">
        {loading ? "Sending..." : "Send Message"}
      </button>

      {success && <p className="text-green-500">{success}</p>}
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default ContactForm;
