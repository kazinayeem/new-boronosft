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
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-purple-600">7+</div>
                <div className="text-sm text-gray-600">Years</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-blue-600">30+</div>
                <div className="text-sm text-gray-600">Clients</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Minimal visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[520px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl shadow-2xl border border-white/70" />
              <div className="relative z-10 w-[480px] max-w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-10 flex flex-col items-center text-center gap-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl shadow-lg flex items-center justify-center">
                  <img src="/logo.png" alt="BornoSoft-NR" className="h-16 w-16 object-contain" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Trusted technology partner</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">50+ businesses</p>
                  <p className="text-sm text-gray-600">AI products • SaaS build • Revenue-share options</p>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/60 border border-blue-100">
                    <p className="text-xs text-blue-700 font-semibold">Refer & Earn</p>
                    <p className="text-lg font-bold text-gray-900">10-15% commission</p>
                    <p className="text-xs text-blue-700">We deliver, you nurture clients</p>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100/60 border border-emerald-100">
                    <p className="text-xs text-emerald-700 font-semibold">Co-build SaaS/AI</p>
                    <p className="text-lg font-bold text-gray-900">Zero upfront</p>
                    <p className="text-xs text-emerald-700">Commission / revenue-share</p>
                  </div>
                </div>
                <div className="w-full p-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-80">Ready when you are</p>
                    <p className="text-lg font-semibold">Book a 15-min consult</p>
                  </div>
                  <div className="px-4 py-2 bg-white/15 rounded-lg text-sm font-semibold">
                    Avg. reply: 2 minutes
                  </div>
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
