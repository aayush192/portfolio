import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skill';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

function App() {
  return (
   
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-gray-100">
        <Navbar />
        <Hero/>
        <Projects/>
        <Skills/>
        <Contact/>
        <Footer />
      </div>
   
  );
}

export default App;