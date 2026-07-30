import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className="glass-card overflow-hidden rounded-3xl group"
    >
      {/* Image */}
      <div className="relative overflow-hidden">

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80"></div>

        {/* Featured Badge */}
        <div className="absolute top-5 left-5 bg-blue-600 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg">
          <FaStar className="text-yellow-300" />
          Featured
        </div>

      </div>

      {/* Content */}
      <div className="p-7">

        <h3 className="text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="text-gray-400 leading-7 mt-4">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-3 mt-6">

          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium transition hover:bg-blue-500 hover:text-white"
            >
              {tech}
            </span>
          ))}

        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex justify-center items-center gap-2 bg-[#111827] border border-white/10 py-3 rounded-xl hover:bg-blue-600 transition-all duration-300"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/30"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>

        </div>

      </div>
    </motion.div>
  );
}

export default ProjectCard;