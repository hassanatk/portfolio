import { motion } from "framer-motion";

function Loading() {
  return (
    <div className="fixed inset-0 bg-[#030712] flex flex-col items-center justify-center z-[999] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[350px] h-[350px] rounded-full bg-blue-600/20 blur-[120px]"></div>

      {/* Animated Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-40 h-40 border border-blue-500/30 rounded-full"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-52 h-52 border border-cyan-500/20 rounded-full"
      />

      {/* Logo */}
      <motion.h1
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{
          scale: [0.95, 1.05, 0.95],
          opacity: 1,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="text-8xl font-black gradient-text relative z-10"
      >
        MH
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-5 text-gray-400 tracking-[0.3em] uppercase text-sm relative z-10"
      >
        Frontend Developer
      </motion.p>

      {/* Loading Text */}
      <motion.p
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="mt-8 text-gray-500 relative z-10"
      >
        Loading Portfolio...
      </motion.p>

      {/* Progress Bar */}
      <div className="w-72 h-2 bg-[#111827] rounded-full mt-8 overflow-hidden relative z-10">

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
          className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600"
        />

      </div>

    </div>
  );
}

export default Loading;