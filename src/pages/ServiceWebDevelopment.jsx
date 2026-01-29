import { motion } from 'framer-motion';
import { CheckCircle, Code2, Zap, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceWebDevelopment = () => {
  const features = [
    { icon: Code2, title: "Modern Tech Stack", description: "React, Vue, Angular, Node.js, and more" },
    { icon: Zap, title: "High Performance", description: "Optimized for speed and scalability" },
    { icon: Users, title: "User-Centric Design", description: "Beautiful and intuitive interfaces" },
    { icon: Award, title: "Quality Assured", description: "Rigorous testing and QA processes" }
  ];

  const process = [
    { step: 1, title: "Discovery & Planning", description: "Understand your requirements and create a detailed plan" },
    { step: 2, title: "Design & Prototyping", description: "Create wireframes and interactive prototypes" },
    { step: 3, title: "Development", description: "Build scalable and maintainable code" },
    { step: 4, title: "Testing & QA", description: "Comprehensive testing across browsers and devices" },
    { step: 5, title: "Deployment", description: "Seamless launch to production" },
    { step: 6, title: "Support & Maintenance", description: "Ongoing support and updates" }
  ];

  const technologies = [
    "React.js", "Vue.js", "Angular", "Next.js", "Svelte",
    "Node.js", "Python", "PHP", "Java", "C#",
    "PostgreSQL", "MongoDB", "MySQL", "Firebase",
    "AWS", "Google Cloud", "Azure", "Docker", "Kubernetes"
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="container-custom mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="section-heading mb-6">
            Web Development <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="section-subheading max-w-3xl mx-auto">
            Build powerful, scalable web applications with cutting-edge technologies. From concept to deployment, we create web solutions that drive business growth.
          </p>
        </motion.div>
      </section>

      {/* Features */}
      <section className="container-custom mb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-blue-600" size={28} />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Development Process */}
      <section className="bg-gray-50 py-20">
        <div className="container-custom">
          <h2 className="section-heading text-center mb-16">Our Development Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8"
              >
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-4 text-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="container-custom my-20">
        <h2 className="section-heading text-center mb-12">Technologies We Use</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-4 text-center hover:shadow-lg transition-shadow"
            >
              <span className="text-sm font-semibold text-gray-800">{tech}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 gap-8 text-white">
            {[
              "Expert team with 10+ years of experience",
              "Proven track record with 200+ successful projects",
              "Agile methodology for flexibility and speed",
              "24/7 support and maintenance",
              "Competitive pricing models",
              "100% client satisfaction guarantee"
            ].map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <CheckCircle size={24} className="flex-shrink-0 mt-1" />
                <span className="text-lg">{reason}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-custom my-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Web Solution?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create something amazing together.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
          >
            Get Started Today
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default ServiceWebDevelopment;
