import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";


const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 120;
        const sectionId = section.getAttribute("id");

        if (
          scrollY >= sectionTop &&
          scrollY < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex justify-between items-center">

{/* Logo */}
<motion.a
  href="#home"
  whileHover={{ scale: 1.08 }}
  className="text-4xl font-black tracking-tight cursor-pointer"
>
  <span className="text-white">M</span>
  <span className="text-blue-500">H</span>
</motion.a>
        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`relative transition duration-300 group ${
                  activeSection === link.href.substring(1)
                    ? "text-blue-500"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}

                <span
                  className={`absolute left-0 -bottom-2 h-[2px] bg-blue-500 transition-all duration-300 ${
                    activeSection === link.href.substring(1)
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-2xl text-white"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0f172a] border-t border-gray-800">

          <ul className="flex flex-col items-center gap-6 py-6">

            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`transition ${
                    activeSection === link.href.substring(1)
                      ? "text-blue-500"
                      : "text-gray-300 hover:text-blue-500"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}

          </ul>

        </div>
      )}

    </header>
  );
}

export default Navbar;