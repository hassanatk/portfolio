import about from "../assets/about.png";
import { motion } from "framer-motion";

function About({ data }) {
  return (
    <section
      id="about"
      className="scroll-mt-24 py-24 bg-[#030712] text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16"
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 bg-blue-600 blur-[100px] opacity-20 rounded-3xl"></div>

              <div className="relative glass-card p-6 rounded-3xl border border-blue-500/20 hover:border-blue-500 transition duration-500">

                <img
                  src={about}
                  alt="Developer Illustration"
                  className="w-[360px] md:w-[430px] object-contain hover:scale-105 transition duration-500"
                />

              </div>

            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">
              {data.role}
            </h3>

            <p className="text-gray-400 leading-8">
              {data.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">

              <div className="glass-card p-5">
                <h4 className="text-blue-500 font-semibold">
                  Name
                </h4>
                <p className="mt-2">{data.name}</p>
              </div>

              <div className="glass-card p-5">
                <h4 className="text-blue-500 font-semibold">
                  Location
                </h4>
                <p className="mt-2">{data.location}</p>
              </div>

              <div className="glass-card p-5">
                <h4 className="text-blue-500 font-semibold">
                  Email
                </h4>
                <p className="mt-2 break-all">
                  {data.email.replace("mailto:", "")}
                </p>
              </div>

              <div className="glass-card p-5">
                <h4 className="text-blue-500 font-semibold">
                  Phone
                </h4>
                <p className="mt-2">{data.phone}</p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;