'use client';

import React, { useState, useEffect } from 'react';
import { Globe, Mountain } from 'lucide-react';
import { siteConfig } from '@/config/site';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 48,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const totalSeconds = prev.hours * 3600 + prev.minutes * 60 + prev.seconds - 1;
        if (totalSeconds < 0) {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
        return {
          hours: Math.floor(totalSeconds / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center mb-16">
      <div className="flex justify-center gap-4 mb-8">
        <div className="bg-blue-900/50 backdrop-blur px-8 py-6 rounded-lg border border-blue-800 animate-fade-in min-w-[160px]">
          <div className="text-7xl font-light mb-2">{String(timeLeft.hours).padStart(2, '0')}</div>
          <div className="text-blue-300 text-sm mt-2 font-light tracking-widest">HOURS</div>
        </div>
        <div className="text-7xl font-light self-center animate-pulse">:</div>
        <div className="bg-blue-900/50 backdrop-blur px-8 py-6 rounded-lg border border-blue-800 animate-fade-in min-w-[160px]">
          <div className="text-7xl font-light mb-2">{String(timeLeft.minutes).padStart(2, '0')}</div>
          <div className="text-blue-300 text-sm mt-2 font-light tracking-widest">MINUTES</div>
        </div>
        <div className="text-7xl font-light self-center animate-pulse">:</div>
        <div className="bg-blue-900/50 backdrop-blur px-8 py-6 rounded-lg border border-blue-800 animate-fade-in min-w-[160px]">
          <div className="text-7xl font-light mb-2">{String(timeLeft.seconds).padStart(2, '0')}</div>
          <div className="text-blue-300 text-sm mt-2 font-light tracking-widest">SECONDS</div>
        </div>
      </div>
    </div>
  );
};

const WalletSubmission = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (walletAddress) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="max-w-3xl mx-auto text-center mb-24">
      <div className="space-y-6 mb-12">
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg px-6 py-4 max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl font-light tracking-wider text-blue-300 mb-4">Verify Token Status</h2>
          <p className="text-lg text-zinc-300 leading-relaxed">
            Hold minimum {siteConfig.token.requiredAmount} ${siteConfig.token.symbol} tokens to be eligible for free visa application
          </p>
        </div>

        <div className="bg-blue-900/30 backdrop-blur rounded-lg p-6 max-w-2xl mx-auto mb-8">
          <h3 className="text-xl font-light tracking-wider text-blue-300 mb-4">About ${siteConfig.token.symbol} Token</h3>
          <p className="text-lg text-zinc-300 leading-relaxed">
            ${siteConfig.token.symbol} is the governance token of Andorra DAO. Token holders can participate in important decisions,
            receive profit sharing, and enjoy exclusive benefits including free visa applications.
          </p>
        </div>

        <p className="text-lg text-zinc-300 leading-relaxed">
          Submit your wallet address to unlock exclusive benefits:
          <span className="block mt-4 text-blue-300/90">
            • Free Visa Application<br/>
            • AI Tour Guide Services<br/>
            • DAO Governance Rights<br/>
            • Profit Sharing
          </span>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="max-w-2xl mx-auto">
          <input
            type="text"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            placeholder="Enter your wallet address"
            className="w-full px-6 py-4 bg-blue-900/50 border border-blue-700 rounded-lg text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
        <button
          type="submit"
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium tracking-wider transition-all duration-300 hover:scale-105"
        >
          {isSubmitted ? 'Submitted Successfully!' : 'Submit Address'}
        </button>
      </form>
    </div>
  );
};

const TeamMember = ({ role, name, description }) => (
  <div className="bg-blue-900/30 backdrop-blur rounded-lg p-6 border border-blue-800 hover:border-blue-500/50 transition-all duration-500 group">
    <div className="flex items-center gap-6">
      <img
        src={`https://i.pravatar.cc/150?u=${name}`}
        alt={name}
        className="w-20 h-20 rounded-full object-cover border-2 border-blue-500/30 group-hover:border-blue-500 transition-all duration-500"
      />
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-light tracking-wider truncate">{name}</h3>
        <div className="text-blue-400 text-sm font-medium tracking-widest">{role}</div>
        <p className="text-zinc-400 text-sm leading-relaxed mt-2">{description}</p>
      </div>
    </div>
  </div>
);

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1E3A8A] via-[#1E40AF] to-[#1E4ED8] text-white">
      {/* Header / Navigation */}
      <nav className="p-8 flex justify-between items-center">
        <div className="flex items-center gap-3 border border-white/20 px-4 py-2 rounded-lg bg-white/10 backdrop-blur hover:bg-white/20 transition-all duration-300 cursor-pointer">
          <svg className="w-10 h-8" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
            <rect width="900" height="600" fill="#0018A8"/>
            <rect width="900" height="400" fill="#FECD00"/>
            <rect width="900" height="200" fill="#C1272D"/>
            <g transform="translate(350,240) scale(1.2)">
              <path fill="#AF1110" d="M415.714 305c1.137 0 2.242.147 3.286.429 1.054.282 2.036.687 2.928 1.214.892.527 1.667 1.176 2.286 1.928.63.742 1.054 1.577 1.286 2.5h-4.429c-.304-.461-.77-.843-1.357-1.143-.577-.3-1.238-.429-2-.429-.762 0-1.423.129-2 .429-.577.3-1.042.682-1.357 1.143h-4.429c.232-.923.656-1.758 1.286-2.5.619-.752 1.393-1.401 2.285-1.928.893-.527 1.875-.932 2.929-1.214 1.044-.282 2.149-.429 3.286-.429zm-6.143 8.571h12.286v2.858h-12.286v-2.858zm0 5.715h12.286v2.857h-12.286v-2.857zm12.286 5.714v2.857h-12.286V325h12.286z"/>
            </g>
          </svg>
          <div className="flex flex-col">
            <span className="text-lg font-light tracking-widest">ANDORRA</span>
            <span className="text-xs text-white/60">Principality of Andorra</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a href={siteConfig.social.twitter} className="text-blue-400 hover:text-blue-300 transition-colors duration-300 hover:scale-110 transform">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href={siteConfig.social.telegram} className="text-blue-400 hover:text-blue-300 transition-colors duration-300 hover:scale-110 transform">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.53-1.39.52-.46-.01-1.33-.26-1.98-.48-.8-.27-1.43-.42-1.37-.89.03-.25.38-.51 1.03-.78 4.04-1.76 6.74-2.92 8.09-3.48 3.85-1.6 4.64-1.88 5.17-1.89.11 0 .37.03.54.18.14.12.18.28.2.45-.02.07-.02.13-.03.28z"/>
              </svg>
            </a>
          </div>
          <div className="text-lg font-light tracking-widest border border-blue-800/50 px-4 py-2 rounded-lg flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
            ANDORRA DAO
          </div>
        </div>
      </nav>

      {/* Main Title */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-[10rem] font-light tracking-wider text-center mb-16 text-white"
             style={{
               fontFamily: "'Times New Roman', serif",
               letterSpacing: '0.15em',
               textShadow: '0 0 60px rgba(255,255,255,0.2)'
             }}>
          {siteConfig.name}
        </div>
      </div>
      {/* Main Content */}
      <main className="container mx-auto px-4 relative">
        {/* Project Introduction */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <div className="bg-blue-900/30 backdrop-blur-sm border border-blue-800/50 rounded-2xl p-12 transform hover:scale-[1.02] transition-all duration-500">
            <h1 className="text-3xl font-light mb-6 tracking-[0.2em] bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
              {siteConfig.title}
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed tracking-wider mb-6">
              {siteConfig.description}
            </p>
            <div className="text-lg text-blue-400/90 italic tracking-wide font-light mb-8">
              {siteConfig.slogan}
            </div>

            <div className="flex items-center justify-center gap-4 bg-blue-900/50 backdrop-blur-sm p-4 rounded-lg border border-blue-800/50">
              <div className="text-zinc-400 font-light">
                <span className="text-zinc-500">CA: </span>
                <span className="font-mono">{siteConfig.contract.ca}</span>
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(siteConfig.contract.ca);
                }}
                className="px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30
                          rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy CA
              </button>
            </div>

            <div className="mt-12 p-8 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
              <h3 className="text-2xl font-light mb-6 text-white tracking-wide">About Andorra</h3>
              <div className="space-y-4 text-white/90 leading-relaxed text-lg max-w-3xl mx-auto">
                <p>
                  Nestled in the majestic Pyrenees mountains between France and Spain, Andorra is a sovereign microstate
                  that combines breathtaking natural beauty with modern luxury.
                </p>
                <p>
                  As a premier destination, Andorra is renowned for its world-class ski resorts, tax-free shopping,
                  and stunning alpine landscapes. The country welcomes over 8 million visitors annually, making tourism
                  a cornerstone of its thriving economy.
                </p>
                <p>
                  With its rich Catalan heritage, year-round outdoor activities, and exceptional quality of life,
                  Andorra stands as a unique blend of medieval charm and contemporary sophistication in the heart
                  of Europe.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Countdown Section */}
        <div className="text-center mb-8">
          <div className="text-2xl font-light tracking-wider text-blue-300 mb-4">Token Benefits Access</div>
          <p className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto">
            Hold {siteConfig.token.requiredAmount} ${siteConfig.token.symbol} tokens to unlock exclusive benefits including free visa applications
            and AI tour guide services. Join our community and be part of Andorra's digital transformation.
          </p>
        </div>

        {/* Countdown Timer */}
        <CountdownTimer />
        <div className="text-center mb-16">
          <p className="text-zinc-400 tracking-wider">Time remaining for early token benefits</p>
        </div>

        {/* Wallet Submission */}
        <WalletSubmission />

        {/* Two Cards Section */}
        <div className="flex gap-24 max-w-7xl mx-auto mb-32">
          {/* Left Card */}
          <div className="flex-1 bg-blue-900/50 backdrop-blur rounded-lg p-8 border border-blue-800 hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-2">
            <div className="mb-6">
              <Globe className="w-12 h-12 text-blue-500" />
            </div>
            <h2 className="text-4xl font-light mb-4 italic">Experience Andorra.</h2>
            <p className="text-zinc-400 mb-8 text-lg leading-relaxed">
              Discover the beauty of Andorra with our AI-powered tour guide. Get personalized
              recommendations, cultural insights, and exclusive access to the best experiences
              this magnificent country has to offer.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md transition-all duration-300 hover:scale-105">
              Explore Now
            </button>
          </div>

          {/* Right Card */}
          <div className="flex-1 bg-blue-900/50 backdrop-blur rounded-lg p-8 border border-blue-800 hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-2">
            <div className="mb-6">
              <Mountain className="w-12 h-12 text-zinc-400" />
            </div>
            <h2 className="text-4xl font-light mb-4 italic">Join Our DAO.</h2>
            <p className="text-zinc-400 mb-8 text-lg leading-relaxed">
              Become part of a community that's shaping the future of tourism in Andorra.
              Enjoy exclusive benefits, participate in governance, and earn rewards through
              our innovative blockchain platform.
            </p>
            <button className="border border-blue-600 hover:bg-blue-800 px-8 py-3 rounded-md transition-all duration-300 hover:scale-105">
              Learn More
            </button>
          </div>
        </div>

        {/* Team Section */}
        <section className="max-w-4xl mx-auto pb-24">
          <h2 className="text-3xl font-light text-center mb-4 tracking-widest">Core Team</h2>
          <p className="text-zinc-400 text-center mb-12 tracking-wider">Meet the innovators behind {siteConfig.title}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {siteConfig.team.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                description={member.description}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="border border-blue-600 hover:bg-blue-800 px-6 py-2 rounded-md transition-all duration-300 hover:scale-105 text-sm tracking-wider">
              View Full Team
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 text-center text-zinc-600">
        <p className="text-sm">© 2025 {siteConfig.title}. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;