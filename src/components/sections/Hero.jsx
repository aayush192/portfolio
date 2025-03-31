import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="container mx-auto px-6 text-center flex flex-col items-center">
        <motion.img
          src="../../../img/portfolio.jpg"
          alt="Aayush Khadka"
          className="w-40 h-40 rounded-full mb-6 border-4 border-emerald-500 shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <h1 className="text-4xl md:text-6xl font-bold text-gray-100 mb-2">
          Aayush Khadka
        </h1>
        <h2 className="text-2xl md:text-4xl font-medium text-emerald-400 mb-4">
          Frontend Developer
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-6 max-w-lg">
          Passionate about building interactive and responsive web applications.
        </p>
        
        {/* Skills Section */}
        <div className="mb-8 bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-200 mb-2">Skills</h3>
          <p className="text-lg text-gray-400">HTML, CSS, JavaScript, React, Node.js</p>
        </div>
        
        {/* Call to Action */}
        <div className="flex space-x-4 mb-6">
          <a
            href="projects"
            className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            View Work
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border border-emerald-500 text-emerald-500 rounded-lg hover:bg-emerald-500 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 text-gray-400">
          <a href="https://github.com/aayush192" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl hover:text-white transition-all duration-300" />
          </a>
          <a href="https://linkedin.com/in/aayush192" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl hover:text-white transition-all duration-300" />
          </a>
          <a href="mailto:your-email@example.com">
            <FaEnvelope className="text-3xl hover:text-white transition-all duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
