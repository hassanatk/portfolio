import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFire,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

const icons = {
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  JavaScript: <FaJs />,
  React: <FaReact />,
  "Tailwind CSS": <SiTailwindcss />,
  Git: <FaGitAlt />,
  GitHub: <FaGithub />,
  Firebase: <FaFire />,
};

function Skills({ skills }) {
  return (
    <section
      id="skills"
      className="py-24 bg-[#030712] text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-5"
        >
          My <span className="gradient-text">Tech Stack</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-400 max-w-2xl mx-auto mb-16"
        >
          Technologies I use to build fast, responsive and modern web applications.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              className="glass-card rounded-2xl p-8 flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="text-6xl text-blue-500 mb-5 transition duration-300 group-hover:scale-125 group-hover:rotate-6">
                {icons[skill]}
              </div>

              <h3 className="text-xl font-semibold">
                {skill}
              </h3>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;