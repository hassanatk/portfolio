import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";

function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_rkzyqug",
        "template_dfcmlft",
        form.current,
        "kLrC341yNYJB9nEcX"
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("❌ Failed to send message.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#030712] text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16"
        >
          Contact <span className="gradient-text">Me</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <h3 className="text-3xl font-bold mb-8">
              Let's Work Together
            </h3>

            <div className="space-y-8">

              <div className="flex items-center gap-5">
                <FaEnvelope className="text-3xl text-blue-500" />
                <div>
                  <p className="text-gray-400">Email</p>
                  <p>Hassanworkme03@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaPhone className="text-3xl text-blue-500" />
                <div>
                  <p className="text-gray-400">Phone</p>
                  <p>+92 318 9434251</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaLocationDot className="text-3xl text-blue-500" />
                <div>
                  <p className="text-gray-400">Location</p>
                  <p>Islamabad, Pakistan</p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="glass-card p-8 space-y-6"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full rounded-xl p-4 bg-[#111827] border border-gray-700 focus:border-blue-500 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full rounded-xl p-4 bg-[#111827] border border-gray-700 focus:border-blue-500 outline-none"
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              required
              className="w-full rounded-xl p-4 bg-[#111827] border border-gray-700 focus:border-blue-500 outline-none resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition-all duration-300 font-semibold"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;