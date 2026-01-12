import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Users } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    { id: 1, title: 'E-commerce Platform Transformation', client: 'TechMart Inc.', results: '150% increase in sales' },
    { id: 2, title: 'Restaurant POS System', client: 'FoodChain Restaurants', results: '40% faster order processing' },
    { id: 3, title: 'Education Platform Development', client: 'EduLearn Global', results: '50K+ active students' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="section-heading mb-4">
            Case <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Studies</span>
          </h1>
          <p className="section-subheading">
            Real-world success stories from businesses we've helped transform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card hover:scale-105 transition-transform duration-300"
            >
              <Briefcase size={48} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">{study.title}</h3>
              <p className="text-gray-600 mb-3">{study.client}</p>
              <div className="flex items-center space-x-2 text-green-600 font-semibold">
                <TrendingUp size={20} />
                <span>{study.results}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
