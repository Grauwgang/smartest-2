import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Lightbulb, BarChart3, Repeat, Vote, Gamepad2, Shield
} from 'lucide-react';

const FeatureCard = ({ feature, index }: any) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ rotateX: 90, opacity: 0 }}
      animate={inView ? { rotateX: 0, opacity: 1 } : { rotateX: 90, opacity: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="backdrop-blur-lg bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-lg flex items-center justify-center text-blue-400">
          {feature.icon}
        </div>
      </div>
      <h3 className="text-lg font-medium mb-3 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
        {feature.title}
      </h3>
      <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: 'Prompt-to-Earn Engine',
      description: 'Submit original AI prompts and earn based on score.'
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: 'On-Chain Leaderboards',
      description: 'Daily, weekly, and monthly rankings of top prompt warriors.'
    },
    {
      icon: <Repeat className="w-5 h-5" />,
      title: 'Meme Amplifier Bot',
      description: 'Viral prompts and AI responses posted on X automatically.'
    },
    {
      icon: <Vote className="w-5 h-5" />,
      title: 'GPT Fusion Voting',
      description: 'Multiple models + community scoring for anti-rigged fairness.'
    },
    {
      icon: <Gamepad2 className="w-5 h-5" />,
      title: 'Degen IQ Quests',
      description: 'Bonus challenges with themed prompts, like "Only Memecoins" week.'
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'Anti-Cheater IQ Scrubber',
      description: 'AI penalizes spam, repeats, and tryhard cringe. Stay sharp.'
    }
  ];

  return (
    <section id="features" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-transparent"></div>
      
      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Features
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto opacity-50 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;