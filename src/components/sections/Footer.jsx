const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 border-t border-indigo-500/20">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-center md:text-left">
            © 2025 Aayush Khadka
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://github.com/aayush192"
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/aayush-khadka192"
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a 
              href="/aayush-khadka.pdf" 
              download
              className="text-gray-300 hover:text-purple-400 hover:underline transition duration-300">
            Download Resume
            </a>
          
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
