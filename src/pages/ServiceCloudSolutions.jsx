import { motion } from 'framer-motion';
import { CheckCircle, Cloud, Zap, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCloudSolutions = () => {
  const features = [
    { icon: Cloud, title: "Cloud Migration", description: "Seamless migration from on-premises to cloud infrastructure" },
    { icon: Zap, title: "DevOps & Automation", description: "CI/CD pipelines and infrastructure automation" },
    { icon: Shield, title: "Security & Compliance", description: "Enterprise-grade security and regulatory compliance" },
    { icon: Users, title: "Managed Services", description: "24/7 monitoring, support, and optimization" }
  ];

  const process = [
    { step: 1, title: "Cloud Assessment", description: "Evaluate your current infrastructure and requirements" },
    { step: 2, title: "Architecture Design", description: "Design scalable and secure cloud architecture" },
    { step: 3, title: "Migration Planning", description: "Create detailed migration strategy and timeline" },
    { step: 4, title: "Implementation", description: "Execute migration with minimal downtime" },
    { step: 5, title: "Optimization", description: "Fine-tune for performance and cost efficiency" },
    { step: 6, title: "Ongoing Management", description: "Continuous monitoring and optimization" }
  ];

  const technologies = [
    "AWS EC2", "AWS Lambda", "AWS RDS", "AWS S3",
    "Azure VMs", "Azure App Service", "Azure SQL", "Azure DevOps",
    "Google Cloud", "Kubernetes", "Docker", "Terraform",
    "Jenkins", "GitHub Actions", "GitLab CI/CD", "Ansible"
  ];

  const providers = [
    { name: "AWS", description: "Amazon Web Services - Comprehensive cloud platform" },
    { name: "Microsoft Azure", description: "Enterprise cloud platform with hybrid capabilities" },
    { name: "Google Cloud", description: "Data analytics and machine learning focused cloud" },
    { name: "DigitalOcean", description: "Simple and scalable cloud infrastructure" }
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
            Cloud Solutions & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">DevOps</span>
          </h1>
          <p className="section-subheading max-w-3xl mx-auto">
            Transform your business with cloud technology. We provide end-to-end cloud solutions including migration, optimization, and DevOps services.
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
          <h2 className="section-heading text-center mb-16">Our Cloud Implementation Process</h2>
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

      {/* Cloud Providers */}
      <section className="container-custom my-20">
        <h2 className="section-heading text-center mb-12">Cloud Providers We Support</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {providers.map((provider, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card p-6 text-center hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-2 text-blue-600">{provider.name}</h3>
              <p className="text-gray-600">{provider.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-20">
        <div className="container-custom">
          <h2 className="section-heading text-center mb-12">Tools & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white border border-blue-200 rounded-lg p-4 text-center hover:shadow-lg transition-shadow"
              >
                <span className="text-sm font-semibold text-gray-800">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Benefits of Cloud Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8 text-white">
            {[
              "Reduce infrastructure costs by up to 60%",
              "Automatic scaling based on demand",
              "Enhanced security and compliance",
              "Global reach and low latency",
              "Disaster recovery and business continuity",
              "Easy team collaboration",
              "Real-time monitoring and analytics",
              "Quick deployment and updates"
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <CheckCircle size={24} className="flex-shrink-0 mt-1" />
                <span className="text-lg">{benefit}</span>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Move to the Cloud?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your cloud strategy and create a scalable infrastructure for your business.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
          >
            Get Cloud Consultation
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default ServiceCloudSolutions;
