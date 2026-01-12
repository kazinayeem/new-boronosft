import { motion } from 'framer-motion';
import { Check, Zap, ShieldCheck } from 'lucide-react';
import { pricingPlans } from '../../data/siteData';

const Pricing = () => {
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
            Transparent <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="section-subheading">
            BDT-first pricing designed for local and regional teams—no surprises, just value
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className={`card h-full flex flex-col ${plan.featured ? 'border-2 border-blue-500 shadow-blue-100' : ''}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-500">{plan.highlight}</p>
                  <h3 className="text-2xl font-bold text-gray-900 mt-1">{plan.name}</h3>
                </div>
                {plan.featured ? (
                  <span className="px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-700 rounded-full">Most Popular</span>
                ) : (
                  <Zap size={18} className="text-blue-500" />
                )}
              </div>

              <div className="mb-6">
                <div className="text-3xl font-extrabold text-gray-900">{plan.price}</div>
                <p className="text-sm text-gray-500">{plan.cadence}</p>
              </div>

              <div className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start space-x-3">
                    <Check size={18} className="text-green-500 mt-1" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <button className={`w-full py-3 font-semibold rounded-xl transition-all duration-300 ${
                  plan.featured
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:scale-[1.01]'
                    : 'bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100'
                }`}>
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-4 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <ShieldCheck size={18} className="text-blue-600" />
            <span>Prices shown in BDT for local teams. USD/other currencies available on request.</span>
          </div>
          <div className="flex items-center space-x-2">
            <ShieldCheck size={18} className="text-blue-600" />
            <span>Need custom scope? We will tailor a plan to your modules, integrations, and timelines.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
