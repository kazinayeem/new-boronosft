import { Link } from 'react-router-dom';

const ReferEarn = () => {
  const steps = [
    { title: 'Share a lead', detail: 'Introduce us to a qualified project or decision maker.' },
    { title: 'We handle delivery', detail: 'We scope, build, and support with your client looped in.' },
    { title: 'You earn 10-15%', detail: 'Commission paid on closed deals; transparent milestones.' },
  ];

  return (
    <section className="py-20">
      <div className="container-custom max-w-5xl">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 md:p-14">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
            <div>
              <p className="text-sm text-blue-600 font-semibold mb-2">Refer & Earn</p>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Earn 10-15% by referring projects</h1>
              <p className="text-gray-600 text-lg">You keep the relationship. We do the delivery. You get paid when the deal closes.</p>
            </div>
            <Link to="/contact" className="btn-primary">Refer a project</Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {steps.map((step, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100">
                <p className="text-sm text-blue-700 font-semibold mb-2">Step {idx + 1}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.detail}</p>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-sm opacity-80">Trusted by 300+ businesses</p>
              <p className="text-lg font-semibold">Transparent terms. Fast payouts. Zero delivery risk for you.</p>
            </div>
            <Link to="/contact" className="px-5 py-3 bg-white/15 rounded-lg font-semibold hover:bg-white/25 transition">Talk to us</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferEarn;
