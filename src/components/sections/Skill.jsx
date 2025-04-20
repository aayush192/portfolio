import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "React", level: "90%", color: "from-indigo-500 to-purple-600" },
    { name: "JavaScript", level: "87%", color: "from-purple-400 to-indigo-600" },
    { name: "Node.js", level: "68%", color: "from-indigo-600 to-purple-500" },
    { name: "HTML5", level: "95%", color: "from-purple-500 to-indigo-700" },
    { name: "Tailwind CSS", level: "70%", color: "from-indigo-400 to-purple-600" },
    { name: "C++", level: "70%", color: "from-purple-600 to-indigo-500" },
    { name: "C", level: "75%", color: "from-indigo-500 to-purple-700" },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-100 mb-12 text-center bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-500">
          My Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
              className="bg-gray-800/50 rounded-xl p-6 border border-indigo-500/20 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-100">{skill.name}</h3>
                <span className="text-sm text-indigo-400">{skill.level}</span>
              </div>
              <div className="relative pt-1">
                <div className="overflow-hidden h-3 bg-gray-700/50 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, type: "spring" }}
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Icons Grid */}
        <div className="grid grid-cols-3 md:grid-cols-7 gap-8 mt-16 px-6">
          {[
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg", alt: "JavaScript" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", alt: "C++" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", alt: "C" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", alt: "Tailwind CSS" },
          ].map((icon, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={icon.src}
                alt={icon.alt}
                className="h-12 w-12 hover:scale-125 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;