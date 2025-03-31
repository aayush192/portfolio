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
        img:ravnImg
      },
      {
        title: "Game App",
        description: "Game to test your thinking",
        tech: ["React", "Node", "Tailwind"],
        link: "https://github.com/aayush192/trhunt",
        img:trhuntImg
      },
      {
        title: "Portfolio Website",
        description: "Responsive portfolio website with dark mode",
        tech: ["React", "Tailwind"],
        link: "https://github.com/aayush192/todo-react",
        img:todoImg
      },
    ];
  
    return (
      <section id="projects" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-100 mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a href={project.link} target="_blank"
                key={index}
                className="bg-gray-800 rounded-xl p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="h-48 bg-gray-700 rounded-lg mb-4">
                    <img src={project.img} alt='project img' />
                </div>
                <h3 className="text-xl font-bold text-gray-100 mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
