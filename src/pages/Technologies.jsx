import SEO from '../components/SEO';
import { pageMetadata } from '../config/seo';
import { motion } from 'framer-motion';
import { technologies } from '../data/siteData';

const Technologies = () => {
  const meta = pageMetadata.technologies;
  const categories = {
    frontend: technologies.filter(t => t.category === 'frontend'),
    backend: technologies.filter(t => t.category === 'backend'),
    database: technologies.filter(t => t.category === 'database'),
    cloud: technologies.filter(t => t.category === 'cloud'),
    devops: technologies.filter(t => t.category === 'devops'),
    language: technologies.filter(t => t.category === 'language'),
  };

  return (
    <>
      <SEO 
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
        canonical={meta.canonical}
      />
      <div className="min-h-screen pt-32 pb-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="section-heading mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Technologies</span>
          </h1>
          <p className="section-subheading">
            Cutting-edge technologies we use to build world-class solutions
          </p>
        </motion.div>

        <div className="space-y-12">
          {Object.entries(categories).map(([category, techs], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 capitalize">
                {category === 'devops' ? 'DevOps' : category}
              </h2>
              <div className="flex flex-wrap gap-4">
                {techs.map((tech) => (
                  <span
                    key={tech.name}
                    className="px-6 py-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200 font-semibold text-gray-800"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default Technologies;
