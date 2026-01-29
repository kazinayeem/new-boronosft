import SEO from '../components/SEO';
import { motion } from 'framer-motion';

const RefundPolicy = () => {
  return (
    <>
      <SEO 
        title="Refund Policy | BornoSoft"
        description="BornoSoft Refund Policy - Transparent refund terms and conditions."
        keywords="refund policy, money back guarantee, refund terms"
        canonical="/refund-policy"
      />
      <div className="min-h-screen pt-32 pb-20">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-heading mb-8">Refund Policy</h1>
          
          <div className="card space-y-6 text-gray-600 leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">1. General Policy</h2>
              <p>BornoSoft-NR is committed to client satisfaction. Our refund policy is designed to be fair and transparent.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Eligibility for Refund</h2>
              <p>Refunds may be considered if project deliverables do not meet the agreed specifications outlined in the project agreement.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Refund Request Process</h2>
              <p>To request a refund, contact us within 30 days of project delivery with a detailed explanation of the issues.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Non-Refundable Services</h2>
              <p>Consultation fees, third-party service costs, and work already completed and approved are non-refundable.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Refund Timeline</h2>
              <p>Approved refunds will be processed within 14 business days to the original payment method.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Contact for Refunds</h2>
              <p>For refund requests, please contact us at info@bornosoftnr.com with your project details and invoice number.</p>
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

export default RefundPolicy;
