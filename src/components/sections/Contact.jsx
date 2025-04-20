import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-bl from-purple-900 via-indigo-900 to-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-100 mb-12 bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-500">
          Let’s Connect
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <p className="text-lg text-gray-200">
              I’m excited to hear from you! Fill out the form or reach me directly using the details below to start collaborating on your next project.
            </p>
            <div className="space-y-4 text-gray-200">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-indigo-400" />
                <a
                  href="mailto:ayushkhadka9847.com"
                  className="hover:text-purple-300 transition-colors"
                >
                  ayushkhadka9847@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-indigo-400" />
                 <a
                  href="tel:+9779746367727"
                  className="hover:text-purple-300 transition-colors"
                >
                 +977-9746367727
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-indigo-400" />
                <span>Kathmandu, Nepal</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6 bg-gray-800/50 p-8 rounded-xl border border-indigo-500/20 shadow-lg">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-700/50 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-gray-700/50 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
            </div>
            <div>
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg bg-gray-700/50 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-700 text-white rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-700 transition shadow-md hover:shadow-purple-500/40"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
