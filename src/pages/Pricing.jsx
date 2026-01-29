import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, DollarSign, Banknote } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const [currency, setCurrency] = useState('BDT');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small projects',
      bdt: '150000',
      usd: '1500',
      features: [
        'Up to 3 web pages',
        'Basic responsive design',
        'Contact form integration',
        'SEO basics',
        '1 month support',
        'No revisions included'
      ],
      popular: false,
      service: 'Web Development'
    },
    {
      name: 'Professional',
      description: 'Most popular for businesses',
      bdt: '350000',
      usd: '3500',
      features: [
        'Up to 10 web pages',
        'Fully responsive design',
        'Database integration',
        'Payment gateway setup',
        'SEO optimization',
        '3 months support',
        'Unlimited revisions',
        'Analytics dashboard'
      ],
      popular: true,
      service: 'Web Development'
    },
    {
      name: 'Enterprise',
      description: 'For large-scale applications',
      bdt: '750000',
      usd: '7500',
      features: [
        'Unlimited pages',
        'Advanced features',
        'API development',
        'Third-party integrations',
        'Admin dashboard',
        '6 months support',
        'Unlimited revisions',
        'Performance optimization',
        'Security audits'
      ],
      popular: false,
      service: 'Web Development'
    }
  ];

  const mobileDevPlans = [
    {
      name: 'Basic App',
      description: 'Single platform app',
      bdt: '300000',
      usd: '3000',
      features: [
        'Single platform (iOS or Android)',
        'Basic features',
        'UI/UX design',
        'App store submission',
        '2 months support',
        '5 revisions'
      ],
      popular: false,
      service: 'Mobile Development'
    },
    {
      name: 'Full Stack App',
      description: 'iOS + Android',
      bdt: '600000',
      usd: '6000',
      features: [
        'iOS and Android apps',
        'Advanced features',
        'Push notifications',
        'Offline functionality',
        'Backend API',
        '4 months support',
        'Unlimited revisions',
        'Analytics'
      ],
      popular: true,
      service: 'Mobile Development'
    },
    {
      name: 'Custom Solution',
      description: 'Cross-platform with advanced features',
      bdt: '1200000',
      usd: '12000',
      features: [
        'Cross-platform (React Native/Flutter)',
        'Complex features',
        'Real-time sync',
        'Payment integration',
        'Cloud backend',
        '6 months support',
        'Unlimited revisions',
        'Maintenance included'
      ],
      popular: false,
      service: 'Mobile Development'
    }
  ];

  const cloudPlans = [
    {
      name: 'Startup',
      description: 'Cloud migration basics',
      bdt: '200000',
      usd: '2000',
      features: [
        'Initial cloud assessment',
        'Server setup',
        'Basic monitoring',
        'SSL certificates',
        '1 month support',
        'Email support'
      ],
      popular: false,
      service: 'Cloud & DevOps'
    },
    {
      name: 'Business',
      description: 'Complete cloud solution',
      bdt: '500000',
      usd: '5000',
      features: [
        'Full cloud migration',
        'Auto-scaling setup',
        'CI/CD pipeline',
        'Advanced monitoring',
        'Database optimization',
        '3 months support',
        'Priority support',
        'Backup strategy'
      ],
      popular: true,
      service: 'Cloud & DevOps'
    },
    {
      name: 'Enterprise',
      description: 'Full DevOps solution',
      bdt: '1000000',
      usd: '10000',
      features: [
        'Complete DevOps setup',
        'Multi-region deployment',
        'Advanced security',
        'Disaster recovery',
        'Performance tuning',
        '6 months support',
        '24/7 support',
        'Infrastructure as Code',
        'Compliance audit'
      ],
      popular: false,
      service: 'Cloud & DevOps'
    }
  ];

  const allPlans = [...plans, ...mobileDevPlans, ...cloudPlans];
  const displayCurrency = currency === 'BDT' ? 'BDT' : 'USD';
  const priceKey = currency === 'BDT' ? 'bdt' : 'usd';
  const currencySymbol = currency === 'BDT' ? '৳' : '$';

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Header */}
      <section className="container-custom mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="section-heading mb-6">
            Simple, Transparent <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Pricing</span>
          </h1>
          <p className="section-subheading max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your project. All prices are competitive and tailored for Bangladesh market.
          </p>

          {/* Currency Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <button
              onClick={() => setCurrency('BDT')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${
                currency === 'BDT'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              <Banknote size={20} />
              BDT (Taka)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${
                currency === 'USD'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              <DollarSign size={20} />
              USD (Dollar)
            </button>
          </div>
        </motion.div>
      </section>

      {/* Web Development Plans */}
      <section className="container-custom mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Web Development</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`card p-8 flex flex-col h-full relative ${
                plan.popular ? 'border-2 border-blue-600 shadow-2xl transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>

              <div className="mb-8">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {currencySymbol}{parseInt(plan[priceKey]).toLocaleString()}
                </div>
                <p className="text-gray-600">per project</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`w-full py-3 rounded-lg font-bold transition-colors text-center ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mobile Development Plans */}
      <section className="bg-gray-50 py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Mobile App Development</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mobileDevPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`card p-8 flex flex-col h-full relative ${
                  plan.popular ? 'border-2 border-blue-600 shadow-2xl transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <div className="mb-8">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {currencySymbol}{parseInt(plan[priceKey]).toLocaleString()}
                  </div>
                  <p className="text-gray-600">per project</p>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 rounded-lg font-bold transition-colors text-center ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud & DevOps Plans */}
      <section className="container-custom my-20">
        <h2 className="text-3xl font-bold text-center mb-12">Cloud & DevOps Solutions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cloudPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`card p-8 flex flex-col h-full relative ${
                plan.popular ? 'border-2 border-blue-600 shadow-2xl transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>

              <div className="mb-8">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {currencySymbol}{parseInt(plan[priceKey]).toLocaleString()}
                </div>
                <p className="text-gray-600">per project</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`w-full py-3 rounded-lg font-bold transition-colors text-center ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Custom Pricing */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Need Custom Pricing?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Every project is unique. We offer custom packages tailored to your specific needs and budget.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Get Custom Quote
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-custom my-20">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              q: 'Do you offer payment plans?',
              a: 'Yes! We offer flexible payment plans. You can pay 50% upfront and 50% on completion, or discuss custom payment schedules.'
            },
            {
              q: 'What is included in support?',
              a: 'Support includes bug fixes, minor updates, and technical assistance. Major features and redesigns are billed separately.'
            },
            {
              q: 'Can I upgrade my plan later?',
              a: 'Absolutely! If your project grows, we can upgrade your plan or add additional features at any time.'
            },
            {
              q: 'What if I need more revisions?',
              a: 'We include unlimited revisions in most plans. For Starter plans, additional revisions are available at ৳2,000 each.'
            },
            {
              q: 'Do you offer maintenance after project completion?',
              a: 'Yes, we offer affordable maintenance packages starting from ৳5,000/month for bug fixes and updates.'
            },
            {
              q: 'What is the typical project timeline?',
              a: 'Web projects: 4-8 weeks | Mobile apps: 8-12 weeks | Cloud solutions: 2-4 weeks'
            }
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card p-6"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Pricing;
