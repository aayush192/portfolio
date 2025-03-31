const Footer = () => {
    return (
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              © 2023 DevPortfolio. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://github.com/aayush192" className="text-gray-400 hover:text-emerald-500 transition-colors duration-300">
                GitHub
              </a>
              <a href="www.linkedin.com/in/aayush-khadka192" className="text-gray-400 hover:text-emerald-500 transition-colors duration-300">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;