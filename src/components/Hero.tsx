import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const Hero: React.FC = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <spline-viewer url="https://prod.spline.design/yvvG8yhQGDSztm3A/scene.splinecode"></spline-viewer>
      </div>
      
      <animated.div style={fadeIn} className="relative z-10 text-center">
        <h1 className="text-6xl md:text-7xl font-medium mb-6 leading-tight bg-gradient-to-r from-slate-400 to-white bg-clip-text text-transparent">
          The Smartest Coin in Crypto
        </h1>
      </animated.div>
    </section>
  );
};

export default Hero;