import { motion } from 'framer-motion';
import { 
  ShoppingCart, Utensils, Building2, GraduationCap, 
  FileText, Briefcase, Smartphone, Ticket 
} from 'lucide-react';
import { industries } from '../../data/siteData';

const iconMap = {
  ShoppingCart,
  Utensils,
  Building2,
  GraduationCap,
  FileText,
  Briefcase,
  Smartphone,
  Ticket,
};

const Industries = () => {
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
            Industries <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">We Serve</span>
          </h2>
          <p className="section-subheading">
            Delivering tailored software solutions across diverse industries worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
            const Icon = iconMap[industry.icon];
            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="card group cursor-pointer"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} className="text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {industry.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600">
                    {industry.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
