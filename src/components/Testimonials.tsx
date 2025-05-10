import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "I've never felt dumber getting rich. 10/10 coin.",
      author: '@PromptGoblin',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      quote: "GPT gave me a 9.6 for 'Wojak buys the dip on Mars'. I ascended.",
      author: '@IQFarmer',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      quote: "This is therapy, but on-chain.",
      author: '@CryptoFreud',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium mb-6 bg-gradient-to-r from-slate-400 to-white bg-clip-text text-transparent">
            Testimonials
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="backdrop-blur-lg bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-300 group"
            >
              <Quote className="w-8 h-8 mb-6 text-blue-400 opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <p className="text-lg mb-8 leading-relaxed text-slate-300 group-hover:text-white transition-colors">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-4 ring-2 ring-white/10 group-hover:ring-blue-400/50 transition-all">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-medium bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {testimonial.author}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;