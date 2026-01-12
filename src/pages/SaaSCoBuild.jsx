import { Link } from 'react-router-dom';

const SaaSCoBuild = () => {
  const offers = [
    {
      title: 'AI product acceleration',
      detail: 'From idea to MVP fast—LLM, automation, and analytics baked in from day one.',
    },
    {
      title: 'SaaS co-build with revenue share',
      detail: 'No upfront budget? We can co-build on commission or revenue-share when it fits.',
    },
    {
      title: 'Technical + GTM support',
      detail: 'Engineering, design, and launch playbooks to reach your first paying users quickly.',
    },
  ];

  const highlights = [
    'Discovery sprint: scope, budget, and go-to-market in days',
    'Build fast: ship a usable MVP in weeks, not quarters',
    'Scale ready: architecture for growth, security, and reliability',
  ];

  return (
    <section className="py-20">
      <div className="container-custom max-w-5xl">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 md:p-14">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
            <div>
              <p className="text-sm text-purple-600 font-semibold mb-2">SaaS & AI Co-build</p>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Build your SaaS or AI product with us</h1>
              <p className="text-gray-600 text-lg">We partner as product builders—whether you have funding or want a commission/revenue-share model.</p>
            </div>
            <Link to="/contact" className="btn-primary">Start a discovery call</Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {offers.map((offer, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-purple-100">
                <p className="text-sm text-purple-700 font-semibold mb-2">{idx === 1 ? 'Revenue-share friendly' : 'What you get'}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{offer.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{offer.detail}</p>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white mb-6">
            <p className="text-sm opacity-80 mb-2">How we deliver</p>
            <ul className="space-y-2 text-sm">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-white"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-sm text-gray-500">Idea but no budget?</p>
              <p className="text-lg font-semibold text-gray-900">We can structure commission-based or revenue-share builds.</p>
            </div>
            <Link to="/contact" className="btn-secondary">Discuss a model</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaaSCoBuild;
