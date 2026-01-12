import Hero from '../components/home/Hero';
import Process from '../components/home/Process';
import Industries from '../components/home/Industries';
import Features from '../components/home/Features';
import Pricing from '../components/home/Pricing';
import Stats from '../components/home/Stats';
import Team from '../components/home/Team';
import Clients from '../components/home/Clients';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';
import CTA from '../components/home/CTA';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Process />
      <Industries />
      <Features />
      <Pricing />
      <Stats />
      <Team />
      <Clients />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  );
};

export default Home;
