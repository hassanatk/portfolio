import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

function Projects({ projects }) {
  return (
    <section
      id="projects"
      className="py-24 bg-[#030712] text-white scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-8">
            A collection of projects showcasing my experience in React,
            JavaScript, Firebase, Tailwind CSS and modern frontend
            development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid lg:grid-cols-2 gap-10"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 50,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{ duration: 0.6 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;