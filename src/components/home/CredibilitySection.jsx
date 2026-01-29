import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Users, Shield } from 'lucide-react';

const CredibilitySection = () => {
  const stats = [
    { label: 'Active Clients', value: '50+', icon: Users },
    { label: 'Projects Delivered', value: '200+', icon: CheckCircle2 },
    { label: 'Years Experience', value: '10+', icon: Zap },
    { label: 'Success Rate', value: '99.8%', icon: Shield }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom">
        {/* Main Credibility Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-16"
        >
          {/* Glassmorphism Card */}
          <div className="relative group">
            {/* Gradient Border Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-2xl opacity-20 group-hover:opacity-30 blur transition duration-500"></div>

            {/* Main Card */}
            <div className="relative bg-white/40 backdrop-blur-xl border border-white/20 rounded-2xl p-12 md:p-16">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 mb-6"
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase">
                  Trusted Technology Partner
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Powering <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">50+ Businesses</span> Worldwide
              </motion.h2>

              {/* Supporting Text */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed"
              >
                AI-powered products <span className="text-gray-400">•</span> Custom SaaS development <span className="text-gray-400">•</span> Revenue-share partnerships
              </motion.p>

              {/* Divider */}
              <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-8"></div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className="group/stat"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2 bg-blue-100/50 rounded-lg group-hover/stat:bg-blue-100 transition-colors">
                          <Icon size={20} className="text-blue-600" />
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            {
              title: 'Enterprise Security',
              description: 'ISO 27001 certified with end-to-end encryption'
            },
            {
              title: 'Dedicated Support',
              description: '24/7 expert team ready to help your success'
            },
            {
              title: 'Scalable Solutions',
              description: 'Grow from startup to enterprise without limits'
            }
          ].map((indicator, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="bg-white/30 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/40 transition-all duration-300"
            >
              <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4"></div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{indicator.title}</h3>
              <p className="text-sm text-gray-600">{indicator.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">Join industry leaders trusting us with their critical software needs</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">
              Start Your Project
            </button>
            <button className="px-8 py-3 rounded-lg border border-gray-300 text-gray-900 font-semibold hover:bg-gray-50 transition-colors">
              View Case Studies
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CredibilitySection;
