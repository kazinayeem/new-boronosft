import { motion } from 'framer-motion';
import { Users, MapPin, Clock } from 'lucide-react';

const Careers = () => {
  const positions = [
    { id: 1, title: 'Senior React Developer', location: 'Dhaka, Bangladesh', type: 'Full-time' },
    { id: 2, title: 'Node.js Backend Developer', location: 'Remote', type: 'Full-time' },
    { id: 3, title: 'UI/UX Designer', location: 'Dubai, UAE', type: 'Full-time' },
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
            Join Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="section-subheading">
            Build your career with a global software solutions company
          </p>
        </motion.div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {positions.map((position, index) => (
            <motion.div
              key={position.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card hover:scale-102 transition-transform duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">{position.title}</h3>
                  <div className="flex flex-wrap gap-4 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <MapPin size={18} />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock size={18} />
                      <span>{position.type}</span>
                    </div>
                  </div>
                </div>
                <button className="btn-primary mt-4 md:mt-0">Apply Now</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
