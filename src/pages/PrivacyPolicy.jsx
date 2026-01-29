import SEO from '../components/SEO';
import { pageMetadata } from '../config/seo';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  const meta = pageMetadata.contact; // Using contact metadata as fallback
  return (
    <>
      <SEO 
        title="Privacy Policy | BornoSoft"
        description="BornoSoft Privacy Policy - Learn how we collect, use, and protect your personal information."
        keywords="privacy policy, data protection, personal information"
        canonical="/privacy-policy"
      />
      <div className="min-h-screen pt-32 pb-20">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-heading mb-8">Privacy Policy</h1>
          
          <div className="card space-y-6 text-gray-600 leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Information We Collect</h2>
              <p>We collect information that you provide directly to us, including name, email address, phone number, and any other information you choose to provide when using our services.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">2. How We Use Your Information</h2>
              <p>We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to comply with legal obligations.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Information Sharing</h2>
              <p>We do not sell or share your personal information with third parties except as described in this policy or with your consent.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us at info@bornosoftnr.com</p>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">Last updated: January 12, 2026</p>
            </div>
          </div>
        </motion.div>
      </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
