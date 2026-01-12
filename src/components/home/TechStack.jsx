import { motion } from 'framer-motion';
import { technologies } from '../../data/siteData';

const TechStack = () => {
  const categories = {
    frontend: technologies.filter(t => t.category === 'frontend'),
    backend: technologies.filter(t => t.category === 'backend'),
    database: technologies.filter(t => t.category === 'database'),
    cloud: technologies.filter(t => t.category === 'cloud'),
    devops: technologies.filter(t => t.category === 'devops'),
    language: technologies.filter(t => t.category === 'language'),
  };

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Technology Stack</span>
          </h2>
          <p className="section-subheading">
            We leverage cutting-edge technologies to build robust, scalable, and future-proof solutions
          </p>
        </motion.div>

        {/* Technology Categories */}
        <div className="space-y-12">
          {Object.entries(categories).map(([category, techs], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-bold text-gray-700 mb-4 capitalize">
                {category === 'devops' ? 'DevOps' : category}
              </h3>
              <div className="flex flex-wrap gap-4">
                {techs.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="px-6 py-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <span className="font-semibold text-gray-800">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 card bg-gradient-to-br from-blue-600 to-purple-600 text-white"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Why Our Technology Stack Matters
            </h3>
            <p className="text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We carefully select each technology based on project requirements, ensuring optimal performance, 
              security, and scalability. Our tech stack enables rapid development, easy maintenance, and 
              seamless integration with existing systems, giving your business a competitive edge.
            </p>
          </div>
        </motion.div>

        {/* Logos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['JavaScript', 'React', 'Node.js', 'MongoDB', 'AWS', 'Docker'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="card flex items-center justify-center h-24 cursor-pointer"
              >
                <span className="font-bold text-gray-700 text-lg">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
