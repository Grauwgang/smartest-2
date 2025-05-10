import React, { useState, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import "keen-slider/keen-slider.min.css";
import { PenLine, Bot, Vote, TrendingUp } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
    mode: "snap",
    slides: { perView: 1, spacing: 32 },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 32 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 32 },
      },
    },
  });

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, 3000);

    return () => {
      clearInterval(autoplayInterval);
    };
  }, [instanceRef]);

  const steps = [
    {
      icon: <PenLine className="w-5 h-5" />,
      title: 'Write a Prompt',
      description: 'Enter the arena with a prompt — weird, brilliant, or degen.'
    },
    {
      icon: <Bot className="w-5 h-5" />,
      title: 'AI Judges It',
      description: 'GPT-4 scores creativity, logic, humor, and viral potential.'
    },
    {
      icon: <Vote className="w-5 h-5" />,
      title: 'Community Votes',
      description: 'Bonus points if the people love it. Boost it with $SMARTEST.'
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: 'Earn & Climb',
      description: 'Win tokens, level up, and flex on the leaderboard.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium mb-6 bg-gradient-to-r from-slate-400 to-white bg-clip-text text-transparent">
            How It Works
          </h2>
        </div>

        <div ref={sliderRef} className="keen-slider">
          {steps.map((step, index) => (
            <div key={index} className="keen-slider__slide">
              <div className="backdrop-blur-lg bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-300 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-lg flex items-center justify-center text-blue-400">
                    {step.icon}
                  </div>
                  <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center ml-auto text-blue-400 text-sm">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-medium mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {loaded && instanceRef.current && (
          <div className="flex justify-center mt-8 gap-2">
            {[...Array(steps.length)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === idx ? 'bg-blue-400 w-4' : 'bg-white/20'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HowItWorks;