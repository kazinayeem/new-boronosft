import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                🚀 Global Smart Solutions Provider
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                BornoSoft-NR
              </span>
              <br />
              <span className="text-gray-900">
                Smart Software Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Empowering modern businesses with cutting-edge software solutions, automation, 
              and scalable IT services. Transform your vision into reality with our expert team.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="/contact" className="btn-primary group">
                Start Your Project
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <a href="tel:+8801234567890" className="btn-secondary group">
                <Phone className="inline-block mr-2" size={20} />
                Call Now
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0"
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-purple-600">7+</div>
                <div className="text-sm text-gray-600">Years</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-blue-600">300+</div>
                <div className="text-sm text-gray-600">Clients</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[520px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl shadow-2xl border border-white/70" />

              <div className="absolute inset-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/60 shadow-lg p-6 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Platform Status</p>
                    <p className="text-2xl font-bold text-gray-900">99.97% Uptime</p>
                    <p className="text-sm text-green-600 font-semibold">All systems operational</p>
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg"
                  >
                    <img src="/logo.png" alt="BornoSoft-NR" className="h-10 w-10 object-contain" />
                  </motion.div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="p-4 rounded-xl bg-white shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-500">Avg. Response</p>
                    <p className="text-2xl font-bold text-gray-900">1.2s</p>
                    <p className="text-xs text-green-600 font-semibold">Real-time monitoring</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-500">Support</p>
                    <p className="text-2xl font-bold text-gray-900">24/7</p>
                    <p className="text-xs text-blue-600 font-semibold">Human + AI desk</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-500">Client Satisfaction</p>
                    <p className="text-2xl font-bold text-gray-900">4.9/5</p>
                    <p className="text-xs text-purple-600 font-semibold">Based on 300+ clients</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-500">Delivery Speed</p>
                    <p className="text-2xl font-bold text-gray-900">2x faster</p>
                    <p className="text-xs text-green-600 font-semibold">Compared to industry</p>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-80">Trusted by teams worldwide</p>
                    <p className="text-lg font-semibold">300+ businesses onboarded</p>
                  </div>
                  <motion.div
                    animate={{ y: [-4, 4, -4] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="px-4 py-2 bg-white/20 rounded-lg text-sm font-semibold"
                  >
                    Live support • 2 min avg. reply
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <div className="w-1.5 h-3 bg-gray-400 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
