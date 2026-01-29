import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    { 
      id: 1, 
      title: 'Top 10 Software Development Trends in 2026', 
      date: 'Jan 10, 2026', 
      author: 'Admin',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
      excerpt: 'Explore the latest trends shaping software development including AI integration, edge computing, and low-code platforms.'
    },
    { 
      id: 2, 
      title: 'How to Choose the Right Technology Stack', 
      date: 'Jan 8, 2026', 
      author: 'Admin',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
      excerpt: 'A comprehensive guide to selecting the best tech stack for your project based on scalability, performance, and team expertise.'
    },
    { 
      id: 3, 
      title: 'The Future of Cloud Computing', 
      date: 'Jan 5, 2026', 
      author: 'Admin',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      excerpt: 'Discover how cloud computing is evolving with serverless architecture, multi-cloud strategies, and enhanced security.'
    },
    { 
      id: 4, 
      title: 'Building Scalable Mobile Applications', 
      date: 'Jan 3, 2026', 
      author: 'Admin',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
      excerpt: 'Learn best practices for developing mobile apps that scale efficiently with React Native and Flutter frameworks.'
    },
    { 
      id: 5, 
      title: 'Microservices Architecture Best Practices', 
      date: 'Dec 28, 2025', 
      author: 'Admin',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      excerpt: 'Master microservices design patterns, API gateways, and service mesh for enterprise-grade applications.'
    },
    { 
      id: 6, 
      title: 'DevOps Automation Tools in 2026', 
      date: 'Dec 25, 2025', 
      author: 'Admin',
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&q=80',
      excerpt: 'Streamline your development pipeline with CI/CD automation, containerization, and infrastructure as code.'
    },
    { 
      id: 7, 
      title: 'Cybersecurity for Modern Web Apps', 
      date: 'Dec 20, 2025', 
      author: 'Admin',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
      excerpt: 'Protect your applications with advanced security measures including OAuth, encryption, and penetration testing.'
    },
    { 
      id: 8, 
      title: 'AI and Machine Learning Integration', 
      date: 'Dec 15, 2025', 
      author: 'Admin',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      excerpt: 'Integrate AI capabilities into your software with TensorFlow, PyTorch, and cloud-based ML services.'
    },
    { 
      id: 9, 
      title: 'Progressive Web Apps Development Guide', 
      date: 'Dec 10, 2025', 
      author: 'Admin',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      excerpt: 'Build fast, reliable PWAs that deliver native app experiences using service workers and modern web APIs.'
    },
    { 
      id: 10, 
      title: 'Database Optimization Techniques', 
      date: 'Dec 5, 2025', 
      author: 'Admin',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80',
      excerpt: 'Boost database performance with indexing strategies, query optimization, and caching mechanisms.'
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="section-heading mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="section-subheading">
            Latest insights, news, and updates from the world of software development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mb-4 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-3">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center space-x-1">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <User size={16} />
                  <span>{post.author}</span>
                </div>
              </div>
              <button className="text-blue-600 font-semibold flex items-center space-x-2 hover:space-x-3 transition-all duration-300">
                <span>Read More</span>
                <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
