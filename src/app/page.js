'use client';

import React, { useState, useEffect } from 'react';
import { Globe, Leaf } from 'lucide-react';
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
        <div className="bg-emerald-900/50 backdrop-blur px-8 py-6 rounded-lg border border-emerald-800 animate-fade-in min-w-[160px]">
          <div className="text-7xl font-light mb-2">{String(timeLeft.hours).padStart(2, '0')}</div>
          <div className="text-emerald-300 text-sm mt-2 font-light tracking-widest">HOURS</div>
        </div>
        <div className="text-7xl font-light self-center animate-pulse">:</div>
        <div className="bg-emerald-900/50 backdrop-blur px-8 py-6 rounded-lg border border-emerald-800 animate-fade-in min-w-[160px]">
          <div className="text-7xl font-light mb-2">{String(timeLeft.minutes).padStart(2, '0')}</div>
          <div className="text-emerald-300 text-sm mt-2 font-light tracking-widest">MINUTES</div>
        </div>
        <div className="text-7xl font-light self-center animate-pulse">:</div>
        <div className="bg-emerald-900/50 backdrop-blur px-8 py-6 rounded-lg border border-emerald-800 animate-fade-in min-w-[160px]">
          <div className="text-7xl font-light mb-2">{String(timeLeft.seconds).padStart(2, '0')}</div>
          <div className="text-emerald-300 text-sm mt-2 font-light tracking-widest">SECONDS</div>
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
        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-6 py-4 max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl font-light tracking-wider text-emerald-300 mb-4">Verify Token Status</h2>
          <p className="text-lg text-zinc-300 leading-relaxed">
            Hold minimum {siteConfig.token.requiredAmount} ${siteConfig.token.symbol} tokens to be eligible for free visa application
          </p>
        </div>

        <div className="bg-emerald-900/30 backdrop-blur rounded-lg p-6 max-w-2xl mx-auto mb-8">
          <h3 className="text-xl font-light tracking-wider text-emerald-300 mb-4">About ${siteConfig.token.symbol} Token</h3>
          <p className="text-lg text-zinc-300 leading-relaxed">
            ${siteConfig.token.symbol} is the governance token of Thailand DAO. Token holders can participate in important decisions,
            receive profit sharing, and enjoy exclusive benefits including free visa applications.
          </p>
        </div>

        <p className="text-lg text-zinc-300 leading-relaxed">
          Submit your wallet address to unlock exclusive benefits:
          <span className="block mt-4 text-emerald-300/90">
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
            className="w-full px-6 py-4 bg-emerald-900/50 border border-emerald-700 rounded-lg text-white placeholder-emerald-300/50 focus:outline-none focus:border-emerald-500 transition-colors"
          />
        </div>
        <button
          type="submit"
          className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-lg text-white font-medium tracking-wider transition-all duration-300 hover:scale-105"
        >
          {isSubmitted ? 'Submitted Successfully!' : 'Submit Address'}
        </button>
      </form>
    </div>
  );
};

const TeamMember = ({ role, name, description }) => (
  <div className="bg-emerald-900/30 backdrop-blur rounded-lg p-6 border border-emerald-800 hover:border-emerald-500/50 transition-all duration-500 group">
    <div className="flex items-center gap-6">
      <img
        src={`https://i.pravatar.cc/150?u=${name}`}
        alt={name}
        className="w-20 h-20 rounded-full object-cover border-2 border-emerald-500/30 group-hover:border-emerald-500 transition-all duration-500"
      />
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-light tracking-wider truncate">{name}</h3>
        <div className="text-emerald-400 text-sm font-medium tracking-widest">{role}</div>
        <p className="text-zinc-400 text-sm leading-relaxed mt-2">{description}</p>
      </div>
    </div>
  </div>
);

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#006A4E] via-[#00563B] to-[#004D35] text-white">
      {/* Header / Navigation */}
      <nav className="p-8 flex justify-between items-center">
        <div className="flex items-center gap-3 border border-white/20 px-4 py-2 rounded-lg bg-white/10 backdrop-blur hover:bg-white/20 transition-all duration-300 cursor-pointer">
          {/* Thai Flag SVG */}
          <svg className="w-10 h-8" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
            <rect width="900" height="600" fill="#ED1C24"/>
            <rect width="900" height="400" y="100" fill="#FFFFFF"/>
            <rect width="900" height="200" y="200" fill="#241D4F"/>
          </svg>
          <div className="flex flex-col">
            <span className="text-lg font-light tracking-widest">THAILAND</span>
            <span className="text-xs text-white/60">Kingdom of Thailand</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a href={siteConfig.social.twitter} className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300 hover:scale-110 transform">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href={siteConfig.social.telegram} className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300 hover:scale-110 transform">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.53-1.39.52-.46-.01-1.33-.26-1.98-.48-.8-.27-1.43-.42-1.37-.89.03-.25.38-.51 1.03-.78 4.04-1.76 6.74-2.92 8.09-3.48 3.85-1.6 4.64-1.88 5.17-1.89.11 0 .37.03.54.18.14.12.18.28.2.45-.02.07-.02.13-.03.28z"/>
              </svg>
            </a>
          </div>
          <div className="text-lg font-light tracking-widest border border-emerald-800/50 px-4 py-2 rounded-lg flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
            THAILAND DAO
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
          <div className="bg-emerald-900/30 backdrop-blur-sm border border-emerald-800/50 rounded-2xl p-12 transform hover:scale-[1.02] transition-all duration-500">
            <h1 className="text-3xl font-light mb-6 tracking-[0.2em] bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">
              {siteConfig.title}
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed tracking-wider mb-6">
              {siteConfig.description}
            </p>
            <div className="text-lg text-emerald-400/90 italic tracking-wide font-light mb-8">
              {siteConfig.slogan}
            </div>
      {/* Contract Address Section */}
            <div className="flex items-center justify-center gap-4 bg-emerald-900/50 backdrop-blur-sm p-4 rounded-lg border border-emerald-800/50">
              <div className="text-zinc-400 font-light">
                <span className="text-zinc-500">CA: </span>
                <span className="font-mono">{siteConfig.contract.ca}</span>
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(siteConfig.contract.ca);
                }}
                className="px-4 py-2 bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/30
                          rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy CA
              </button>
            </div>

            <div className="mt-12 p-8 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
              <h3 className="text-2xl font-light mb-6 text-white tracking-wide">About Thailand</h3>
              <div className="space-y-4 text-white/90 leading-relaxed text-lg max-w-3xl mx-auto">
                <p>
                  Located in the heart of Southeast Asia, Thailand is a vibrant kingdom known for its rich cultural heritage,
                  pristine beaches, and world-renowned hospitality.
                </p>
                <p>
                  As a premier tourist destination, Thailand captivates visitors with its ancient temples,
                  bustling markets, luxury resorts, and exquisite cuisine. The country welcomes over 40 million visitors annually,
                  making tourism a vital pillar of its dynamic economy.
                </p>
                <p>
                  With its perfect blend of traditional charm and modern amenities, tropical climate,
                  and year-round attractions, Thailand stands as the jewel of Southeast Asia,
                  offering unforgettable experiences for every traveler.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Countdown Section */}
        <div className="text-center mb-8">
          <div className="text-2xl font-light tracking-wider text-emerald-300 mb-4">Token Benefits Access</div>
          <p className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto">
            Hold {siteConfig.token.requiredAmount} ${siteConfig.token.symbol} tokens to unlock exclusive benefits including free visa applications
            and AI tour guide services. Join our community and be part of Thailand's digital transformation.
          </p>
        </div>

        {/* Countdown Timer Component */}
        <CountdownTimer />
        <div className="text-center mb-16">
          <p className="text-zinc-400 tracking-wider">Time remaining for early token benefits</p>
        </div>

        {/* Wallet Submission Component */}
        <WalletSubmission />

        {/* Two Cards Section */}
        <div className="flex gap-24 max-w-7xl mx-auto mb-32">
          {/* Left Card */}
          <div className="flex-1 bg-emerald-900/50 backdrop-blur rounded-lg p-8 border border-emerald-800 hover:border-emerald-500/50 transition-all duration-500 transform hover:-translate-y-2">
            <div className="mb-6">
              <Leaf className="w-12 h-12 text-emerald-500" />
            </div>
            <h2 className="text-4xl font-light mb-4 italic">Experience Thailand.</h2>
            <p className="text-zinc-400 mb-8 text-lg leading-relaxed">
              Discover the beauty of Thailand with our AI-powered tour guide. Get personalized
              recommendations for temples, beaches, and cultural experiences. Access exclusive
              insights and hidden gems throughout your Thai adventure.
            </p>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-md transition-all duration-300 hover:scale-105">
              Explore Now
            </button>
          </div>

          {/* Right Card */}
          <div className="flex-1 bg-emerald-900/50 backdrop-blur rounded-lg p-8 border border-emerald-800 hover:border-emerald-500/50 transition-all duration-500 transform hover:-translate-y-2">
            <div className="mb-6">
              <Globe className="w-12 h-12 text-zinc-400" />
            </div>
            <h2 className="text-4xl font-light mb-4 italic">Join Our DAO.</h2>
            <p className="text-zinc-400 mb-8 text-lg leading-relaxed">
              Become part of a community that's shaping the future of tourism in Thailand.
              Enjoy exclusive benefits, participate in governance, and earn rewards through
              our innovative blockchain platform.
            </p>
            <button className="border border-emerald-600 hover:bg-emerald-800 px-8 py-3 rounded-md transition-all duration-300 hover:scale-105">
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
            <button className="border border-emerald-600 hover:bg-emerald-800 px-6 py-2 rounded-md transition-all duration-300 hover:scale-105 text-sm tracking-wider">
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