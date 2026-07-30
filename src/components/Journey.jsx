import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBriefcase,
  FaLaptopCode,
} from "react-icons/fa";

const journey = [
  {
    icon: <FaGraduationCap />,
    year: "2025 - Present",
    title: "Bachelor of Science in Computer Science",
    company: "Iqra University Islamabad",
    description:
      "Currently pursuing BSCS while building a strong foundation in programming, data structures, algorithms, and modern web development.",
  },
  {
    icon: <FaBriefcase />,
    year: "2025",
    title: "Frontend Developer Intern",
    company: "MindSpark Islamabad",
    description:
      "Completed a 5-month internship focused on React, JavaScript, responsive web design, and modern UI development while collaborating on real-world projects.",
  },
  {
    icon: <FaLaptopCode />,
    year: "2025 - Present",
    title: "Part-Time Frontend Developer",
    company: "1+ Year Experience",
    description:
      "Building responsive React applications using Tailwind CSS, Firebase, Git, and GitHub while continuously improving frontend development skills.",
  },
];

function Journey() {
  return (
    <section
      id="journey"
      className="py-24 bg-[#030712] text-white scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center mb-5"
        >
          My <span className="gradient-text">Experience</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-400 max-w-2xl mx-auto mb-20"
        >
          My education and professional journey as a Frontend Developer.
        </motion.p>

        <div className="relative border-l-2 border-blue-500 ml-6">

          {journey.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              className="relative mb-14 ml-10"
            >
              {/* Timeline Icon */}
              <div className="absolute -left-[62px] top-2 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-[0_0_20px_rgba(37,99,235,.5)]">
                {item.icon}
              </div>

              {/* Card */}
              <div className="glass-card p-6">

                <span className="text-blue-400 font-semibold">
                  {item.year}
                </span>

                <h3 className="text-2xl font-bold mt-2">
                  {item.title}
                </h3>

                <h4 className="text-blue-500 mt-2 font-medium">
                  {item.company}
                </h4>

                <p className="text-gray-400 leading-7 mt-4">
                  {item.description}
                </p>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Journey;