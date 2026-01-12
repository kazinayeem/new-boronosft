import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { teamMembers } from '../../data/siteData';

const Team = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Meet the <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Leadership Team</span>
          </h2>
          <p className="section-subheading">
            Senior leaders who ensure delivery quality, architecture rigor, and client success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="card text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                {member.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
              <p className="text-sm text-gray-600 mb-2">{member.focus}</p>
              <p className="text-xs text-gray-500">{member.experience}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
            <Users size={18} className="text-blue-600" />
            <span className="text-sm text-gray-700">50+ engineers, designers, QA, and DevOps specialists across Bangladesh, UAE, and UK</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
