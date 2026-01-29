import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Linkedin, Github, Globe, MapPin } from 'lucide-react';

const TeamModal = ({ isOpen, member, onClose }) => {
  if (!member) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} className="text-gray-600" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 flex flex-col items-center justify-center md:min-h-[500px]">
                <div className="w-48 h-48 rounded-full border-4 border-white overflow-hidden shadow-xl mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold text-white text-center mb-2">{member.name}</h2>
                <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full">
                  {member.role}
                </span>
              </div>

              {/* Content Side */}
              <div className="p-8 flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.title}</h3>

                <div className="flex items-center gap-2 text-gray-600 mb-6">
                  <MapPin size={16} />
                  <span className="text-sm">{member.location}</span>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">{member.description}</p>

                {/* Social Links */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Connect</h4>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`mailto:${member.email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-gradient-to-br from-red-500 to-pink-600 text-white hover:shadow-lg transition-all duration-300 hover:scale-110"
                      title="Email"
                    >
                      <Mail size={18} />
                    </a>
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 text-white hover:shadow-lg transition-all duration-300 hover:scale-110"
                        title="LinkedIn"
                      >
                        <Linkedin size={18} />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 text-white hover:shadow-lg transition-all duration-300 hover:scale-110"
                        title="GitHub"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 text-white hover:shadow-lg transition-all duration-300 hover:scale-110"
                        title="Twitter"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-[18px] h-[18px]"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 9-1.5 11-5.5s1.75-4.5 1.75-4.5z" />
                        </svg>
                      </a>
                    )}
                    {member.social.portfolio && (
                      <a
                        href={member.social.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 text-white hover:shadow-lg transition-all duration-300 hover:scale-110"
                        title="Portfolio"
                      >
                        <Globe size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-6 border-t border-gray-200">
                  <a
                    href={`mailto:${member.email}`}
                    className="block w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TeamModal;
