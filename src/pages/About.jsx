import SEO from '../components/SEO';
import { pageMetadata } from '../config/seo';
import { motion } from 'framer-motion';
import { Building2, Target, Users, Award } from 'lucide-react';

const About = () => {
  const meta = pageMetadata.about;
  return (
    <>
      <SEO 
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
        canonical={meta.canonical}
      />
      <div className="min-h-screen pt-32 pb-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h1 className="section-heading mb-4">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">BornoSoft-NR</span>
            </h1>
            <p className="section-subheading">
              Empowering businesses worldwide with innovative software solutions since 2017
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="card">
              <Building2 size={48} className="text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To deliver world-class software solutions that transform businesses and drive innovation. 
                We are committed to excellence, quality, and customer satisfaction in every project we undertake.
              </p>
            </div>

            <div className="card">
              <Target size={48} className="text-purple-600 mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be the leading global software solutions provider, recognized for our innovation, 
                technical excellence, and commitment to helping businesses achieve their digital transformation goals.
              </p>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-blue-600 to-purple-600 text-white mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Us?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Users size={48} className="mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                <p className="text-blue-100">50+ skilled professionals with diverse expertise</p>
              </div>
              <div className="text-center">
                <Award size={48} className="mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Quality Delivery</h3>
                <p className="text-blue-100">ISO certified processes and best practices</p>
              </div>
              <div className="text-center">
                <Building2 size={48} className="mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Global Presence</h3>
                <p className="text-blue-100">Offices in Bangladesh, UAE, and UK</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      </div>
    </>
  );
};

export default About;
