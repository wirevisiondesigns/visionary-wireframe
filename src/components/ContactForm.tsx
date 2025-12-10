import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        "service_ox87hbr",      // your EmailJS Service ID
        "template_l3lk4o3",     // your Template ID
        form,
        "mD1dBY0Dq0EPMZEam"     // your Public Key
      );

      setIsSent(true);
      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Something went wrong. Please try again.");
    }

    setIsSending(false);
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

        <form onSubmit={sendEmail} className="max-w-2xl mx-auto">
          <div className="space-y-6">

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2">Name *</label>
                <input type="text" name="name" required className="w-full px-4 py-3 border rounded-lg" />
              </div>

              <div>
                <label className="block mb-2">Company</label>
                <input type="text" name="company" className="w-full px-4 py-3 border rounded-lg" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2">Email *</label>
                <input type="email" name="email" required className="w-full px-4 py-3 border rounded-lg" />
              </div>

              <div>
                <label className="block mb-2">Phone</label>
                <input type="tel" name="phone" className="w-full px-4 py-3 border rounded-lg" />
              </div>
            </div>

            <div>
              <label className="block mb-2">Project Details *</label>
              <textarea name="details" required rows={5} className="w-full px-4 py-3 border rounded-lg" />
            </div>

            <div>
              <label className="block mb-2">
                Attach File (PDF, JPG, PNG)
              </label>
              <input type="file" name="attachment" accept=".pdf,.jpg,.jpeg,.png" />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-full py-4 bg-primary text-white rounded-lg"
            >
              {isSending ? "Sending..." : "Request a Quote"}
            </button>

            {isSent && (
              <p className="text-green-600 mt-4 text-center">
                Your message has been sent!
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

