import SEO from '../components/SEO';
import { pageMetadata } from '../config/seo';
import Hero from '../components/home/Hero';
import CredibilitySection from '../components/home/CredibilitySection';
import Process from '../components/home/Process';
import Industries from '../components/home/Industries';
import Features from '../components/home/Features';
import Pricing from '../components/home/Pricing';
import Stats from '../components/home/Stats';
import Clients from '../components/home/Clients';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';
import CTA from '../components/home/CTA';

const Home = () => {
  const meta = pageMetadata.home;
  
  return (
    <>
      <SEO 
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
        canonical={meta.canonical}
      />
      <div className="min-h-screen">
        <Hero />
        <CredibilitySection />
        <Process />
        <Industries />
        <Features />
        <Pricing />
        <Stats />
        <Clients />
        <Testimonials />
        <FAQ />
        <CTA />
      </div>
    </>
  );
};

export default Home;
