import { motion } from 'framer-motion';
import { clients } from '../../data/siteData';

const Clients = () => {
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
            Trusted by <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Clients</span>
          </h2>
          <p className="section-subheading">
            Partnerships across e-commerce, POS, ERP, EdTech, mobility, and healthcare
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="card h-full flex flex-col items-center justify-center text-center"
            >
              <div className="text-lg font-bold text-gray-900 mb-1">{client.name}</div>
              <div className="text-xs text-blue-600 mb-1">{client.sector}</div>
              <div className="text-xs text-gray-500">{client.result}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
