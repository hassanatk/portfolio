import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaLocationDot,
} from "react-icons/fa6";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#journey" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-3 gap-12">

          {/* Left */}
          <div>

            <a href="#home">
  <img
    src="/favicon.png"
    alt="MH Logo"
    className="w-20 h-20 object-contain hover:scale-105 transition"
  />
</a>

            <h3 className="text-2xl font-bold mt-5">
              Frontend Developer
            </h3>

            <p className="text-gray-400 mt-4 leading-8">
              Passionate about building modern, responsive and
              user-friendly web applications using React,
              JavaScript, Tailwind CSS and Firebase.
            </p>

            <span className="inline-block mt-6 px-4 py-2 rounded-full bg-green-500/10 text-green-400 border border-green-500/30 text-sm">
              🟢 Available for Work
            </span>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-4">

              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-blue-500 hover:translate-x-1 transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold mb-6">
              Get In Touch
            </h3>

            <div className="space-y-4 text-gray-400">

              <p className="flex items-center gap-3">
                <FaEnvelope className="text-blue-500" />
                Hassanworkme03@gmail.com
              </p>

              <p className="flex items-center gap-3">
                <FaLocationDot className="text-blue-500" />
                Islamabad, Pakistan
              </p>

            </div>

            <div className="flex gap-4 mt-8">

              <a
                href="https://github.com/hassanatk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#111827] border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/muhammad-hassan-2917b9382/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#111827] border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:Hassanworkme03@gmail.com"
                className="w-12 h-12 rounded-full bg-[#111827] border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent my-12"></div>

        {/* Bottom */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-sm text-gray-400">

          <p>
            © {new Date().getFullYear()} Muhammad Hassan. All Rights Reserved.
          </p>

          <p className="text-center">
            Built with <span className="text-red-400">❤️</span> using
            <span className="text-blue-400"> React</span>,
            <span className="text-cyan-400"> Tailwind CSS</span> &
            <span className="text-yellow-400"> Firebase</span>.
          </p>

          <a
            href="#home"
            className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition"
          >
            <FaArrowUp />
            Back to Top
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;