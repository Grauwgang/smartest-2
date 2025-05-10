import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FaqItem: React.FC<{ faq: { question: string; answer: string }; index: number }> = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-100, 100], [2, -2]);
  const rotateY = useTransform(mouseX, [-100, 100], [-2, 2]);
  
  const springConfig = { stiffness: 150, damping: 15 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        rotateX: rotateXSpring,
        rotateY: rotateYSpring,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="backdrop-blur-lg bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300"
    >
      <button
        className="w-full p-6 flex justify-between items-center text-left transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium bg-gradient-to-r from-slate-400 to-white bg-clip-text text-transparent">
          {faq.question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-blue-400" />
        </motion.div>
      </button>
      
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-6 pt-0">
          <p className="text-sm leading-relaxed text-slate-400">{faq.answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Faq: React.FC = () => {
  const faqs = [
    {
      question: "Can I earn just by writing?",
      answer: "Yes. If your prompts are creative and engaging, the AI system will reward you with $SMARTEST tokens based on quality scoring."
    },
    {
      question: "How is it judged?",
      answer: "A sophisticated GPT-based scoring system evaluates prompts on multiple criteria: creativity, coherence, humor, and viral potential. Community votes also play a crucial role in the final score."
    },
    {
      question: "Is $SMARTEST a joke or real?",
      answer: "It's both - a serious platform wrapped in meme culture. While the concept is fun, the technology and earnings are very real."
    },
    {
      question: "Do I need to be a crypto expert?",
      answer: "Not at all. If you can write creative prompts and understand basic concepts, you're ready to start. The platform handles all the complex crypto operations."
    },
    {
      question: "How often can I submit prompts?",
      answer: "You can submit up to 5 prompts per day. Choose your submissions wisely to maximize your earning potential."
    },
    {
      question: "Can I sell my $SMARTEST tokens?",
      answer: "Yes, once earned, tokens are yours to hold, trade, or use for prompt boosting on major DEXes."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium mb-6 bg-gradient-to-r from-slate-400 to-white bg-clip-text text-transparent">
            FAQ
          </h2>
        </div>

        <div className="space-y-4 perspective-1000">
          {faqs.map((faq, index) => (
            <FaqItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;