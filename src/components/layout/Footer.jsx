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
              <a href={`tel:${companyInfo.phone}`} className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300">
                <Phone size={18} />
                <span>{companyInfo.phone}</span>
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

          {/* Company Links */}
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

        {/* Referral & Partnerships */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 bg-white/5 border border-white/10 rounded-2xl">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Refer & Earn (10-15%)</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Are you an agency or trusted partner? Refer qualified projects and earn 10-15% on closed deals. We handle delivery; you keep your client relationships strong.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Have a SaaS idea?</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Bring your product idea—even with no upfront budget. We can co-build on a commission/revenue-share model and get you to market fast.
            </p>
          </div>
        </div>

        {/* Office Locations */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h3 className="text-lg font-semibold mb-6">Our Global Offices</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {companyInfo.addresses.map((office, index) => (
              <div key={index} className="flex items-start space-x-3">
                <MapPin size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">{office.country}</h4>
                  <p className="text-sm text-gray-400 mb-1">{office.address}</p>
                  <p className="text-sm text-gray-400">{office.phone}</p>
                </div>
              </div>
            ))}
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
  );
};

export default Footer;
