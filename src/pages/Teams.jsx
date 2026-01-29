import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Globe, MapPin, Briefcase } from 'lucide-react';
import { teamMembers } from '../data/siteData';

const Teams = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Header */}
      <section className="container-custom mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase">
              Our Leadership
            </span>
          </div>
          <h1 className="section-heading mb-6">
            Meet the <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Leadership Team</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Senior leaders who ensure delivery quality, architecture rigor, and client success
          </p>
        </motion.div>
      </section>

      {/* Team Members Grid */}
      <section className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              {/* Card with Glassmorphism */}
              <div className="relative">
                {/* Gradient Border Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500"></div>

                {/* Main Card */}
                <div className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500">
                  {/* Profile Image Section */}
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 text-center">
                    <div className="w-40 h-40 mx-auto rounded-full border-4 border-white overflow-hidden shadow-xl mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                    <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full">
                      {member.role}
                    </span>
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    <div className="flex items-center gap-2 text-blue-600 mb-4">
                      <Briefcase size={18} />
                      <span className="text-sm font-semibold">{member.title}</span>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {member.description}
                    </p>

                    <div className="flex items-center gap-2 text-gray-500 mb-6 pb-6 border-b border-gray-200">
                      <MapPin size={16} />
                      <span className="text-sm">{member.location}</span>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={`mailto:${member.email}`}
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-custom mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Want to Work With Us?</h2>
          <p className="text-xl mb-8 opacity-90">
            We're always looking for talented people to join our team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/careers"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              View Open Positions
            </a>
            <a
              href="/contact"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Teams;
