// Global SEO Configuration
// BornoSoft - Smart Software Solutions for Modern Businesses

export const siteConfig = {
  baseUrl: 'https://bornosoftnr.com',
  siteName: 'BornoSoft',
  siteTitle: 'BornoSoft | AI SaaS Development & Software Solutions',
  description: 'BornoSoft NR - Leading software development company in Bangladesh. We deliver AI solutions, SaaS development, web applications, and custom software for global businesses.',
  locale: 'en_US',
  twitterHandle: '@bornosoftnr',
};

// Brand & Authority Keywords (used naturally across pages)
export const brandKeywords = {
  company: ['BornoSoft', 'BornoSoft NR', 'Bornosoftnr', 'Borno Software', 'BornoSoft Technologies'],
  founders: ['Mohammad Ali Nayeem', 'Kazinayeem', 'Reduan Ahmed', 'Redwan Ahmed'],
  education: ['Daffodil International University', 'DIU', 'DIU Student Developer'],
  services: ['Software company in Bangladesh', 'IT company Bangladesh', 'AI software company', 'SaaS development company Bangladesh'],
  tech: ['React development', 'Full stack development', 'DevOps services', 'Cloud solutions'],
};

// SEO metadata for each page
export const pageMetadata = {
  home: {
    title: 'BornoSoft | AI SaaS Development & Software Solutions Bangladesh',
    description: 'BornoSoft delivers cutting-edge software development, AI solutions, and SaaS products. Founded by Mohammad Ali Nayeem (CEO) and Reduan Ahmed (CTO), Daffodil International University graduates. Trusted software company in Bangladesh.',
    keywords: 'software development Bangladesh, AI solutions, SaaS development, custom software, BornoSoft, full stack development, technology partner',
    canonical: '/',
  },
  about: {
    title: 'About BornoSoft | Founders Mohammad Ali Nayeem & Reduan Ahmed',
    description: 'BornoSoft is founded by Mohammad Ali Nayeem (CEO) and Reduan Ahmed (CTO), both Daffodil International University graduates. We are a trusted software development company delivering innovative solutions since 2024.',
    keywords: 'Mohammad Ali Nayeem, Reduan Ahmed, DIU graduates, software founders, BornoSoft team, technology company Bangladesh',
    canonical: '/about',
  },
  services: {
    title: 'Software Development Services | BornoSoft Bangladesh',
    description: 'BornoSoft offers comprehensive software development services: web development, mobile apps, cloud solutions, AI integration, and custom software for businesses worldwide.',
    keywords: 'software development services, web development Bangladesh, mobile app development, cloud solutions, custom software company',
    canonical: '/services',
  },
  pricing: {
    title: 'Software Development Pricing | BornoSoft Bangladesh (BDT & USD)',
    description: 'Affordable, transparent pricing for software development services. Web development, mobile apps, cloud solutions in BDT and USD. Custom quotes available.',
    keywords: 'software development pricing, custom software cost, Bangladesh pricing, BDT pricing, web development cost',
    canonical: '/pricing',
  },
  technologies: {
    title: 'Technology Stack | BornoSoft Software Solutions',
    description: 'BornoSoft uses modern technologies: React, Node.js, TypeScript, Docker, Kubernetes, AWS, MongoDB. Full stack development with latest tools and frameworks.',
    keywords: 'technology stack, React development, Node.js, DevOps, Docker, cloud technologies, modern web development',
    canonical: '/technologies',
  },
  teams: {
    title: 'Leadership Team | BornoSoft - Mohammad Ali Nayeem, Reduan Ahmed',
    description: 'Meet the BornoSoft leadership team. Mohammad Ali Nayeem (CEO) and Reduan Ahmed (CTO) - Daffodil International University graduates leading innovation in Bangladesh.',
    keywords: 'leadership team, Mohammad Ali Nayeem CEO, Reduan Ahmed CTO, BornoSoft founders, technology leaders Bangladesh',
    canonical: '/teams',
  },
  blog: {
    title: 'Blog | BornoSoft Software Development Insights & Trends',
    description: 'Read the latest software development trends, tutorials, and insights from BornoSoft experts. Learn about AI, cloud computing, modern web development.',
    keywords: 'software development blog, tech trends, web development insights, AI articles, SaaS guides',
    canonical: '/blog',
  },
  contact: {
    title: 'Contact BornoSoft | Get Software Development Quote',
    description: 'Contact BornoSoft for software development, AI solutions, or custom project quotes. Based in Bangladesh, serving global clients.',
    keywords: 'contact software company, development quote, hire developers Bangladesh, software agency',
    canonical: '/contact',
  },
  careers: {
    title: 'Careers | BornoSoft - Join Our Software Development Team',
    description: 'Join BornoSoft and work with talented developers in Bangladesh. Opportunities in full stack development, DevOps, AI/ML.',
    keywords: 'careers software developer, job opportunities Bangladesh, development jobs, startup careers',
    canonical: '/careers',
  },
  caseStudies: {
    title: 'Case Studies | BornoSoft Software Solutions Portfolio',
    description: 'Explore BornoSoft case studies showcasing successful software projects, AI implementations, and client successes.',
    keywords: 'case studies, project portfolio, success stories, software solutions, client testimonials',
    canonical: '/case-studies',
  },
  referEarn: {
    title: 'Refer & Earn Program | BornoSoft 10-15% Commission',
    description: 'Join BornoSoft Refer & Earn program. Earn 10-15% commission on every project you refer.',
    keywords: 'referral program, earn commission, partner program, affiliate earnings',
    canonical: '/refer-earn',
  },
  saasCobuild: {
    title: 'SaaS Co-Build Program | BornoSoft - Revenue Share Model',
    description: 'Have a SaaS idea? BornoSoft offers co-build partnerships. Get your product to market with revenue-share model.',
    keywords: 'SaaS development, startup partnership, revenue share, product development, co-build',
    canonical: '/saas-cobuild',
  },
};

// Structured data for rich snippets
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'BornoSoft',
  alternateName: ['BornoSoft NR', 'Borno Software'],
  url: 'https://bornosoftnr.com',
  logo: 'https://bornosoftnr.com/logo.png',
  description: 'Leading software development company delivering AI solutions, SaaS products, and custom software',
  sameAs: [
    'https://facebook.com/bornosoftnr',
    'https://twitter.com/bornosoftnr',
    'https://linkedin.com/company/bornosoftnr',
    'https://instagram.com/bornosoftnr',
    'https://github.com/bornosoftnr',
  ],
  founder: [
    {
      '@type': 'Person',
      name: 'Mohammad Ali Nayeem',
      alternateName: 'Kazinayeem',
      jobTitle: 'CEO & Co-Founder',
      url: 'https://bornosoftnr.com/teams',
    },
    {
      '@type': 'Person',
      name: 'Reduan Ahmed',
      alternateName: 'Redwan Ahmed',
      jobTitle: 'CTO & Co-Founder',
      url: 'https://bornosoftnr.com/teams',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'BD',
    addressLocality: 'Dhaka',
    addressRegion: 'Dhaka',
    postalCode: '1205',
    streetAddress: 'House 123, Road 12, Dhanmondi',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    email: 'info@bornosoftnr.com',
    telephone: '+880-1718485840',
  },
  knowsAbout: [
    'Software Development',
    'AI Solutions',
    'SaaS Development',
    'Web Development',
    'Mobile App Development',
    'Cloud Solutions',
    'DevOps Services',
  ],
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'BornoSoft',
  image: 'https://bornosoftnr.com/logo.png',
  description: 'Software development company in Bangladesh',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'House 123, Road 12, Dhanmondi',
    addressLocality: 'Dhaka',
    addressRegion: 'Dhaka',
    postalCode: '1205',
    addressCountry: 'BD',
  },
  priceRange: '$$',
  telephone: '+880-1718485840',
  url: 'https://bornosoftnr.com',
  areaServed: ['BD', 'US', 'UK', 'AE'],
};
