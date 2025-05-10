import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, ArrowUp } from 'lucide-react';

const Leaderboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('daily');
  
  const leaderboardData = {
    daily: [
      { rank: 1, wallet: '0x7a...3b2c', prompt: 'When ETH breaks 10k, PEPE will...', score: 9.8, earned: 1240 },
      { rank: 2, wallet: '0x2b...9f1d', prompt: 'Wojak buys the dip on Mars', score: 9.6, earned: 980 },
      { rank: 3, wallet: '0xc4...6e7a', prompt: 'GMI if you can explain...', score: 9.4, earned: 870 },
      { rank: 4, wallet: '0x1d...7b3c', prompt: 'WAGMI but only if...', score: 9.1, earned: 750 },
      { rank: 5, wallet: '0x8e...2a4f', prompt: 'Vitalik walks into a bar and...', score: 8.9, earned: 620 },
    ],
    weekly: [
      { rank: 1, wallet: '0xc4...6e7a', prompt: 'GMI if you can explain...', score: 9.4, earned: 4320 },
      { rank: 2, wallet: '0x7a...3b2c', prompt: 'When ETH breaks 10k, PEPE will...', score: 9.8, earned: 3980 },
      { rank: 3, wallet: '0x8e...2a4f', prompt: 'Vitalik walks into a bar and...', score: 8.9, earned: 3750 },
      { rank: 4, wallet: '0x2b...9f1d', prompt: 'Wojak buys the dip on Mars', score: 9.6, earned: 3420 },
      { rank: 5, wallet: '0x1d...7b3c', prompt: 'WAGMI but only if...', score: 9.1, earned: 3210 },
    ],
    allTime: [
      { rank: 1, wallet: '0x8e...2a4f', prompt: 'Vitalik walks into a bar and...', score: 8.9, earned: 12460 },
      { rank: 2, wallet: '0xc4...6e7a', prompt: 'GMI if you can explain...', score: 9.4, earned: 11320 },
      { rank: 3, wallet: '0x1d...7b3c', prompt: 'WAGMI but only if...', score: 9.1, earned: 10870 },
      { rank: 4, wallet: '0x7a...3b2c', prompt: 'When ETH breaks 10k, PEPE will...', score: 9.8, earned: 9980 },
      { rank: 5, wallet: '0x2b...9f1d', prompt: 'Wojak buys the dip on Mars', score: 9.6, earned: 9650 },
    ]
  };

  return (
    <section id="leaderboard" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium mb-6 bg-gradient-to-r from-slate-400 to-white bg-clip-text text-transparent">
            Leaderboard
          </h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="backdrop-blur-lg bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl overflow-hidden"
        >
          <div className="flex border-b border-white/10">
            {['daily', 'weekly', 'allTime'].map((tab) => (
              <button
                key={tab}
                className={`flex-1 py-4 text-sm font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-white/5 text-white border-b-2 border-blue-400'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'allTime' ? 'All Time' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-sm text-slate-400">
                  <th className="py-4 px-6 text-left">Rank</th>
                  <th className="py-4 px-6 text-left">Wallet</th>
                  <th className="py-4 px-6 text-left">Prompt</th>
                  <th className="py-4 px-6 text-right">Score</th>
                  <th className="py-4 px-6 text-right">$SMARTEST</th>
                </tr>
              </thead>
              <tbody>
                {leaderboardData[activeTab as keyof typeof leaderboardData].map((entry, index) => (
                  <motion.tr 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        {entry.rank <= 3 ? (
                          <Trophy className={`w-4 h-4 mr-2 ${
                            entry.rank === 1 ? 'text-yellow-400' : 
                            entry.rank === 2 ? 'text-slate-400' : 'text-amber-700'
                          }`} />
                        ) : null}
                        <span className="text-sm">{entry.rank}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 font-mono text-sm">{entry.wallet}</td>
                    <td className="py-4 px-6 max-w-[200px] truncate text-sm">{entry.prompt}</td>
                    <td className="py-4 px-6 text-right">
                      <span className={`text-sm ${
                        entry.score >= 9.5 ? 'text-blue-400' : 
                        entry.score >= 9.0 ? 'text-cyan-400' : 'text-slate-400'
                      }`}>
                        {entry.score.toFixed(1)}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-end space-x-1">
                        <span className="text-sm bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-medium">
                          {entry.earned.toLocaleString()}
                        </span>
                        <ArrowUp className="w-3 h-3 text-blue-400" />
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Leaderboard;