import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import hero from "../assets/profile.png";

function Hero({ data }) {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#030712] text-white flex items-center pt-24 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-[140px] animate-pulse"></div>

      <div className="absolute bottom-20 -right-32 w-[450px] h-[450px] bg-cyan-500/20 rounded-full blur-[160px] animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <span className="text-blue-500 text-lg font-semibold tracking-wider">
            Hello, I'm
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mt-4 leading-tight">
            <span className="gradient-text">{data.name}</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-400 mt-4">
            {data.role}
          </h2>

          <p className="text-gray-400 leading-8 mt-8 max-w-xl">
            {data.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/30 inline-flex justify-center items-center"
            >
              View Resume
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-xl border border-blue-500 hover:bg-blue-600 hover:border-blue-600 hover:scale-105 transition-all duration-300 inline-flex justify-center items-center"
            >
              Get In Touch
            </a>

          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-10 text-3xl">

            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 hover:-translate-y-2 hover:scale-125 hover:shadow-[0_0_20px_rgba(59,130,246,.5)] transition-all duration-300 rounded-full"
            >
              <FaGithub />
            </a>

            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 hover:-translate-y-2 hover:scale-125 hover:shadow-[0_0_20px_rgba(59,130,246,.5)] transition-all duration-300 rounded-full"
            >
              <FaLinkedin />
            </a>

            <a
              href={data.email}
              className="text-white hover:text-blue-500 hover:-translate-y-2 hover:scale-125 hover:shadow-[0_0_20px_rgba(59,130,246,.5)] transition-all duration-300 rounded-full"
            >
              <FaEnvelope />
            </a>

          </div>

        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -10, 0],
          }}
          transition={{
            opacity: { duration: 0.8 },
            x: { duration: 0.8 },
            y: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative flex items-center justify-center">

            {/* Available Badge */}
            <div className="absolute top-5 right-5 z-20 bg-[#111827] border border-blue-500 px-4 py-2 rounded-full shadow-lg">
              <span className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                Available for Work
              </span>
            </div>

            {/* Outer Glow */}
            <div className="absolute w-[330px] h-[330px] md:w-[430px] md:h-[430px] rounded-full bg-blue-600 opacity-25 blur-[90px]"></div>

            {/* Circle */}
            <div className="relative w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-full border-4 border-blue-500 overflow-hidden shadow-[0_0_60px_rgba(37,99,235,.45)]">

              <img
                src={hero}
                alt={data.name}
                className="w-full h-full object-cover object-center hover:scale-105 transition duration-500"
              />

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;