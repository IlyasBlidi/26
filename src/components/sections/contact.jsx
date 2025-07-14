import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { RevealOnScroll } from "..";
import { ripple } from "@/utils";
import {
  SendHorizonal,
  Mail,
  MessageSquareText,
  UserRound,
  Github,
  Linkedin,
  Copyright,
} from "lucide-react";

export const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("Oops! Something went wrong. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="min-h-dvh py-20 flex flex-col md:items-center"
    >
      <RevealOnScroll>
        <div className="px-4 w-full md:w-[500px] p-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-32 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full shadow-lg shadow-blue-500/30"></div>
          </div>

          {/* Form */}
          <form className="space-y-6" ref={form} onSubmit={handleSubmit}>
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="peer w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 pl-11 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 backdrop-blur-sm hover:border-slate-600/50"
                placeholder="Name..."
              />
              <UserRound className="absolute left-3 top-3.5 w-5 h-5 text-gray-400 peer-focus:text-blue-500 transition-colors" />
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="peer w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 pl-11 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 backdrop-blur-sm hover:border-slate-600/50"
                placeholder="example@mail.com"
              />
              <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400 peer-focus:text-blue-500 transition-colors" />
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="custom-scroll peer w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 pl-11 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 backdrop-blur-sm hover:border-slate-600/50 resize-none"
                placeholder="Your message..."
              />
              <MessageSquareText className="absolute left-3 top-3.5 w-5 h-5 text-gray-400 peer-focus:text-blue-500 transition-colors" />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              onMouseDown={(e) => ripple.create(e, "dark")}
              className="group w-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:shadow-blue-500/25"
            >
              <span className="text-lg relative z-10 flex items-center justify-center gap-2">
                Send Message
                <SendHorizonal className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </form>
        </div>

        {/* --- Separator Line (Full Width) --- */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent my-8 opacity-30"></div>

        {/* --- Footer Social Links (Full Width) --- */}
        <div className="w-full px-4 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400 text-sm max-w-6xl mx-auto">
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/IlyasBlidi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/ilyas-blidi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <div className="flex items-center gap-1">
              <Copyright className="w-4 h-4" />
              <span>All rights reserved</span>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
