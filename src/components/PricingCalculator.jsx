import { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const PricingCalculator = ({ isOpen, onClose }) => {
  const [projectType, setProjectType] = useState('web');
  const [complexity, setComplexity] = useState('basic');
  const [duration, setDuration] = useState('3');
  const [currency, setCurrency] = useState('BDT');
  const [features, setFeatures] = useState({
    api: false,
    payment: false,
    analytics: false,
    seo: false,
    mobile: false,
    maintenance: false
  });

  // BDT Pricing
  const basePriceBDT = {
    web: { basic: 150000, advanced: 350000, enterprise: 750000 },
    mobile: { basic: 300000, advanced: 600000, enterprise: 1200000 },
    cloud: { basic: 200000, advanced: 500000, enterprise: 1000000 }
  };

  // USD Pricing
  const basePriceUSD = {
    web: { basic: 1500, advanced: 3500, enterprise: 7500 },
    mobile: { basic: 3000, advanced: 6000, enterprise: 12000 },
    cloud: { basic: 2000, advanced: 5000, enterprise: 10000 }
  };

  // Feature pricing in BDT
  const featurePriceBDT = {
    api: 50000,
    payment: 60000,
    analytics: 35000,
    seo: 50000,
    mobile: 100000,
    maintenance: 10000
  };

  // Feature pricing in USD
  const featurePriceUSD = {
    api: 500,
    payment: 600,
    analytics: 350,
    seo: 500,
    mobile: 1000,
    maintenance: 100
  };

  const basePrice = currency === 'BDT' ? basePriceBDT : basePriceUSD;
  const featurePrice = currency === 'BDT' ? featurePriceBDT : featurePriceUSD;
  const currencySymbol = currency === 'BDT' ? '৳' : '$';

  const calculatePrice = () => {
    let price = basePrice[projectType][complexity];
    let featuresCost = 0;

    Object.keys(features).forEach(feature => {
      if (features[feature]) {
        featuresCost += featurePrice[feature];
      }
    });

    const monthlyMaintenance = features.maintenance ? featurePrice.maintenance * duration : 0;
    const totalFeatures = featuresCost + monthlyMaintenance;

    return price + totalFeatures;
  };

  const handleFeatureChange = (feature) => {
    setFeatures(prev => ({
      ...prev,
      [feature]: !prev[feature]
    }));
  };

  const total = calculatePrice();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${isOpen ? 'bg-black/50' : 'pointer-events-none'}`}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: isOpen ? 1 : 0.9, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Project Cost Calculator</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Currency Selector */}
        <div className="bg-gray-100 p-4 flex items-center justify-center gap-4 border-b">
          <span className="text-sm font-semibold text-gray-700">Select Currency:</span>
          <button
            onClick={() => setCurrency('BDT')}
            className={`px-4 py-2 rounded-lg font-bold transition-all ${
              currency === 'BDT'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-800 border-2 border-gray-300'
            }`}
          >
            BDT (৳)
          </button>
          <button
            onClick={() => setCurrency('USD')}
            className={`px-4 py-2 rounded-lg font-bold transition-all ${
              currency === 'USD'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-800 border-2 border-gray-300'
            }`}
          >
            USD ($)
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Options */}
            <div>
              {/* Project Type */}
              <div className="mb-8">
                <label className="block text-sm font-bold text-gray-900 mb-4">
                  Project Type
                </label>
                <div className="space-y-3">
                  {['web', 'mobile', 'cloud'].map(type => (
                    <label key={type} className="flex items-center p-3 border-2 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors" style={{ borderColor: projectType === type ? '#2563eb' : '#e5e7eb' }}>
                      <input
                        type="radio"
                        name="projectType"
                        value={type}
                        checked={projectType === type}
                        onChange={e => setProjectType(e.target.value)}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="ml-3 capitalize font-semibold text-gray-900">
                        {type} Development
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Complexity */}
              <div className="mb-8">
                <label className="block text-sm font-bold text-gray-900 mb-4">
                  Project Complexity
                </label>
                <div className="space-y-3">
                  {['basic', 'advanced', 'enterprise'].map(level => (
                    <label key={level} className="flex items-center p-3 border-2 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors" style={{ borderColor: complexity === level ? '#2563eb' : '#e5e7eb' }}>
                      <input
                        type="radio"
                        name="complexity"
                        value={level}
                        checked={complexity === level}
                        onChange={e => setComplexity(e.target.value)}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="ml-3 capitalize font-semibold text-gray-900">
                        {level} Project
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Duration */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-4">
                  Project Duration (Months)
                </label>
                <select
                  value={duration}
                  onChange={e => setDuration(e.target.value)}
                  className="w-full border-2 border-gray-300 rounded-lg p-3 text-gray-900 font-semibold focus:outline-none focus:border-blue-600"
                >
                  {[1, 2, 3, 4, 5, 6, 9, 12].map(m => (
                    <option key={m} value={m}>{m} months</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Features & Summary */}
            <div>
              {/* Features */}
              <div className="mb-8">
                <label className="block text-sm font-bold text-gray-900 mb-4">
                  Additional Features
                </label>
                <div className="space-y-3">
                  {Object.keys(features).map(feature => (
                    <label key={feature} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-blue-50 transition-colors">
                      <input
                        type="checkbox"
                        checked={features[feature]}
                        onChange={() => handleFeatureChange(feature)}
                        className="w-4 h-4 text-blue{currencySymbol}600 rounded"
                      />
                      <span className="ml-3 text-gray-900 font-medium flex-1 capitalize">
                        {feature === 'api' ? 'API Integration' :
                         feature === 'payment' ? 'Payment Gateway' :
                         feature === 'analytics' ? 'Analytics Dashboard' :
                         feature === 'seo' ? 'SEO Optimization' :
                         feature === 'mobile' ? 'Mobile Responsive' :
                         'Maintenance Support'}
                      </span>
                      <span className="text-blue-600 font-bold">
                        +${feature === 'maintenance' ? 500 : featurePrice[feature]}
                        {feature === 'maintenance' ? '/mo' : ''}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Summary Box */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl p-6">
                <h3 className="text-sm font-bold text-gray-600 uppercase mb-4">Cost Summary</h3>
                <div className="space-y-2 mb-6 pb-6 border-b-2 border-blue-300">
                  <div className="flex justify-between text-sm text-gray-700">
                    <span>Base Project</span>
                    <span className="font-semibold">${basePrice[projectType][complexity].toLocaleString()}</span>
                  </div>
                  {Object.keys(features).map(feature => 
                    features[feature] && (
                      <div key={feature} className="flex justify-between text-sm text-gray-700">
                        <span className="capitalize">
                          {feature === 'api' ? 'API Integration' :
                           feature === 'payment' ? 'Payment Gateway' :
                           feature === 'analytics' ? 'Analytics' :
                           feature === 'seo' ? 'SEO' :
                           feature === 'mobile' ? 'Mobile' :
                           'Maintenance'}
                        </span>
                        <span className="font-semibold">
                          {currencySymbol}{(feature === 'maintenance' ? featurePrice[feature] * duration : featurePrice[feature]).toLocaleString()}
                        </span>
                      </div>
                    )
                  )}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Estimated Total</span>
                  <span className="text-3xl font-bold text-blue-600">
                    {currencySymbol}{total.toLocaleString()}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-4">*Estimate based on selected options. Final price may vary.</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8 pt-8 border-t-2 border-gray-200">
            <button
              onClick={onClose}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              Contact Us for Detailed Quote
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PricingCalculator;
