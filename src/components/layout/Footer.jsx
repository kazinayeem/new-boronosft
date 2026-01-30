import { Link } from 'react-router-dom';
import { 
  Mail, Phone, MapPin, 
  Facebook, Twitter, Linkedin, Instagram, Github 
} from 'lucide-react';
import { companyInfo } from '../../data/siteData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Careers', path: '/careers' },
      { name: 'Case Studies', path: '/case-studies' },
      { name: 'Blog', path: '/blog' },
      { name: 'Refer & Earn', path: '/refer-earn' },
      { name: 'SaaS Co-build', path: '/saas-cobuild' },
    ],
    services: [
      { name: 'Custom Software', path: '/services' },
      { name: 'Mobile Apps', path: '/services' },
      { name: 'Web Development', path: '/services' },
      { name: 'Cloud Solutions', path: '/services' },
    ],
    technologies: [
      { name: 'React & Next.js', path: '/technologies' },
      { name: 'Node.js & Express', path: '/technologies' },
      { name: 'MongoDB & SQL', path: '/technologies' },
      { name: 'AWS & Cloud', path: '/technologies' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy-policy' },
      { name: 'Terms & Conditions', path: '/terms-conditions' },
      { name: 'Refund Policy', path: '/refund-policy' },
    ],
  };

  const socialIcons = [
    { Icon: Facebook, link: companyInfo.social.facebook },
    { Icon: Twitter, link: companyInfo.social.twitter },
    { Icon: Linkedin, link: companyInfo.social.linkedin },
    { Icon: Instagram, link: companyInfo.social.instagram },
    { Icon: Github, link: companyInfo.social.github },
  ];

  return (
    <>
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo.png" 
                alt="BornoSoft-NR Logo" 
                className="h-12 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold">{companyInfo.name}</span>
                <span className="text-xs text-gray-400">{companyInfo.tagline}</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {companyInfo.description}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href={`mailto:${companyInfo.email}`} className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300">
                <Mail size={18} />
                <span>{companyInfo.email}</span>
              </a>
              <a href="mailto:ahmad2305341016@diu.edu.bd" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300">
                <Mail size={18} />
                <span>ahmad2305341016@diu.edu.bd</span>
              </a>
              <a href="mailto:nayeem2305341022@diu.edu.bd" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300">
                <Mail size={18} />
                <span>nayeem2305341022@diu.edu.bd</span>
              </a>
              
              <a href="tel:+8801718485840" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300">
                <Phone size={18} />
                <span>+8801718-485840</span>
              </a>
              <a href="tel:+8801943124216" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300">
                <Phone size={18} />
                <span>+8801943-124216</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              {socialIcons.map(({ Icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

     
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} {companyInfo.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms & Conditions
              </Link>
              <Link to="/refund-policy" className="text-gray-400 hover:text-white transition-colors duration-300">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
