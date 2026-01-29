import SEO from '../components/SEO';
import { motion } from 'framer-motion';

const TermsConditions = () => {
  return (
    <>
      <SEO 
        title="Terms & Conditions | BornoSoft"
        description="BornoSoft Terms & Conditions - Read our service agreement and legal terms."
        keywords="terms of service, terms and conditions, legal agreement"
        canonical="/terms-conditions"
      />
      <div className="min-h-screen pt-32 pb-20">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-heading mb-8">Terms & Conditions</h1>
          
          <div className="card space-y-6 text-gray-600 leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
              <p>By accessing and using BornoSoft-NR services, you accept and agree to be bound by these Terms and Conditions.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Services</h2>
              <p>BornoSoft-NR provides software development and IT consulting services. Specific terms for each project will be outlined in separate service agreements.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Intellectual Property</h2>
              <p>All intellectual property rights in the deliverables will be transferred to the client upon full payment, unless otherwise agreed in writing.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Payment Terms</h2>
              <p>Payment terms will be specified in individual project agreements. Late payments may incur additional charges.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Limitation of Liability</h2>
              <p>BornoSoft-NR shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Modifications</h2>
              <p>We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of modified terms.</p>
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

export default TermsConditions;
