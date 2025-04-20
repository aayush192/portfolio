import { motion } from "framer-motion";
import trhuntImg from "../../../img/TRhunt.png";
import ravnImg from "../../../img/ravn.png";
import todoImg from "../../../img/todo.png";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with CSS and JS",
      tech: ["React", "CSS"],
      link: "https://github.com/aayush192/ravn",
      img: ravnImg
    },
    {
      title: "Game App",
      description: "Game to test your thinking",
      tech: ["React", "Node", "Tailwind"],
      link: "https://github.com/aayush192/trhunt",
      img: trhuntImg
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website with dark mode",
      tech: ["React", "Tailwind"],
      link: "https://github.com/aayush192/todo-react",
      img: todoImg
    },
  ];

  return (
    <section id="projects" className="relative py-20 bg-gradient-to-bl from-purple-900 via-indigo-900 to-gray-900 overflow-hidden">
      
      {/* Shared Background Particles */}
      <div className="absolute inset-0 pointer-events-none opacity-10 z-0">
        {[...Array(30)].map((_, i) => (
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

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-500">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="group relative bg-gray-800/30 rounded-2xl p-6 border-2 border-indigo-500/30 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-3 hover:shadow-xl hover:shadow-purple-500/30 backdrop-blur-sm"
            >
              <div className="absolute -inset-2 bg-gradient-to-br from-indigo-600 to-purple-500 rounded-2xl opacity-10 group-hover:opacity-25 transition duration-300 z-0" />

              <div className="relative h-48 rounded-lg mb-4 overflow-hidden z-10">
                <img
                  src={project.img}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-400 mb-2 z-10 relative">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-4 leading-relaxed z-10 relative">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 z-10 relative">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm group-hover:bg-purple-500/30 group-hover:text-purple-300 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
