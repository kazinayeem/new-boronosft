import { motion } from 'framer-motion';
import { CheckCircle, Smartphone, Zap, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceMobileDevelopment = () => {
  const features = [
    { icon: Smartphone, title: "Cross-Platform Apps", description: "iOS and Android with single codebase using Flutter & React Native" },
    { icon: Zap, title: "Lightning Fast", description: "Optimized performance for seamless user experience" },
    { icon: Users, title: "Intuitive UI/UX", description: "User-friendly interfaces that users love" },
    { icon: Award, title: "App Store Ready", description: "Fully tested and compliant with app store guidelines" }
  ];

  const process = [
    { step: 1, title: "Strategy & Planning", description: "Define app vision, features, and target audience" },
    { step: 2, title: "UI/UX Design", description: "Create beautiful mobile-first designs" },
    { step: 3, title: "Native Development", description: "Build native and cross-platform applications" },
    { step: 4, title: "Testing & QA", description: "Comprehensive testing on multiple devices" },
    { step: 5, title: "App Store Launch", description: "Deploy to Apple App Store and Google Play" },
    { step: 6, title: "Ongoing Support", description: "Updates, maintenance, and feature enhancements" }
  ];

  const technologies = [
    "React Native", "Flutter", "Swift", "Kotlin", "Objective-C",
    "Firebase", "AWS Amplify", "Node.js", "MongoDB", "PostgreSQL",
    "Push Notifications", "Mapbox", "Stripe", "Payment Integration",
    "CI/CD", "TestFlight", "Beta Testing"
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
            Mobile App Development <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="section-subheading max-w-3xl mx-auto">
            Create engaging mobile applications that connect with your users. We build native and cross-platform apps for iOS and Android.
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
          <h2 className="section-heading text-center mb-16">Mobile App Development Process</h2>
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
        <h2 className="section-heading text-center mb-12">Technologies & Platforms</h2>
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

      {/* Platform Support */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Supported Platforms</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              className="bg-white/10 p-8 rounded-lg backdrop-blur"
            >
              <h3 className="text-2xl font-bold mb-2">iOS</h3>
              <p>Native Swift development and App Store optimization</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/10 p-8 rounded-lg backdrop-blur"
            >
              <h3 className="text-2xl font-bold mb-2">Android</h3>
              <p>Kotlin/Java development with Google Play optimization</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 p-8 rounded-lg backdrop-blur"
            >
              <h3 className="text-2xl font-bold mb-2">Cross-Platform</h3>
              <p>Flutter and React Native for efficient development</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container-custom my-20">
        <h2 className="section-heading text-center mb-12">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            "Experienced team of mobile experts",
            "500+ successful mobile apps launched",
            "Agile development methodology",
            "Real-time progress tracking",
            "Post-launch support included",
            "SEO & ASO optimization"
          ].map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              <CheckCircle size={24} className="text-blue-600 flex-shrink-0 mt-1" />
              <span className="text-lg text-gray-700">{reason}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-custom my-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Launch Your Mobile App?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's bring your app idea to life with cutting-edge mobile technology.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
          >
            Start Your Project
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default ServiceMobileDevelopment;
