import { motion } from "framer-motion";
const Skills = () => {
    const skills = [
      { name: 'React', level: '90%', color: 'from-cyan-500 to-blue-600' },
      { name: 'JavaScript', level: '87%', color: 'from-yellow-400 to-amber-600' },
      { name: 'Node.js', level: '68%', color: 'from-green-500 to-emerald-600' },
      { name: 'HTML5', level: '95%', color: 'from-orange-500 to-red-600' },
      { name: 'Tailwind CSS', level: '70%', color: 'from-sky-400 to-blue-500' },
      { name: 'C++', level: '70%', color: 'from-pink-500 to-purple-600' },
      { name: 'C', level: '75%', color: 'from-blue-400 to-indigo-500' },
    ];
  
    return (
      <section id="skills" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-100 mb-12 text-center">Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
              className="bg-gray-800 rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-100">{skill.name}</h3>
                <span className="text-sm text-emerald-400">{skill.level}</span>
              </div>
              <div className="relative pt-1">
                <div className="overflow-hidden h-3 bg-gray-700 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, type: 'spring' }}
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
  
          {/* Technology Icons Grid */}
          <div className="grid grid-cols-3 md:grid-cols-7 gap-8 mt-16 px-6">
            <div className="flex items-center justify-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                   className="h-12 w-12 hover:scale-125 transition-transform" alt="React" />
            </div>
            <div className="flex items-center justify-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" 
                   className="h-12 w-12 hover:scale-125 transition-transform" alt="JavaScript" />
            </div>
            <div className="flex items-center justify-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
                   className="h-12 w-12 hover:scale-125 transition-transform" alt="Node.js" />
            </div>
            <div className="flex items-center justify-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" 
                   className="h-12 w-12 hover:scale-125 transition-transform" alt="C++" />
            </div>
            <div className="flex items-center justify-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" 
                   className="h-12 w-12 hover:scale-125 transition-transform" alt="C" />
            </div>
            <div className="flex items-center justify-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
                   className="h-12 w-12 hover:scale-125 transition-transform" alt="HTML5" />
            </div>
            <div className="flex items-center justify-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" 
                   className="h-12 w-12 hover:scale-125 transition-transform" alt="Tailwind CSS" />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;