import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import portfolioImg from "../../../img/portfolio.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 px-6 py-20 relative overflow-hidden">
      
      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none opacity-10 z-0">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-purple-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        {/* Profile Image */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 rotate-6" />
          <div className="relative overflow-hidden rounded-2xl border-4 border-indigo-500/40 shadow-2xl">
            <img
              src={portfolioImg}
              alt="Aayush Khadka"
              className="w-72 h-72 object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/60" />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex-1 text-center lg:text-left"
        >
          <div className="mb-8">
            <span className="font-mono text-indigo-400 tracking-widest">
              &lt;code&gt;
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-500 text-transparent">
  Aayush Khadka
</h1>

            <span className="font-mono text-indigo-400 tracking-widest">
              &lt;/code&gt;
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-100 mb-6">
            Crafting <span className="text-purple-400">Innovative Interfaces</span>
          </h2>
          
          <p className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Frontend engineer focused on React and modern web technologies. Building 
            seamless, dynamic, and visually stunning applications with a passion for UX.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12">
            <motion.a
              href="#projects"
              whileHover={{ y: -3 }}
              className="relative px-8 py-4 bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-lg font-medium flex items-center gap-2 shadow-lg hover:shadow-purple-500/40 transition-shadow"
            >
              <span>View Projects</span>
              <FaArrowDown className="animate-pulse" />
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ y: -3 }}
              className="px-8 py-4 border-2 border-indigo-500/50 text-indigo-300 rounded-lg font-medium hover:bg-indigo-500/20 transition-colors"
            >
              Get in Touch
            </motion.a>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-6">
            <span className="text-gray-300 font-mono text-sm tracking-widest">
              FIND ME ONLINE
            </span>
            <div className="flex gap-6">
              {[
                { icon: <FaGithub />, link: "https://github.com/aayush192", label: "GitHub" },
                { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/aayush-khadka192", label: "LinkedIn" },
                { icon: <FaEnvelope />, link: "mailto:ayushkhadka9847@email.com", label: "Email" }
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Link to ${item.label}`}
                  whileHover={{ scale: 1.2 }}
                  className="p-4 bg-gray-800/50 rounded-lg hover:bg-purple-500/20 hover:text-purple-300 transition-colors"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <FaArrowDown className="text-3xl text-indigo-400 opacity-60" />
      </motion.div>
    </section>
  );
}
