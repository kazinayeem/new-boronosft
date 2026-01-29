import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceWebDevelopment from './pages/ServiceWebDevelopment';
import ServiceMobileDevelopment from './pages/ServiceMobileDevelopment';
import ServiceCloudSolutions from './pages/ServiceCloudSolutions';
import Pricing from './pages/Pricing';
import Teams from './pages/Teams';
import Technologies from './pages/Technologies';
import CaseStudies from './pages/CaseStudies';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import RefundPolicy from './pages/RefundPolicy';
import ReferEarn from './pages/ReferEarn';
import SaaSCoBuild from './pages/SaaSCoBuild';

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/web" element={<ServiceWebDevelopment />} />
            <Route path="/services/mobile" element={<ServiceMobileDevelopment />} />
            <Route path="/services/cloud" element={<ServiceCloudSolutions />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/refer-earn" element={<ReferEarn />} />
            <Route path="/saas-cobuild" element={<SaaSCoBuild />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

