import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Roadmap: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const roadmapData = [
    {
      quarter: 'Q2 2025',
      items: [
        'Launch Prompt Bot v1',
        'Token claim & leaderboard site',
        'First IQ Cup Tournament'
      ]
    },
    {
      quarter: 'Q3 2025',
      items: [
        'GPT model upgrades',
        'Meme-to-NFT minting integration',
        'Community DAO proposal system'
      ]
    },
    {
      quarter: 'Q4 2025',
      items: [
        'Partnered prompt battles w/ meme DAOs',
        'Live event: "PromptCon" (online)',
        'Brainfarm Mode: Long-form prompt competitions'
      ]
    },
    {
      quarter: 'Q1 2026',
      items: [
        'Open-source scoring protocol',
        'AI vs. Human weekly tournaments',
        'BrainDAO treasury deployment'
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-20 px-4 relative" ref={containerRef}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium mb-6 bg-gradient-to-r from-slate-400 to-white bg-clip-text text-transparent">
            Roadmap
          </h2>
        </div>

        <div className="relative">
          <motion.div
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-400 transform md:translate-x-[-50%] hidden md:block"
            style={{
              scaleY: scrollYProgress
            }}
          />

          <div className="space-y-16 md:space-y-0 relative">
            {roadmapData.map((period, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className={`md:flex ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} pl-10 md:pl-0 relative`}>
                    <div className="backdrop-blur-lg bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300">
                      <h3 className="text-xl font-medium mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        {period.quarter}
                      </h3>
                      <ul className="space-y-3">
                        {period.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center text-sm text-slate-400">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;