
import { motion } from 'framer-motion';
import { Shield, Zap, Users, TrendingUp, Clock, Award } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: Shield,
    title: "Secure & Reliable",
    description: "Your data is protected with enterprise-grade security. We ensure 99.9% uptime for your business."
  },
  {
    id: 2,
    icon: Zap,
    title: "Fast Performance",
    description: "Lightning-fast systems that handle thousands of users without slowing down your operations."
  },
  {
    id: 3,
    icon: Users,
    title: "Easy to Use",
    description: "Simple, intuitive interfaces that your team can learn in minutes, not months."
  },
  {
    id: 4,
    icon: TrendingUp,
    title: "Grows With You",
    description: "Start small and scale up. Our solutions adapt as your business expands."
  },
  {
    id: 5,
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance whenever you need help. We're always here for you."
  },
  {
    id: 6,
    icon: Award,
    title: "Proven Results",
    description: "Join 300+ successful businesses who have transformed their operations with us."
  }
];

const Features = () => {
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
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">BornoSoft-NR</span>
          </h2>
          <p className="section-subheading">
            We build software that's powerful yet simple—designed for real people, not tech experts
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="card group cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
