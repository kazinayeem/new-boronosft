import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    { id: 1, title: 'Top 10 Software Development Trends in 2026', date: 'Jan 10, 2026', author: 'Admin' },
    { id: 2, title: 'How to Choose the Right Technology Stack', date: 'Jan 8, 2026', author: 'Admin' },
    { id: 3, title: 'The Future of Cloud Computing', date: 'Jan 5, 2026', author: 'Admin' },
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
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mb-4"></div>
              <h3 className="text-xl font-bold mb-3">{post.title}</h3>
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
