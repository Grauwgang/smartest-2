import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-medium mb-6 bg-gradient-to-r from-slate-400 to-white bg-clip-text text-transparent">
              What is $SMARTEST?
            </h2>
          </div>

          <div className="space-y-6">
            <div className="backdrop-blur-lg bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-300">
              <h3 className="text-lg font-medium mb-3 bg-gradient-to-r from-slate-400 to-white bg-clip-text text-transparent">
                The Concept
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                $SMARTEST is the first memecoin where your intelligence is rewarded on-chain. Each day, users submit prompts in a battle royale of wit, chaos, and AI absurdity. The best prompts — judged by GPT models and community votes — earn $SMARTEST tokens.
              </p>
            </div>

            <div className="backdrop-blur-lg bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-300">
              <h3 className="text-lg font-medium mb-3 bg-gradient-to-r from-slate-400 to-white bg-clip-text text-transparent">
                Unique Approach
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                Unlike other meme coins, $SMARTEST isn't based on hype alone — it's earned through brainpower, humor, and creative prompting. A true "Proof of Prompt."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;